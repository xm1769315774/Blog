---
title: git操作
date: 2021-06-24
categories: article
tags: git
---
#  初始化git仓库
   git init

# 配置用户和email
	git config --global user.name "你的名字（英文）"
	git config --global user.email "你的邮箱"

# 查看仓库状态（增删改查行为是否提交）
	git status

# 新增所有修改（向本地仓库更新）
	git add .
    git add 后跟具体文件，则新增具体单项文件

# 提交所有修改
	git commit -m "提交说明"
        feat -- 新增feature
        fix -- 修复bug
        docs -- 仅仅修改了文档，例如README、CHANGELOG等
        style -- 修改了空格、格式缩进、逗号等，不改变代码逻辑
        refactor -- 代码重构，没有加新功能或者修复bug
        perf -- 优化相关，比如提升性能、体验
        test -- 测试用例，包括单元测试、集成测试等
        chore -- 改变构建流程、或者增加依赖库、工具等
        revert -- 回滚到上一个版本
