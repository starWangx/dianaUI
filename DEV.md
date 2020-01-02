# 戴安娜UI —— 开发流程和规范(Process and Rules of Development)
- `master`分支为生产环境分支

- `release`分支为发布分支和开发基准分支

- 开发时需要基于`release`分支内容，并创建新分支(git checkout -b _branchName_ origin/release)进行开发

- 安装依赖 `yarn`**(推荐)** 或 `npm i`

- 基于[docz](https://www.docz.site/)为开发环境，输入相应的npm script运行项目 `yarn run dev` 或 `npm run dev`

- 开发和检测完毕后，将代码合并至`release`分支, 运行`npm run release`进行测试和版本构建(发布大版本请务必打上相应的`tag`)

- 通过[Jenkins](http://jenkins.hupu.io/job/diana-ui-pipeline/)将代码合并至生产分支, 并发布到hnpm私有仓库中

## Unit Test (单元测试)
基于 [Jest](https://jestjs.io/docs/zh-Hans/getting-started) 和 [Enzyme](https://airbnb.io/enzyme/) 进行单元测试

- `npm test:jest`: 运行jest单元测试

- `npm run update:snapshot`: 更新snapshot

---

## ESLint (基于lint的代码规范)
- `npm run lint`: 运行lint工具检查代码

- 基于**typescript-eslint/recommended**社区推荐的标准
  - 使用**table**键的**2**个缩进

  - `+` 运算符只能操作同种类型的字符
    ```javascript
    '5' + 5; // 不允许
    5 + 5; // ok
    '5' + '5'; // ok
    ```

  - 字符串使用单引号`''`

  - 表达式后必须使用`;`结尾

  - 其余规则详见[**eslintrc.js**](https://gitlab.hupu.com/frontend/hfdc-react-basic/blob/release/.eslintrc.js)...

---

## Publish to Production Environment (发布)
须切换到 `release` 分支后进行如下操作：
- `npm run release` (自动迭代最小的版本)

- `npm run release i` (忽略自动迭代)

- `npm run release 1.2.15` (版本号迭代至1.2.15)

- 发布：使用Jenkins发布，[点击发布](http://jenkins.hupu.io/job/diana-ui-pipeline/)

---

## git commit message regulation (git commit message的规范)
- 使用[commitlint](https://commitlint.js.org/#/)作为规范的校验工作

- `git commit -m'${type}: message is something'`，其中 `type` 的类型有：
  - **feat** / **feature**：新功能
  - **fix**：bug修复
  - **hotfix**：bug紧急修复
  - **docs**：文档(README)变动、注释变动
  - **style**：代码风格变动
  - **refactor**：重构
  - **test**：用于测试
  - **revert**：代码的撤回、回退
  - **update**：更新代码
  - **upgrade**：升级npm包
  - **modify**：修改某文件
  - **merge**：合并代码
  - **chore**：构建工具或构建过程等变动

- 修改commitlint规则请至 **commitlint.config.js** 中进行