package com.zerov.shj.core.config;

import com.alibaba.fastjson.JSON;
import lombok.Data;

/**
 * 数据库配置类
 */
@Data
public class DatabaseConfig {
    
    /**
     * 数据库连接URL
     */
    private String url;
    
    /**
     * 用户名
     */
    private String username;
    
    /**
     * 密码
     */
    private String password;
    
    /**
     * 驱动类名
     */
    private String driverClassName;
    
    /**
     * 数据库类型（用于自动映射驱动和URL）
     */
    private String type;
    
    /**
     * 查询超时时间(秒)
     */
    private Integer queryTimeout = 30;
    
    // 原始配置字段
    private String host;
    private Integer port;
    private String dataBase;
    
    /**
     * 从JSON字符串创建数据库配置
     * @param jsonConfig JSON配置字符串
     * @return 数据库配置对象
     */
    public static DatabaseConfig fromJson(String jsonConfig) {
        if (jsonConfig == null || jsonConfig.trim().isEmpty()) {
            return new DatabaseConfig();
        }
        
        try {
            DatabaseConfig config = JSON.parseObject(jsonConfig, DatabaseConfig.class);
            
            // 如果设置了host、port、dataBase，则自动构建URL
            if (config.getHost() != null && config.getPort() != null && config.getDataBase() != null) {
                if (config.getType() != null && !config.getType().trim().isEmpty()) {
                    // 根据type构建URL
                    DatabaseType dbType = DatabaseType.fromString(config.getType());
                    if (dbType != null) {
                        String urlTemplate = dbType.getUrlTemplate();
                        String url = urlTemplate
                            .replace("{host}", config.getHost())
                            .replace("{port}", String.valueOf(config.getPort()))
                            .replace("{database}", config.getDataBase());
                        config.setUrl(url);
                    }
                } else {
                    // 默认使用MySQL格式
                    config.setUrl(String.format("jdbc:mysql://%s:%d/%s", 
                        config.getHost(), config.getPort(), config.getDataBase()));
                }
            }
            
            return config;
        } catch (Exception e) {
            throw new RuntimeException("解析数据库配置JSON失败: " + e.getMessage(), e);
        }
    }
    
    /**
     * 从原始配置参数创建数据库配置
     * @param host 主机地址
     * @param port 端口
     * @param username 用户名
     * @param password 密码
     * @param dataBase 数据库名
     * @param type 数据库类型
     * @return 数据库配置对象
     */
    public static DatabaseConfig fromParams(String host, Integer port, String username, 
                                          String password, String dataBase, String type) {
        DatabaseConfig config = new DatabaseConfig();
        config.setHost(host);
        config.setPort(port);
        config.setUsername(username);
        config.setPassword(password);
        config.setDataBase(dataBase);
        config.setType(type);
        
        // 自动构建URL
        if (host != null && port != null && dataBase != null) {
            if (type != null && !type.trim().isEmpty()) {
                DatabaseType dbType = DatabaseType.fromString(type);
                if (dbType != null) {
                    String urlTemplate = dbType.getUrlTemplate();
                    String url = urlTemplate
                        .replace("{host}", host)
                        .replace("{port}", String.valueOf(port))
                        .replace("{database}", dataBase);
                    config.setUrl(url);
                }
            } else {
                // 默认使用MySQL格式
                config.setUrl(String.format("jdbc:mysql://%s:%d/%s", host, port, dataBase));
            }
        }
        
        return config;
    }
} 