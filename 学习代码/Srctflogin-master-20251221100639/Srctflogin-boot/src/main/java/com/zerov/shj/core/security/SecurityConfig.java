package com.zerov.shj.core.security;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * 安全配置类
 * 用于管理查询安全策略
 */
@Data
@Component
@ConfigurationProperties(prefix = "query.security")
public class SecurityConfig {

    /**
     * 是否启用SQL安全验证
     */
    private boolean enabled = true;

    /**
     * 最大查询行数限制
     */
    private int maxRows = 10000;

    /**
     * 查询超时时间（秒）
     */
    private int queryTimeout = 30;

    /**
     * 是否允许UNION查询
     */
    private boolean allowUnion = false;

    /**
     * 是否允许子查询
     */
    private boolean allowSubqueries = true;

    /**
     * 是否允许JOIN查询
     */
    private boolean allowJoins = true;

    /**
     * 是否允许聚合函数
     */
    private boolean allowAggregates = true;

    /**
     * 是否记录安全日志
     */
    private boolean logSecurityEvents = true;

    /**
     * 是否启用SQL注入检测
     */
    private boolean enableSqlInjectionDetection = true;

    /**
     * 是否启用关键字过滤
     */
    private boolean enableKeywordFiltering = true;
} 