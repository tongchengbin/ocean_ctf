package com.zerov.shj.common.entity;

/**
 * 自定义状态码
 */
public enum ResultCode implements IErrorCode {


    /**
     * 失败
     */
    FAILED(-1, "服务器繁忙，请稍后重试"),

    /**
     * 成功
     */
    SUCCESS(1, "成功"),
    BUSINESS_ERROR(500, "服务器繁忙，请稍后重试"),

    ;

    private final int code;
    private final String msg;

    ResultCode(int code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    @Override
    public int getCode() {
        return code;
    }


    @Override
    public String getMsg() {
        return msg;
    }


    @Override
    public String toString() {
        return String.format(" ErrorCode:{code=%s, msg=%s} ", code, msg);
    }
}
