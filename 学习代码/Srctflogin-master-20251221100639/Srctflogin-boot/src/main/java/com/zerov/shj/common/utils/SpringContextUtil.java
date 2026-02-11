package com.zerov.shj.common.utils;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.support.DefaultListableBeanFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class SpringContextUtil implements ApplicationContextAware {

    /**
     * 获取bean工厂，用来实现动态注入bean
     * 不能使用其他类加载器加载bean
     * 否则会出现异常:类未找到，类未定义
     *
     * @return
     */
    public static DefaultListableBeanFactory getBeanFactory() {
        return (DefaultListableBeanFactory) getApplicationContext().getAutowireCapableBeanFactory();
    }

    public static List<Map<String, Object>> getAllBean() {
        List<Map<String, Object>> list = new ArrayList<>();
        String[] beans = getApplicationContext().getBeanDefinitionNames();
        for (String beanName : beans) {
            Class<?> beanType = getApplicationContext().getType(beanName);
            Map<String, Object> map = new HashMap<>();
            map.put("BeanName", beanName);
            map.put("beanType", beanType);
            map.put("package", beanType.getPackage());
            list.add(map);
        }
        return list;
    }


    /**
     * 上下文对象实例
     */
    private static ApplicationContext applicationContext;

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        SpringContextUtil.applicationContext = applicationContext;
    }

    /**
     * 获取applicationContext
     *
     * @return
     */
    public static ApplicationContext getApplicationContext() {
        return applicationContext;
    }

}
