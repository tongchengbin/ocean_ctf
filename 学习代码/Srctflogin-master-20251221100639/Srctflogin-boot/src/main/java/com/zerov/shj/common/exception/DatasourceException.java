package com.zerov.shj.common.exception;

public class DatasourceException extends RuntimeException {

    private DatasourceException(String message) {
        super(message);
    }

    private DatasourceException(Throwable t) {
        super(t);
    }

    public static void throwException(String message) {
        throw new DatasourceException(message);
    }

    public static void throwException(Throwable t) {
        throw new DatasourceException(t);
    }
}
