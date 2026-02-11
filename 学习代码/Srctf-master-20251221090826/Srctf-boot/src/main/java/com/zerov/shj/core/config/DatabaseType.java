package com.zerov.shj.core.config;

import lombok.AllArgsConstructor;
import lombok.Getter;


/**
 * 数据库类型枚举
 * 定义支持的数据库类型和对应的驱动信息
 */
@Getter
@AllArgsConstructor
public enum DatabaseType {

    mysql("mysql", "MySQL", "com.mysql.jdbc.Driver", "jdbc:mysql://{host}:{port}/{database}?characterEncoding=UTF-8&connectTimeout=5000&useSSL=false&allowPublicKeyRetrieval=true", 3306),
    mariadb("mariadb", "MariaDB", "com.mysql.jdbc.Driver", "jdbc:mariadb://{host}:{port}/{database}?characterEncoding=UTF-8&connectTimeout=5000&useSSL=false&allowPublicKeyRetrieval=true", 3306),
    pg("pg", "PostgreSQL", "org.postgresql.Driver", "jdbc:postgresql://{host}:{port}/{database}", 5432),
    oracle("oracle", "Oracle", "oracle.jdbc.driver.OracleDriver", "jdbc:oracle:thin:@{host}:{port}:{database}", 1521),
    sqlserver("sqlserver", "SQL Server", "com.microsoft.sqlserver.jdbc.SQLServerDriver", "jdbc:sqlserver://{host}:{port};databaseName={database}", 1433),
    ck("ck", "ClickHouse", "ru.yandex.clickhouse.ClickHouseDriver", "jdbc:clickhouse://{host}:{port}/{database}", 8123),
    dm("dm", "dm", "dm.jdbc.driver.DmDriver", "jdbc:dm://{host}:{port}/{database}", 5236),
    excel("excel", "Excel", null, null, null),
    csv("csv", "CSV", null, null, null),
    json("json", "JSON", null, null, null),
    // SQLITE("sqlite", "","org.sqlite.JDBC", "jdbc:sqlite:{database}"),
    // H2("h2", "","org.h2.Driver", "jdbc:h2:{database}"),
    ;


    private final String type;
    private final String name;
    private final String driverClassName;
    private final String urlTemplate;
    private Integer port;

    public String getType() {
        return type;
    }

    public String getName() {
        return name;
    }
    public Integer getPort() {
        return port;
    }

    /**
     * 根据类型字符串获取数据库类型
     */
    public static DatabaseType fromString(String type) {
        if (type == null) {
            return null;
        }

        String lowerType = type.toLowerCase().trim();
        for (DatabaseType dbType : values()) {
            if (dbType.getType().equals(lowerType)) {
                return dbType;
            }
        }
        return null;
    }


    /**
     * 检查是否支持该数据库类型
     */
    public static boolean isSupported(String type) {
        return fromString(type) != null;
    }

    /**
     * 获取所有支持的数据库类型
     */
    public static String[] getSupportedTypes() {
        DatabaseType[] types = values();
        String[] typeNames = new String[types.length];
        for (int i = 0; i < types.length; i++) {
            typeNames[i] = types[i].getType();
        }
        return typeNames;
    }

    /**
     * 根据数据库类型和连接信息生成JDBC URL
     */
    public String buildUrl(String host, String port, String database) {
        return urlTemplate
                .replace("{host}", host)
                .replace("{port}", port)
                .replace("{database}", database);
    }

    /**
     * 根据数据库类型和连接信息生成JDBC URL（带额外参数）
     */
    public String buildUrl(String host, String port, String database, String extraParams) {
        String baseUrl = buildUrl(host, port, database);
        if (extraParams != null && !extraParams.trim().isEmpty()) {
            if (baseUrl.contains("?")) {
                return baseUrl + "&" + extraParams;
            } else {
                return baseUrl + "?" + extraParams;
            }
        }
        return baseUrl;
    }

    public static Boolean getTypes(String type) {
        for (DatabaseType item : DatabaseType.values()) {
            if (type.equals(item.getType())) {
                return true;
            }
        }
        return false;
    }
} 