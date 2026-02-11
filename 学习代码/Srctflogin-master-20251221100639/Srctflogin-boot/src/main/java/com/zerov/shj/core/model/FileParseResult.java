package com.zerov.shj.core.model;

import lombok.Data;
import java.util.List;
import java.util.Map;

/**
 * 文件解析结果模型
 */
@Data
public class FileParseResult {
    
    /**
     * 是否成功
     */
    private boolean success;
    
    /**
     * 消息
     */
    private String message;
    
    /**
     * 解析的数据
     */
    private List<Map<String, Object>> data;
    
    /**
     * 总行数
     */
    private int totalRows;
    
    /**
     * 解析时间(毫秒)
     */
    private long parseTime;
} 