package com.zerov.shj.common.entity;


import lombok.Data;
import lombok.experimental.Accessors;

import java.io.Serializable;

/**
 *  返回封装类
 */
@Data
@Accessors(chain = true)
public class R<T> implements Serializable {

    /**
     * 状态码
     */
    private int code;

    /**
     * 数据
     */

    private T data;

    /**
     * 返回消息
     */
    private String msg;

    public R() {
    }

    public R(int code, T data, String msg) {
        this.code = code;
        this.data = data;
        this.msg = msg;
    }

    public static <T> R<T> success() {
        return R(null, ResultCode.SUCCESS);
    }


    public static <T> R<T> success(T data) {
       return R(data, ResultCode.SUCCESS);
    }

    public static <T> R<T> success(ResultCode resultCode, T data) {
        return R(data, resultCode.getCode(), resultCode.getMsg());
    }

    public static <T> R<T> success(T data,int code,  String msg) {
        return R(data, code,msg);
    }

    public static <T> R<T> success(ResultCode resultCode) {
        return R(null, resultCode.getCode(), resultCode.getMsg());
    }


    public static <T> R<T> failed() {
        return R(null, ResultCode.FAILED);
    }

    public static <T> R<T> failed(String msg) {
        return R(null, ResultCode.FAILED.getCode(), msg);
    }


    public static <T> R<T> failed(int code, String msg) {
        return R(null,code,msg);
    }

    public static <T> R<T> failed(IErrorCode errorCode) {
         return R(null, errorCode);
    }

    public static <T> R<T> failed(T data) {
        return R(data, ResultCode.FAILED.getCode(), ResultCode.FAILED.getMsg());
    }


    public static <T> R<T> R(T data, IErrorCode errorCode) {
        return R(data, errorCode.getCode(), errorCode.getMsg());
    }

    private static <T> R<T> R(T data, int code, String msg) {
        R<T> apiResult = new R<T>();
        apiResult.setCode(code);
        apiResult.setData(data);
        apiResult.setMsg(msg);
        return apiResult;
    }

}