package com.zerov.shj.model.service;

import com.zerov.shj.core.model.QueryRequest;
import com.zerov.shj.core.model.QueryResult;

/**
 * 数据查询服务接口
 */
public interface IShjApiService {

    /**
     * 执行数据库查询
     * @param request 查询请求
     * @return 查询结果
     */
    Object executeQuery(QueryRequest request);

    /**
     * 测试数据库连接
     * @param request 查询请求
     * @return 连接测试结果
     */
    QueryResult testConnection(QueryRequest request);


    /**
     * 解析指定路径的文件
     * @param fileName 文件名
     * @return 解析结果
     */
    Object parseFile(String fileName) throws Exception;
} 