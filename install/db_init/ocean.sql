/*
 Navicat Premium Data Transfer

 Source Server Type    : MariaDB
 Source Server Version : 50568
 Source Schema         : ocean

 Target Server Type    : MariaDB
 Target Server Version : 50568
 File Encoding         : 65001

 Date: 04/03/2021 14:55:37
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;
create database  if not  exists ocean;
use ocean;
-- ----------------------------
-- Table structure for alembic_version
-- ----------------------------
DROP TABLE IF EXISTS `alembic_version`;
CREATE TABLE `alembic_version`  (
  `version_num` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`version_num`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of alembic_version
-- ----------------------------

-- ----------------------------
-- Table structure for answer
-- ----------------------------
DROP TABLE IF EXISTS `answer`;
CREATE TABLE `answer`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_created` datetime NULL DEFAULT NULL,
  `date_modified` datetime NULL DEFAULT NULL,
  `user_id` int(11) NULL DEFAULT NULL,
  `question_id` int(11) NULL DEFAULT NULL,
  `flag` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `score` int(11) NULL DEFAULT NULL,
  `ip` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `status` tinyint(4) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  INDEX `question_id`(`question_id`) USING BTREE,
  CONSTRAINT `question_id` FOREIGN KEY (`question_id`) REFERENCES `ctf_question` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 122 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for container_resource
-- ----------------------------
DROP TABLE IF EXISTS `container_resource`;
CREATE TABLE `container_resource`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_created` datetime NULL DEFAULT NULL,
  `date_modified` datetime NULL DEFAULT NULL,
  `image_resource_id` int(11) NULL DEFAULT NULL COMMENT '容器对应的镜像资源',
  `container_id` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '容器的实际ID',
  `flag` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '容器的Flag',
  `container_status` varchar(8) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `container_port` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `addr` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_id` int(11) NULL DEFAULT NULL,
  `container_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `status` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `image_resource_id`(`image_resource_id`) USING BTREE,
  CONSTRAINT `container_resource_ibfk_1` FOREIGN KEY (`image_resource_id`) REFERENCES `image_resource` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 96 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- ----------------------------
-- Table structure for ctf_question
-- ----------------------------
DROP TABLE IF EXISTS `ctf_question`;
CREATE TABLE `ctf_question`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_created` datetime NULL DEFAULT NULL,
  `date_modified` datetime NULL DEFAULT NULL,
  `name` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '题目名称',
  `type` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '分类',
  `active` tinyint(1) NULL DEFAULT NULL COMMENT '是否启用',
  `integral` int(11) NULL DEFAULT NULL COMMENT '积分',
  `desc` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '描述',
  `flag` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'Flag',
  `active_flag` tinyint(1) NULL DEFAULT NULL COMMENT '是否时动态Flag',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for docker_host
-- ----------------------------
DROP TABLE IF EXISTS `docker_host`;
CREATE TABLE `docker_host`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_created` datetime NULL DEFAULT NULL,
  `date_modified` datetime NULL DEFAULT NULL,
  `name` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `addr` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '地址',
  `remark` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注',
  `online_time` datetime NULL DEFAULT NULL COMMENT '最后一次在线时间',
  `active` tinyint(1) NULL DEFAULT NULL COMMENT '是否启用',
  `ip` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE,
  UNIQUE INDEX `addr`(`addr`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for image_resource
-- ----------------------------
DROP TABLE IF EXISTS `image_resource`;
CREATE TABLE `image_resource`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_created` datetime NULL DEFAULT NULL,
  `date_modified` datetime NULL DEFAULT NULL,
  `host_id` int(11) NULL DEFAULT NULL,
  `image_id` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '主机中实际的镜像ID',
  `question_id` int(11) NULL DEFAULT NULL COMMENT '对应的题库',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `host_id`(`host_id`) USING BTREE,
  INDEX `question_id`(`question_id`) USING BTREE,
  CONSTRAINT `image_resource_ibfk_1` FOREIGN KEY (`host_id`) REFERENCES `docker_host` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `image_resource_ibfk_2` FOREIGN KEY (`question_id`) REFERENCES `ctf_question` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for notice
-- ----------------------------
DROP TABLE IF EXISTS `notice`;
CREATE TABLE `notice`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_created` datetime NULL DEFAULT NULL,
  `date_modified` datetime NULL DEFAULT NULL,
  `content` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `active` tinyint(4) NULL DEFAULT NULL,
  `is_top` tinyint(4) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;


-- ----------------------------
-- Table structure for question_file
-- ----------------------------
DROP TABLE IF EXISTS `question_file`;
CREATE TABLE `question_file`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_created` datetime NOT NULL,
  `date_modified` datetime NOT NULL,
  `question_id` int(11) NOT NULL,
  `filename` varchar(32) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `file_path` varchar(128) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for request_state
-- ----------------------------
DROP TABLE IF EXISTS `request_state`;
CREATE TABLE `request_state`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_created` datetime NULL DEFAULT NULL,
  `date_modified` datetime NULL DEFAULT NULL,
  `ip_count` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `req_count` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `day` date NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `uni`(`day`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 72 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;
-- ----------------------------
-- Table structure for s_admin
-- ----------------------------
DROP TABLE IF EXISTS `s_admin`;
CREATE TABLE `s_admin`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_created` datetime NULL DEFAULT NULL,
  `date_modified` datetime NULL DEFAULT NULL,
  `username` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `password` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '密码',
  `role_id` int(11) NULL DEFAULT NULL,
  `active` tinyint(1) NULL DEFAULT NULL COMMENT '是否启用',
  `login_time` datetime NULL DEFAULT NULL,
  `token` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'token',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `username`(`username`) USING BTREE,
  UNIQUE INDEX `token`(`token`) USING BTREE,
  INDEX `role_id`(`role_id`) USING BTREE,
  CONSTRAINT `s_admin_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `s_role` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for s_role
-- ----------------------------
DROP TABLE IF EXISTS `s_role`;
CREATE TABLE `s_role`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_created` datetime NULL DEFAULT NULL,
  `date_modified` datetime NULL DEFAULT NULL,
  `name` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of s_role
-- ----------------------------
INSERT INTO `s_role` VALUES (1, '2021-03-03 16:27:31', '2021-03-03 16:27:33', '超级管理员');
INSERT INTO `s_role` VALUES (2, '2020-11-15 00:08:17', '2020-11-15 00:08:17', '运维管理员');
INSERT INTO `s_role` VALUES (3, '2021-03-02 19:32:03', '2021-03-02 19:32:03', '审计员');
INSERT INTO `s_role` VALUES (4, '2021-03-02 19:33:53', '2021-03-02 19:33:53', '访客');

-- ----------------------------
-- Table structure for task_list
-- ----------------------------
DROP TABLE IF EXISTS `task_list`;
CREATE TABLE `task_list`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_created` datetime NULL DEFAULT NULL,
  `date_modified` datetime NULL DEFAULT NULL,
  `status` int(11) NULL DEFAULT NULL COMMENT '任务状况',
  `title` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '任务标题',
  `target_id` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '操作对象ID 可以是主机 容器 镜像 题库等',
  `remark` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注 报错错误信息记录',
  `admin_id` int(11) NULL DEFAULT NULL COMMENT '操作用户',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `admin_id`(`admin_id`) USING BTREE,
  CONSTRAINT `task_list_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `s_admin` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 130 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for task_log
-- ----------------------------
DROP TABLE IF EXISTS `task_log`;
CREATE TABLE `task_log`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_created` datetime NULL DEFAULT NULL,
  `date_modified` datetime NULL DEFAULT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '内容',
  `task_id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `task_id`(`task_id`) USING BTREE,
  CONSTRAINT `task_log_ibfk_1` FOREIGN KEY (`task_id`) REFERENCES `task_list` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;


-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_created` datetime NULL DEFAULT NULL,
  `date_modified` datetime NULL DEFAULT NULL,
  `username` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `password` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '密码',
  `active` tinyint(1) NULL DEFAULT NULL COMMENT '是否启用',
  `token` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'token',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `username`(`username`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

INSERT INTO `ocean`.`s_admin`(`username`, `password`, `role_id`, `active`)
VALUES ('superuser', 'pbkdf2:sha256:150000$f8xQXOnB$1f244d135c8818e931d356daa954866adcb120ce53f4f10f21b1db5b24957203',
        1, NULL);

SET FOREIGN_KEY_CHECKS = 1;
