---
title: git操作
date: 2021-06-24
categories: article
tags: git
---
# git操作注意点
    git很多提示都是善意的，使用git请时刻查看仓库状态，git status
    有些指令在要操作的时候，一定三思而后行，如果是你自己的仓库怎么玩怎么操作都无所谓，但是团队项目害的可能是一堆人
    遇到事情不要慌，多搜一搜报错提示，可以下载一个Sourcetree工具

# 初始化git仓库
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

# 提交本地代码
	git push

#   提交本地代码（若远程没有分支则强制创建）
	git push origin 分支名:分支名
  
# 创建新分支并进入
    git checkout -b "分支名"

# 查看本地所有分支
	git branch

# 查看本地和远程所有分支
    git branch -a

# 切换分支
	git checkout '要去的分支名'

# 反向分支合并（自己的分支反向合并master主分支）
	git rebase -i master
		合并时会出现合并日志（类似编辑界面），直接按下ESC，然后【:wq】保存退出

# 冲突解决
	1.保存好相关分支的修改并提交到暂存区
		1. git add .
		2. git commit -m '备注'
	2. git rebase -i会发生冲突（结果表现为：分支名后面带有rebase|1 类似的字样）
		1. 在vscode中处理好相关冲突文件（冲突文件颜色为蓝色）
		2. git add . 将所有修复行为提交
		3. git rebase --continue 继续合并（结果表现为：分支名后面没有异常字样）
		4. 最终合并成功，git push提交本地修复

# 本地ignore更新
	更新本地ignore以后不会立即生效，因为git有缓存，需要如下执行
		1. git rm -r --cached .
			请务必注意，最后有一个【点】，那不是句号！！！
		2. git add .
		3. git commit -m '日志信息——开发者'

# 最后的解决方法
	假如你不小心在master做了不可回撤的操作，并导致master分支异常
		将你的修改保存到仓库外界，然后运行命令：
			git reset --hard origin/master
				这条命令会让master直接回到当前远程最新的版本

# 文件操作
	查看文件
		ls
	进入目录
		cd
	编辑文件
		vi 文件名.后缀
		按下键盘 ： i
			左下角出现【-- 插入 --】，就可以写东西
		保存插入内容
			1. ESC   （此时屏幕左下角什么都没有了）
			2. 输入【:wq】，然后回车，就能保存退出
	查看文件内容
		cat '文件名.后缀'



    