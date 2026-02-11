package com.zerov.shj.core;

import com.zerov.shj.core.config.DatabaseConfig;
import com.zerov.shj.core.config.DatabaseType;
import com.zerov.shj.core.model.QueryResult;
import com.zerov.shj.core.model.QueryRequest;
import com.zerov.shj.core.security.SqlSecurityValidator;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.net.JarURLConnection;
import java.net.URL;
import java.net.URLClassLoader;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.jar.JarEntry;
import java.util.jar.JarFile;
import java.sql.*;
import java.util.*;
import java.util.logging.Logger;

/**
 * 数据查询引擎核心类
 * 负责执行数据库查询并返回结果
 */
@Slf4j
@Component
public class DataQueryEngine {

    @Autowired
    private SqlSecurityValidator sqlSecurityValidator;
    /**
     * 执行数据库查询
     *
     * @param request 查询请求
     * @return 查询结果
     */
    public QueryResult executeQuery(QueryRequest request) {
        QueryResult result = new QueryResult();

        // 安全验证
        SqlSecurityValidator.SqlValidationResult validationResult = sqlSecurityValidator.validateSql(request.getSql());

        if (!validationResult.isValid()) {
            log.warn("SQL安全验证失败: {}", validationResult.getMessage());
            result.setSuccess(false);
            result.setMessage("SQL安全验证失败: " + validationResult.getMessage());
            return result;
        }

        long startTime = System.currentTimeMillis();

        try (Connection connection = createConnection(request.getConfig());
             Statement statement = connection.createStatement()) {
            // 设置查询超时时间
            if (request.getTimeout() != null) {
                statement.setQueryTimeout(request.getTimeout());
            }
            // 执行查询
            try (ResultSet resultSet = statement.executeQuery(request.getSql())) {
                // 获取字段信息
                List<String> columns = getColumnNames(resultSet);
                result.setColumns(columns);
                // 获取数据
                List<Map<String, Object>> data = getData(resultSet, columns, request.getMaxRows());
                result.setData(data);
                result.setTotalRows(data.size());
            }
            result.setSuccess(true);
            result.setMessage("查询成功");
        } catch (Exception e) {
            log.error("查询执行失败", e);
            result.setSuccess(false);
            result.setMessage("查询失败: " + e.getMessage());
        } finally {
            result.setExecutionTime(System.currentTimeMillis() - startTime);
        }

        return result;
    }


    public Boolean testConnection(String config) {
        QueryRequest request = new QueryRequest();
        request.setConfigJson(config);
        DatabaseConfig databaseConfig = request.getConfig();
        try {
            // 使用createConnection方法来正确加载驱动
            try (Connection connection = createConnection(databaseConfig)) {
                return true;
            }
        } catch (Exception e) {
            log.error("数据库连接失败", e);
            return false;
        }
    }

    /**
     * 测试数据库连接并返回详细结果
     *
     * @param config 数据库配置
     * @param type
     * @return 连接测试结果
     */
    public ConnectionTestResult testConnectionWithDetails(String config, String type) {
        QueryRequest request = new QueryRequest();
        request.setConfigJson(config);
        DatabaseConfig databaseConfig = request.getConfig();
        ConnectionTestResult result = new ConnectionTestResult();

        // 强制设置type和根据type设置正确的驱动类名
        databaseConfig.setType(type);
        DatabaseType dbType = DatabaseType.fromString(type);
        if (dbType != null && dbType.getDriverClassName() != null) {
            databaseConfig.setDriverClassName(dbType.getDriverClassName());
            log.info("根据type设置驱动类名: type={}, driver={}", type, dbType.getDriverClassName());
        }

        try {
            // 使用createConnection方法来正确加载驱动
            try (Connection connection = createConnection(databaseConfig)) {
                result.setSuccess(true);
                result.setMessage("数据库连接成功");
            }
        } catch (Exception e) {
            log.error("数据库连接失败", e);
            result.setSuccess(false);
            result.setMessage("数据库连接失败: " + e.getMessage());
            result.setException(e);
        }

        return result;
    }

    /**
     * 数据库连接测试结果
     */
    public static class ConnectionTestResult {
        private boolean success;
        private String message;
        private Exception exception;

        public boolean isSuccess() {
            return success;
        }

        public void setSuccess(boolean success) {
            this.success = success;
        }

        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }

        public Exception getException() {
            return exception;
        }

