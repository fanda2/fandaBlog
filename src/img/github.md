# github仓库使用

## 一、仓库建立
 1. 在登录后进入仓库创建界面，填写仓库名称和描述即可创建仓库
  ![创建仓库](https://aiphoto-1305314152.cos.ap-chengdu.myqcloud.com/Internet%2Fgithub.png)

 2. 仓库主页的功能介绍
     - 修改项目介绍，点击edit
     - 查看仓库名称，一般情况仓库名称即为项目名称
     - `Create new file`创建文件、`upload files`上传文件、`Find file`搜索仓库文件
     - `Clone or Download`直接下载或通过github克隆
     - 点击事务卡片`issu`可以新建issu,在发现代码bug,但是目前没有成型代码需要讨论时使用。
![项目界面](https://aiphoto-1305314152.cos.ap-chengdu.myqcloud.com/Internet%2Fgithub2.png)

## 二、仓库管理
  1. 新建文件
      - 点击`create new file`新建文件
      - 进入后填写文件名称和文件内容
      - 填写每次提交的目的和描述，为了方便其他开发者知道本次添加或修改的原因
      - 点击`Commit new file` 即可提交

  2. 编辑文件
      - 点击`文件名`到文件详情页可以做删除和修改动作
      - 点击`文件描述`可以查看该文件提交的详细信息
      - 点击`修改`符号进行修改文件
      - 填写修改的目的和具体描述
      - 点击`Commit new file` 即可提交

  3. 删除文件
      - 点击`文件名`进入文件详情页
      - 点击`删除`按钮删除文件
      - 填写修改的目的和具体描述
      - 点击`Commit new file` 即可提交
      - 删除后可点击`commits`查看已经删除的文件

  4. 上传文件
      - 点击`upload files`即可选择上传文件
      - 填写修改的目的和具体描述
      - 点击`Commit new file` 即可提交  

  5. 搜索仓库文件
      - 点击`Go to file`可以搜索文件
      - 同时支持快捷键（t/T）

## 三、Github issues
  1. 作用：发现代码bug，但是目前没有成型代码，需要讨论时用；或者使用开源项目出现问题时使用。
  2. 提出方与代码拥有着均有关闭issue的权限
  3. pull request
      - fork项目
      - 修改自己仓库的项目代码
      - 新建pull request
      - 等待作者审核并合并修改

## 四、github 从本地上传文件
  1. 上传文件到主分支，
  ```shell
git init //初始化仓库
git add . //添加文件到本地仓库
git branch -M main //选择main分支，可以改名上传其它分支
git commit -m "first commit" //添加文件描述信息
git remote add origin https://github.com/xxx/xxxx.git //链接远程仓库，创建主分支
git pull origin main // 把本地仓库的变化连接到远程仓库主分支
git push -u origin main //此处上传的是main分支
```
  2. 若上传失败，可以使用强制上传，上传后会完全覆盖代码，谨慎使用
 ```shell
  git push -f origin main //强制push就成功了。
 ```

 ## 五、Git安装使用
  1. 下载并安装
      - 下载Git: https://www.git-scm.com/download/win
      - 点击安装
  2. Git工作区域
      - 工作区（Working Directory）、暂存区、Git仓库（Git Repsitory）
      ![Git工作区域示意图](https://aiphoto-1305314152.cos.ap-chengdu.myqcloud.com/Internet%2Fgit.png)
  3. 命令行控制
      - `git status` 查看当前文件的状况
      - `git add` 将文件从工作区提交到暂存区
      - `git commit -m "提交描述"` 填写描述，文件从暂存区提交到本地仓库
      - `git push` 将本地仓库文件提交到远程仓库
      - `git init` 初始化仓库
      - `git config  --global user.name 'username' ` 初始化填写用户名
      - `git config  --global user.email 'email@qq.com'` 初始化填写邮箱 这会用于github主页显示提交用户
      - `git clone 仓库地址` 从远程仓库克隆到本地
      - `git config --list` 检查自己的设置


## 六、利用github搭建个人网站
  1. 访问https://个人用户名.github.io
  2.搭建个人网站步骤
      -  创建个人站点
      - 新建仓库（仓库名必须是【用户名.github.io】）
      - 在仓库下新建index.html文件即为网站主页
