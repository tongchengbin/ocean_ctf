package com.zerov.shj.core.model;

import com.zerov.shj.core.config.DatabaseConfig;
import lombok.Data;

/**
 * 查询请求模型
 */
@Data
public class QueryRequest {
    
    /**
     * 数据库配置
     */
    private DatabaseConfig config;
    
    /**
     * SQL查询语句
     */
    private String sql;
    
    /**
     * 查询超时时间(秒)
     */
    private Integer timeout;
    
    /**
     * 最大返回行数
     */
    private Integer maxRows = 1000;
    
    /**
     * 原始JSON配置字符串（兼容旧格式）
     */
    private String configJson;

    
    /**
     * 设置配置并自动解析JSON
     */
    public void setConfigJson(String configJson) {
        this.configJson = configJson;
        if (configJson != null && !configJson.trim().isEmpty()) {
            this.config = DatabaseConfig.fromJson(configJson);
        }
    }
    
    /**
     * 获取配置，优先使用configJson解析的结果
     */
    public DatabaseConfig getConfig() {
        if (config == null && configJson != null && !configJson.trim().isEmpty()) {
            config = DatabaseConfig.fromJson(configJson);
        }
        return config;
    }
} 