        public void setException(Exception exception) {
            this.exception = exception;
        }
    }


    /**
     * 创建数据库连接
     */
    private Connection createConnection(DatabaseConfig config) throws Exception {
        // 如果设置了type，则自动映射驱动和URL
        if (config.getType() != null && !config.getType().trim().isEmpty()) {
            DatabaseType dbType = DatabaseType.fromString(config.getType());
            if (dbType != null) {
                // 自动设置驱动类名
                if (config.getDriverClassName() == null || config.getDriverClassName().trim().isEmpty()) {
                    config.setDriverClassName(dbType.getDriverClassName());
                }

                // 如果URL为空，则从type中解析URL
                if (config.getUrl() == null || config.getUrl().trim().isEmpty()) {
                    // 这里需要从URL中提取host, port, database信息
                    // 暂时保持原有逻辑，用户需要提供完整的URL
                    log.info("自动映射驱动: type={}, driver={}", config.getType(), config.getDriverClassName());
                }
            } else {
                log.warn("不支持的数据库类型: {}", config.getType());
            }
        }

        // 加载驱动
        if (config.getDriverClassName() != null) {
            try {
                // 首先尝试直接加载驱动类
                Class.forName(config.getDriverClassName());
                log.info("成功加载驱动: {}", config.getDriverClassName());
            } catch (ClassNotFoundException e) {
                log.warn("无法直接加载驱动: {}, 尝试从drivers目录加载", config.getDriverClassName());

                // 如果直接加载失败，尝试从drivers目录加载
                loadDriverFromDriversDirectory(config.getDriverClassName());
            }
        }

        // 建立连接
        Properties props = new Properties();
        props.setProperty("user", config.getUsername());
        props.setProperty("password", config.getPassword());

        // 添加SSL配置，避免SSL警告
        props.setProperty("useSSL", "false");
        props.setProperty("allowPublicKeyRetrieval", "true");
        props.setProperty("serverTimezone", "UTC");

        return DriverManager.getConnection(config.getUrl(), props);
    }

    /**
     * 从drivers目录加载驱动
     */
    private void loadDriverFromDriversDirectory(String driverClassName) throws Exception {
        try {
            // 首先尝试从 classpath 加载（支持 jar 包内部）
            URL driversUrl = getClass().getClassLoader().getResource("drivers");
            if (driversUrl == null) {
                // 尝试相对路径
                String[] possiblePaths = {
                        "drivers",
                        "./drivers",
                        "../drivers"
                };
                for (String path : possiblePaths) {
                    File testDir = new File(path);
                    if (testDir.exists() && testDir.isDirectory()) {
                        driversUrl = testDir.toURI().toURL();
                        break;
                    }
                }
            }

            if (driversUrl == null) {
                throw new Exception("无法找到drivers目录，请确保drivers目录存在于classpath或jar包同级目录");
            }

            log.info("找到drivers资源: {}", driversUrl);

            List<URL> jarUrls = new ArrayList<>();
            
            // 判断是 jar 包内部还是文件系统
            if ("jar".equals(driversUrl.getProtocol())) {
                // 从 jar 包中读取
                log.info("从jar包内部读取drivers目录");
                jarUrls = loadJarsFromJar(driversUrl, driverClassName);
            } else {
                // 从文件系统读取
                log.info("从文件系统读取drivers目录");
                File driversDir = new File(driversUrl.toURI());
                if (!driversDir.exists() || !driversDir.isDirectory()) {
                    throw new Exception("drivers目录不存在或不是目录: " + driversDir.getAbsolutePath());
                }
                
                File[] jarFiles = driversDir.listFiles((dir, name) -> name.endsWith(".jar"));
                if (jarFiles == null || jarFiles.length == 0) {
                    throw new Exception("drivers目录中没有找到jar文件: " + driversDir.getAbsolutePath());
                }
                
                for (File jarFile : jarFiles) {
                    jarUrls.add(jarFile.toURI().toURL());
                }
            }

            if (jarUrls.isEmpty()) {
                throw new Exception("drivers目录中没有找到jar文件");
            }

            log.info("找到 {} 个jar文件", jarUrls.size());

            // 尝试加载每个jar文件
            for (URL jarUrl : jarUrls) {
                try {
                    log.debug("尝试加载jar文件: {}", jarUrl);
                    URLClassLoader classLoader = new URLClassLoader(new URL[]{jarUrl}, getClass().getClassLoader());

                    // 加载驱动类
                    Class<?> driverClass = Class.forName(driverClassName, true, classLoader);

                    // 创建驱动实例并注册到DriverManager
                    Driver driver = (Driver) driverClass.getDeclaredConstructor().newInstance();
                    DriverManager.registerDriver(new DriverShim(driver));

                    log.info("成功从jar文件加载并注册驱动: {} -> {}", jarUrl, driverClassName);
                    return;
                } catch (Exception e) {
                    log.debug("从jar文件加载驱动失败: {} -> {}", jarUrl, e.getMessage());
                }
            }

            throw new Exception("无法从任何jar文件加载驱动: " + driverClassName);

        } catch (Exception e) {
            log.error("从drivers目录加载驱动失败", e);
            throw e;
        }
    }

    /**
     * 从jar包内部读取drivers目录中的jar文件
     */
    private List<URL> loadJarsFromJar(URL driversUrl, String driverClassName) throws Exception {
        List<URL> jarUrls = new ArrayList<>();
        
        try {
            JarURLConnection jarConnection = (JarURLConnection) driversUrl.openConnection();
            JarFile jarFile = jarConnection.getJarFile();
            String driversPath = jarConnection.getEntryName(); // "drivers"
            
            // 遍历jar包中的drivers目录
            Enumeration<JarEntry> entries = jarFile.entries();
            while (entries.hasMoreElements()) {
                JarEntry entry = entries.nextElement();
                String entryName = entry.getName();
                
                // 检查是否是drivers目录下的jar文件
                if (entryName.startsWith(driversPath + "/") && 
                    entryName.endsWith(".jar") && 
                    !entry.isDirectory()) {
                    
                    log.debug("找到jar文件: {}", entryName);
                    
                    // 提取jar文件到临时目录
                    Path tempDir = Files.createTempDirectory("shj-drivers-");
                    tempDir.toFile().deleteOnExit();
                    
                    String fileName = entryName.substring(entryName.lastIndexOf("/") + 1);
                    Path tempJar = tempDir.resolve(fileName);
                    
                    try (InputStream is = jarFile.getInputStream(entry);
                         FileOutputStream fos = new FileOutputStream(tempJar.toFile())) {
                        byte[] buffer = new byte[8192];
                        int bytesRead;
                        while ((bytesRead = is.read(buffer)) != -1) {
                            fos.write(buffer, 0, bytesRead);
                        }
                    }
                    
                    jarUrls.add(tempJar.toUri().toURL());
                    log.info("提取jar文件到临时目录: {}", tempJar);
                }
            }
        } catch (Exception e) {
            log.error("从jar包读取drivers目录失败", e);
            throw e;
        }
        
        return jarUrls;
    }

    /**
     * 驱动包装类，用于注册到DriverManager
     */
    private static class DriverShim implements Driver {
        private final Driver driver;

        DriverShim(Driver driver) {
            this.driver = driver;
        }

        @Override
        public Connection connect(String url, Properties info) throws SQLException {
            return driver.connect(url, info);
        }

        @Override
        public boolean acceptsURL(String url) throws SQLException {
            return driver.acceptsURL(url);
        }

        @Override
        public DriverPropertyInfo[] getPropertyInfo(String url, Properties info) throws SQLException {
            return driver.getPropertyInfo(url, info);
        }

        @Override
        public int getMajorVersion() {
            return driver.getMajorVersion();
        }

        @Override
        public int getMinorVersion() {
            return driver.getMinorVersion();
        }

        @Override
        public boolean jdbcCompliant() {
            return driver.jdbcCompliant();
        }

        @Override
        public Logger getParentLogger() throws SQLFeatureNotSupportedException {
            return driver.getParentLogger();
        }
    }

    /**
     * 获取列名
     */
    private List<String> getColumnNames(ResultSet resultSet) throws SQLException {
        List<String> columns = new ArrayList<>();
        ResultSetMetaData metaData = resultSet.getMetaData();
        int columnCount = metaData.getColumnCount();

        for (int i = 1; i <= columnCount; i++) {
            String columnName = metaData.getColumnName(i);
            String columnLabel = metaData.getColumnLabel(i);
            // 使用columnLabel，如果为空则使用columnName
            String finalName = (columnLabel != null && !columnLabel.trim().isEmpty()) ? columnLabel : columnName;
            columns.add(finalName);
        }

        return columns;
    }

    /**
     * 获取数据
     */
    private List<Map<String, Object>> getData(ResultSet resultSet, List<String> columns, Integer maxRows) throws SQLException {
        List<Map<String, Object>> data = new ArrayList<>();
        int rowCount = 0;
        int maxRowLimit = maxRows != null ? maxRows : 10000; // 默认最大10000行

        ResultSetMetaData metaData = resultSet.getMetaData();
        int columnCount = metaData.getColumnCount();

        while (resultSet.next() && rowCount < maxRowLimit) {
            Map<String, Object> row = new LinkedHashMap<>();
            for (int j = 0; j < columnCount; j++) {
                String columnName = columns.get(j);
                int columnType = metaData.getColumnType(j + 1);

                Object value = getColumnValue(resultSet, metaData, j + 1, columnType);
                row.put(columnName, value);
            }
            data.add(row);
            rowCount++;
        }

        if (rowCount >= maxRowLimit) {
            log.warn("查询结果超过最大行数限制: {}", maxRowLimit);
        }

        return data;
    }

    /**
     * 根据列类型获取列值
     */
    private Object getColumnValue(ResultSet rs, ResultSetMetaData metaData, int columnIndex, int columnType) throws SQLException {
        switch (columnType) {
            case Types.DATE:
                if (rs.getDate(columnIndex) != null) {
                    return rs.getDate(columnIndex).toString();
                }
                return null;
            case Types.BOOLEAN:
                return rs.getBoolean(columnIndex) ? "1" : "0";
            case Types.REAL:
            case Types.FLOAT:
            case Types.DOUBLE:
                float aFloat = rs.getFloat(columnIndex);
                if (aFloat % 1 == 0) {
                    // 转换为整数输出
                    return String.valueOf((int) aFloat);
                } else {
                    return rs.getString(columnIndex);
                }
            default:
                if (metaData.getColumnTypeName(columnIndex).toLowerCase().equalsIgnoreCase("blob")) {
                    return rs.getBlob(columnIndex) == null ? "" : rs.getBlob(columnIndex).toString();
                } else {
                    return rs.getString(columnIndex);
                }
        }
    }
}

