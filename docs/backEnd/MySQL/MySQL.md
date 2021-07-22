---
title: MySQL
date: 2021-06-23
categories: article
tags: 数据库
---
# 分页

传参 URL /userList：
```javascript
    const postData = {
    currentPage: 1, // 当前页
    pageSize: 3,// 一页有多少数据
}
```
响应数据：

```javascript
    const resData = {
    status: 0,
    data: {
        list: [{
            id: 1,
            name: '花木兰',
            age: 18,
        }, {
            id: 2,
            name: '李白',
            age: 22,
        }]
    },
    total: 9, // 总条数，用于计算一共有多少页
}
```
语法：

```mysql
  SELECT 字段1, 字段2
    FROM 表名
    LIMIT M, N
```
M：跳过的条数
N：查询的条数

```mysql
    SQL：SELECT * FROM users LIMIT 8, 4;
```

已知 pageSize、currentPage，请你用 pageSize、currentPage 表示 M、N？

    N：pageSize 查询的条数等于当前需要的数据条数
    M：pageSize * (currentPage - 1) 跳过的条数等于当前页减去1乘以每一页的数据条数