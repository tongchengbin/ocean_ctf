package com.zerov.shj.core.security;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
import java.util.regex.Pattern;

/**
 * SQL安全验证器
 * 用于验证SQL语句的安全性，防止SQL注入和非法操作
 */
@Slf4j
@Component
public class SqlSecurityValidator {

    @Autowired
    private SecurityConfig securityConfig;

    // 禁止的SQL关键字（大写）
    private static final Set<String> FORBIDDEN_KEYWORDS = new HashSet<>(Arrays.asList(
        "DELETE", "DROP", "INSERT", "UPDATE", "CREATE", "ALTER", "TRUNCATE", 
        "EXEC", "EXECUTE", "EXECUTE IMMEDIATE", "MERGE", "REPLACE", "RENAME",
        "GRANT", "REVOKE", "COMMIT", "ROLLBACK", "SAVEPOINT", "SET", "USE",
        "SHUTDOWN", "KILL", "PROCESSLIST", "SHOW", "DESCRIBE", "EXPLAIN"
    ));

    // 允许的SQL关键字（大写）
    private static final Set<String> ALLOWED_KEYWORDS = new HashSet<>(Arrays.asList(
        "SELECT", "FROM", "WHERE", "AND", "OR", "NOT", "IN", "LIKE", "BETWEEN",
        "ORDER", "BY", "GROUP", "HAVING", "LIMIT", "OFFSET", "AS", "DISTINCT",
        "COUNT", "SUM", "AVG", "MAX", "MIN", "CASE", "WHEN", "THEN", "ELSE", "END",
        "JOIN", "LEFT", "RIGHT", "INNER", "OUTER", "ON", "UNION", "ALL",
        "IS", "NULL", "TRUE", "FALSE", "ASC", "DESC", "TOP", "FETCH", "FIRST"
    ));

    // 危险字符模式（不包含分号，分号单独处理）
    private static final Pattern DANGEROUS_PATTERNS = Pattern.compile(
            "(--|/\\*|\\*/|xp_|sp_|@@|WAITFOR|DELAY|BENCHMARK|SLEEP|LOAD_FILE|\\bINTO\\s+OUTFILE\\b|\\bINTO\\s+DUMPFILE\\b)",
            Pattern.CASE_INSENSITIVE
    );

    // 注释模式
    private static final Pattern COMMENT_PATTERNS = Pattern.compile(
        "(/\\*.*?\\*/|--.*?$)", 
        Pattern.CASE_INSENSITIVE | Pattern.DOTALL | Pattern.MULTILINE
    );

    /**
     * 验证SQL语句的安全性
     * @param sql SQL语句
     * @return 验证结果
     */
    public SqlValidationResult validateSql(String sql) {
        if (!securityConfig.isEnabled()) {
            return SqlValidationResult.success("安全验证已禁用");
        }

        if (sql == null || sql.trim().isEmpty()) {
            return SqlValidationResult.failure("SQL语句不能为空");
        }

        // 移除注释
        String cleanSql = removeComments(sql.trim());
        
        // 检查是否以SELECT开头
        if (!cleanSql.toUpperCase().startsWith("SELECT")) {
            return SqlValidationResult.failure("只允许执行SELECT查询语句");
        }

        // 检查禁止的关键字
        if (securityConfig.isEnableKeywordFiltering() && containsForbiddenKeywords(cleanSql)) {
            return SqlValidationResult.failure("SQL语句包含禁止的关键字");
        }

        // 检查危险模式
        if (containsDangerousPatterns(cleanSql)) {
            return SqlValidationResult.failure("SQL语句包含危险模式");
        }

        // 检查SQL注入特征
        if (securityConfig.isEnableSqlInjectionDetection() && containsSqlInjectionPatterns(cleanSql)) {
            return SqlValidationResult.failure("检测到SQL注入特征");
        }

        // 检查UNION查询
        if (!securityConfig.isAllowUnion() && cleanSql.toUpperCase().contains("UNION")) {
            return SqlValidationResult.failure("不允许使用UNION查询");
        }

        if (securityConfig.isLogSecurityEvents()) {
            log.info("SQL安全验证通过: {}", sql);
        }

        return SqlValidationResult.success("SQL语句验证通过");
    }

    /**
     * 移除SQL注释
     */
    private String removeComments(String sql) {
        return COMMENT_PATTERNS.matcher(sql).replaceAll(" ");
    }

    /**
     * 检查是否包含禁止的关键字
     */
    private boolean containsForbiddenKeywords(String sql) {
        String upperSql = sql.toUpperCase();
        for (String keyword : FORBIDDEN_KEYWORDS) {
            // 使用单词边界检查，避免误判
            if (containsWord(upperSql, keyword)) {
                log.warn("检测到禁止的关键字: {}", keyword);
                return true;
            }
        }
        return false;
    }
    
    /**
     * 检查字符串是否包含完整的单词（使用单词边界）
     */
    private boolean containsWord(String text, String word) {
        // 构建正则表达式，确保是完整的单词
        String pattern = "\\b" + Pattern.quote(word) + "\\b";
        return Pattern.compile(pattern, Pattern.CASE_INSENSITIVE).matcher(text).find();
    }

    /**
     * 检查是否包含危险模式
     */
    private boolean containsDangerousPatterns(String sql) {
        if (DANGEROUS_PATTERNS.matcher(sql).find()) {
            log.warn("检测到危险模式: {}", sql);
            return true;
        }
        return false;
    }

    /**
     * 检查SQL注入特征
     */
    private boolean containsSqlInjectionPatterns(String sql) {
        // 检查常见的SQL注入模式
        String upperSql = sql.toUpperCase();
        
        // 检查UNION注入
        if (upperSql.contains("UNION") && !upperSql.contains("UNION ALL")) {
            log.warn("检测到可能的UNION注入: {}", sql);
            return true;
        }

        // 检查多语句执行
        if (upperSql.contains(";") && upperSql.split(";").length > 1) {
            log.warn("检测到多语句执行: {}", sql);
            return true;
        }

        // 检查注释注入
        if (upperSql.contains("/*") || upperSql.contains("--")) {
            log.warn("检测到注释注入: {}", sql);
            return true;
        }

        return false;
    }

    /**
     * 获取SQL语句的类型
     */
    public String getSqlType(String sql) {
        if (sql == null || sql.trim().isEmpty()) {
            return "UNKNOWN";
        }
        
        String cleanSql = removeComments(sql.trim()).toUpperCase();
        
        if (cleanSql.startsWith("SELECT")) {
            return "SELECT";
        } else if (cleanSql.startsWith("INSERT")) {
            return "INSERT";
        } else if (cleanSql.startsWith("UPDATE")) {
            return "UPDATE";
        } else if (cleanSql.startsWith("DELETE")) {
            return "DELETE";
        } else {
            return "OTHER";
        }
    }

    /**
     * SQL验证结果
     */
    public static class SqlValidationResult {
        private final boolean valid;
        private final String message;

        private SqlValidationResult(boolean valid, String message) {
            this.valid = valid;
            this.message = message;
        }

        public static SqlValidationResult success(String message) {
            return new SqlValidationResult(true, message);
        }

        public static SqlValidationResult failure(String message) {
            return new SqlValidationResult(false, message);
        }

        public boolean isValid() {
            return valid;
        }

        public String getMessage() {
            return message;
        }
    }
} 