# vue_shop

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### ESLint config
```
{
  "eslint.autoFixOnSave": true,//保存时自动格式化
  "eslint.validate": [ //配置作用的文件类型
    "javascript",
    "javascriptreact",
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "vue",
      "autoFix": true
    }
  ]
}
```

### Git常用操作
#### 查看git状态
```
git status
```
#### 创建分支并跳转
```
git checkout -b 'NewBranchName'
```
#### 查看分支
```
#### 跳转分支
```
git checkout branchName
```
git branch
```
#### 从github更新代码到本地
```
git pull origin branchName
```
