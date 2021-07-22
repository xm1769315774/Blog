---
title: MySQL
date: 2021-06-23
categories: article
tags: NySQL
---
# MySQL 入门

数据库：存储和管理数据的工具

常见数据库：MySQL、Oracle、MongoDB、indexDB、SQLite

关系型数据库：MySQL：通过二维表来描述实体与实体之间的关系

非关系型数据库：MongoDB（用户操作记录、地理信息位置，大数据更多使用非关系型）

最常用 MySQL：开源、免费

SQLite：移动端的轻型数据库

# 数据库术语

结构层级：数据库 -> 数据表（多个）-> 多条数据

字段：相当于表的表头
数据：一条记录/一个数据行

Navicat 可视化操作数据库的工具

# SQL 语句

SQL：结构化查询语言。是用来操作数据库（可以操作表、操作数据）

每天做的都是 CRUD 应用：

    Create 创建
    Retrive 查询
    Update 更新
    Delete 删除

# MySQL 数据类型

常用：
    INT：整型
    VARCHAR：可变长度字符串
    TEXT：长文本
    TIMESTAMP：时间戳

# 创建表

主键：一个表中，主键的值是唯一的

关键字：CREATE TABLE
```mysql
CREATE TABLE `user`(
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(255),
  `age` INT,
  `sex` VARCHAR(1),
  `desc` TEXT,
  `ctime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

# 插入数据
INSERT INTO
```mysql
INSERT INTO users
  (name, age, sex, `desc`)
  VALUES
  ('后羿', 101, '男', '周日被我射熄火了，所以今天是周一');
```

# 更新数据
UPDATE
```mysql
    UPDATE users SET age=32 WHERE id=7;
```
其中：
    WHERE 设定条件。如果不加，就会改所有。

# 删除数据
DELETE
```mysql
    DELETE FROM users WHERE age=101;
```
注意：一定要写 WHERE。不限定条件，就全部删了

# 查询数据
SELECT
```mysql
    SELECT name, sex, `desc` FROM users;
```
查询所有字段：
```mysql
    SELECT * FROM users;
```
其中 * 表示所有字段。

通过 WHERE 字句设定条件：
```mysql
    SELECT * FROM users WHERE age>=18;
```
条件：
    =：等于
    <> 或 !=：不等于
    ：大于
    <：小于
    =：大于等于
    <=：小于等于

# LIKE 模糊查询
```mysql
    SELECT * FROM users WHEREdescLIKE '%男%';
```
    % 表示的是匹配任意字符

# AND 、OR、IN 操作符
    AND：且。要求同时满足条件
    OR：或。满足其一
    IN：满足多个值中的一个

```mysql
    SELECT * FROM users WHERE age IN (16, 300, 42);
```
# 排序
```mysql
    SELECT * FROM users ORDER BY age ASC;
```
默认升序：

    ASC：升序
    DESC：降序
