package com.zerov.shj.core.model;

import lombok.Data;
import java.util.List;
import java.util.Map;

/**
 * 查询结果模型
 */
@Data
public class QueryResult {
    
    /**
     * 是否成功
     */
    private boolean success;
    
    /**
     * 消息
     */
    private String message;
    
    /**
     * 列名列表
     */
    private List<String> columns;
    
    /**
     * 数据列表
     */
    private List<Map<String, Object>> data;
    
    /**
     * 总行数
     */
    private int totalRows;
    
    /**
     * 执行时间(毫秒)
     */
    private long executionTime;
} 