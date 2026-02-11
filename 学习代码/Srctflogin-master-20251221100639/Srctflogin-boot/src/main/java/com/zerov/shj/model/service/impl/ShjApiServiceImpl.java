package com.zerov.shj.model.service.impl;

import com.zerov.shj.core.DataQueryEngine;
import com.zerov.shj.core.FileParseEngine;
import com.zerov.shj.core.model.QueryRequest;
import com.zerov.shj.core.model.QueryResult;
import com.zerov.shj.model.service.IShjApiService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;

/**
 * 数据查询服务实现类
 */
@Slf4j
@Service
public class ShjApiServiceImpl implements IShjApiService {

    @Autowired
    private DataQueryEngine dataQueryEngine;
    @Autowired
    private FileParseEngine fileParseEngine;

    @Override
    public Object executeQuery(QueryRequest request) {
        long startTime = System.currentTimeMillis();

        try {
            QueryResult result = dataQueryEngine.executeQuery(request);
            result.setExecutionTime(System.currentTimeMillis() - startTime);

            if (result.isSuccess() && result.getData() != null) {
                result.setTotalRows(result.getData().size());
            }

            return result.getData();

        } catch (Exception e) {
            log.error("查询执行失败", e);
            QueryResult result = new QueryResult();
            result.setSuccess(false);
            result.setMessage("查询执行失败: " + e.getMessage());
            result.setExecutionTime(System.currentTimeMillis() - startTime);
            return result;
        }
    }

    @Override
    public QueryResult testConnection(QueryRequest request) {
        QueryResult result = new QueryResult();

        try (Connection connection = DriverManager.getConnection(
                request.getConfig().getUrl(),
                request.getConfig().getUsername(),
                request.getConfig().getPassword())) {

            result.setSuccess(true);
            result.setMessage("数据库连接成功");

        } catch (Exception e) {
            log.error("数据库连接失败", e);
            result.setSuccess(false);
            result.setMessage("数据库连接失败: " + e.getMessage());
        }

        return result;
    }


    @Override
    public Object parseFile(String fileName) throws Exception {
        // 读取文件路径
        InputStream in = this.getClass().getClassLoader().getResourceAsStream("file/" + fileName);
        Object object = fileParseEngine.parseFile(fileName, in);
        return object;
    }

} 