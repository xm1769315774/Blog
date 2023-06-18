---
title: git操作
date: 2023-06-18
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

	msg规范：
	    feat -- 新增feature
	    fix -- 修复bug
	    docs -- 仅仅修改了文档，例如README、CHANGELOG等
	    style -- 修改了空格、格式缩进、逗号等，不改变代码逻辑
	    refactor -- 代码重构，没有加新功能或者修复bug
	    perf -- 优化相关，比如提升性能、体验
	    test -- 测试用例，包括单元测试、集成测试等
	    chore -- 改变构建流程、或者增加依赖库、工具等
	    revert -- 回滚到上一个版本

	若commit message错误想重新修改
		git commit --amend --message="修改的新的提交说明"
	
# 提交本地代码
	git push

#   提交本地代码（若远程没有分支则强制创建）
	git push origin 分支名:分支名

#  合并本地与线上分支最新代码
	1、第一种方式，相对可控，方便解决冲突
		先git fetch origin 远程分支名（把远程仓库的最新代码取回放到FETCH中）

		git merge FETCH (把本地代码和已取得的远程分支最新代码进行合并)

		若有冲突则会提示，直接进行对应的修改，进行冲突的合并解决
		解决完冲突之后再进行代码的提交

	2、第二种直接进行git pull origin 分支名
		此种方式相当于直接进行了 git fetch 和 git merge的操作
		自动合并隐藏过程细节，方便快捷，但是一旦有冲突，不太容易对比差异化代码

		git pull 合并可能会进入vim窗口，常用命令
		:w 	保存编辑后的文件内容，但不会退出vim编辑器。
		:q	在未做任何编辑处理而准备退出时，可以使用此命令。如果已经编辑处理过，则不能使用此命令退出。
		:wq 保存文件内容并退出vim编辑器。
		:w!	强制写文件，强制覆盖原有文件。
		:wq! 强制保存文件内容后退出vim编辑器。
		ZZ	如果已经编辑处理过文件，则保存并退出，否则只是退出。
		:q!	强制退出vim编辑器，放弃编辑处理的结果。
  
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


# 查看日志
	git log  列出所有的提交历史记录，可以上下翻动。
	git log -n 列出前n条记录
	git log --stat -n 显示简要的增改行数统计，每次提交文件的变更统计，n表示多少条，可以加上也可以忽略。
	git log --since=2.days  查看两天前的历史记录
	git log --author=user  查看user作者的所有提交历史记录
	git log --grep=feat	查看指定关键字为feat的所有提交
	git log --committer=name 查看提交者为name的所有历史记录
	（作者指代码的修改者，提交者指提交代码的人）

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

# 清环境
	git clean -dfx  此命令会将本地的node_modules .umi dist等文件清除干净。相当于还原成远程的最新状态，重新拉取代码一般。
	名词解释：
	d 删除未被添加到git的路径中的文件。
	f 强制运行。
	x 删除忽略文件已经对git来说不识别的文件。

	使用此命令前注意会将本地已修改的代码也清除，所以在使用前先保存自己的代码，避免误删除。

# 回退代码
	git reset --hard 目标版本号  目标版本号可以在log中或者仓库提交记录中找到就是一个commitID，使用此命令会将代码等回退到此版本
	



    