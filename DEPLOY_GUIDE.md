# 本地源码推送到 GitHub 并部署 GitHub Pages 操作指南

## 📋 准备工作

### 前提条件
- [ ] 已安装 Git
- [ ] 已安装 Node.js（推荐 18+）
- [ ] 已注册 GitHub 账号
- [ ] 已创建 GitHub 仓库（公开仓库）

### 配置 Git 用户信息
```bash
git config --global user.name "你的用户名"
git config --global user.email "你的邮箱"
```

---

## 📊 操作流程图

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│ 1. 修改代码     │ ──▶ │ 2. 本地提交     │ ──▶ │ 3. 推送源码     │
│ (src/data/)     │     │ (git add/commit)│     │ (git push)      │
└─────────────────┘     └─────────────────┘     └────────┬────────┘
                                                          │
                                                          ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│ 6. 访问网站     │ ◀── │ 5. 配置 Pages   │ ◀── │ 4. 部署构建     │
│ (wangminsheng   │     │ (GitHub设置)    │     │ (npm run deploy)│
│ .github.io/blog)│     └─────────────────┘     └─────────────────┘
└─────────────────┘
```

---

## 🔑 关键步骤详解

### 步骤1：修改代码

修改 `src/data/` 目录下的文件：

| 文件 | 修改内容 |
|------|----------|
| `experiences.ts` | 工作经历 |
| `projects.ts` | 项目信息 |
| `techStack.ts` | 技术栈 |
| `contact.ts` | 联系方式 |

### 步骤2：本地提交

```bash
# 查看修改状态
git status

# 添加所有文件
git add -A

# 提交（填写有意义的提交信息）
git commit -m "update: 修改了xxx内容"
```

**提交信息规范**：
- `feat:` 新增功能
- `fix:` 修复问题
- `update:` 更新内容
- `config:` 配置变更

### 步骤3：推送源码到远程仓库

```bash
# 推送主分支
git push origin main
```

### 步骤4：构建并部署到 GitHub Pages

```bash
# 构建项目
npm run build

# 部署到 gh-pages 分支
npm run deploy
```

### 步骤5：配置 GitHub Pages（首次部署需要）

1. 打开仓库设置：`https://github.com/用户名/仓库名/settings/pages`
2. 在 "Source" 部分：
   - 选择 "Deploy from a branch"
   - 选择 `gh-pages` 分支
   - 选择 `/ (root)` 目录
   - 点击 "Save"

3. 等待部署完成（约 1-5 分钟）

### 步骤6：访问网站

部署成功后访问：`https://用户名.github.io/仓库名/`

---

## ⚡ 常用命令速查

### Git 命令
| 命令 | 说明 |
|------|------|
| `git status` | 查看修改状态 |
| `git diff` | 查看具体变更 |
| `git add -A` | 添加所有文件 |
| `git commit -m "msg"` | 提交代码 |
| `git push origin main` | 推送到远程主分支 |
| `git log --oneline` | 查看提交历史 |

### 项目命令
| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run deploy` | 部署到 GitHub Pages |

---

## 🔧 常见问题排查

### Q1: 推送失败 - Connection was reset
**原因**：网络连接问题或需要代理

**解决**：
```bash
# 配置代理（端口根据你的代理设置）
git config --global http.proxy http://127.0.0.1:7897
git config --global https.proxy http://127.0.0.1:7897
```

### Q2: 404 - GitHub Pages 无法访问
**原因**：
1. 仓库是私有的（GitHub Pages 需要公开仓库）
2. 未配置 Pages 源

**解决**：
1. 将仓库改为公开（Settings → Visibility）
2. 配置 Pages 源（Settings → Pages → Deploy from a branch）

### Q3: 页面样式错乱
**原因**：`vite.config.ts` 中的 `base` 配置不正确

**解决**：确保 `base` 与仓库名一致
```ts
// vite.config.ts
export default defineConfig({
  base: '/仓库名/',  // 例如: '/blog/'
})
```

### Q4: gh-pages 分支不存在
**原因**：首次部署需要先构建

**解决**：
```bash
npm run build
npm run deploy
```

---

## 📝 完整操作示例

```bash
# 1. 修改代码后，查看状态
git status

# 2. 添加并提交
git add -A
git commit -m "update: 更新工作经历"

# 3. 推送源码
git push origin main

# 4. 构建并部署
npm run build
npm run deploy

# 5. 在 GitHub 设置中配置 Pages 源
# 访问: https://github.com/用户名/仓库名/settings/pages
```

---

## 🎯 总结

| 步骤 | 命令/操作 | 说明 |
|------|----------|------|
| 本地开发 | `npm run dev` | 启动开发服务器 |
| 修改代码 | 编辑 `src/data/` 文件 | 更新个人信息 |
| 本地提交 | `git add -A && git commit` | 保存变更 |
| 推送源码 | `git push origin main` | 同步到远程仓库 |
| 部署上线 | `npm run build && npm run deploy` | 发布到 GitHub Pages |
| 配置 Pages | GitHub 设置页面 | 首次部署需要 |
| 访问网站 | `https://用户名.github.io/仓库名/` | 查看效果 |

---

## 📞 备注

- 仓库名：`blog`
- 访问地址：`https://wangminsheng.github.io/blog/`
- 主分支：`main`
- 部署分支：`gh-pages`
