
package com.zerov.shj.common.exception;
import com.zerov.shj.common.entity.R;
import com.zerov.shj.common.entity.ResultCode;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * 全局异常
 */
@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {

    /**
     * 处理所有不可知的异常
     */
    @ExceptionHandler(RuntimeException.class)
    public R handleException(RuntimeException e) {
        // 打印堆栈信息
        return R.failed(e.getMessage());
    }
    /**
     * 默认异常处理方法
     *
     * @param e 异常
     * @return {@link R}
     */
    @ExceptionHandler(Exception.class)
    public R<String> defaultExceptionHandler(Throwable e) {
        log.error("===========全局统一异常处理============");
        log.error("", e.getCause() != null ? e.getCause().getMessage() : e.getCause());
        log.error("", e);
        return R.failed(ResultCode.BUSINESS_ERROR);
    }

    /**
     * 处理自定义异常
     */
    @ExceptionHandler(value = DatasourceException.class)
    public R badRequestException(DatasourceException e) {

        return R.failed(e.getMessage());
    }


}
