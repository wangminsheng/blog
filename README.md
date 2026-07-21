# 个人技术展示网页

基于 React + TypeScript + Vite 构建的个人技术展示网页，用于快速展示运维工程师的技术能力和项目经验。

## 🎯 项目目标

为面试官提供一个快速了解个人技术能力的可视化平台，通过一个链接即可展示完整的技术栈、项目经验和工作经历。

## 🛠️ 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| React | ^18.2.0 | UI 框架 |
| TypeScript | ^5.2.2 | 类型安全 |
| Vite | ^5.0.0 | 构建工具 |
| TailwindCSS | ^3.3.5 | CSS 框架 |
| framer-motion | ^10.16.4 | 动画库 |
| Chart.js | ^4.4.0 | 数据可视化 |
| lucide-react | ^0.294.0 | 图标库 |

## 📁 项目结构

```
├── src/
│   ├── components/          # React 组件
│   │   ├── Header.tsx       # 导航头部
│   │   ├── Hero.tsx         # Hero 区域（动态背景）
│   │   ├── TechStack.tsx    # 技术栈可视化（雷达图）
│   │   ├── Projects.tsx     # 项目展示卡片
│   │   ├── Timeline.tsx     # 工作经历时间线
│   │   ├── VideoSection.tsx # 视频介绍区域（预留）
│   │   └── Contact.tsx      # 联系方式
│   ├── data/                # 数据文件
│   │   ├── techStack.ts     # 技术栈数据
│   │   ├── projects.ts      # 项目数据
│   │   ├── experiences.ts   # 工作经历数据
│   │   └── contact.ts       # 联系方式数据
│   ├── App.tsx              # 主应用组件
│   ├── main.tsx             # 入口文件
│   └── index.css            # 全局样式
├── public/                  # 静态资源
│   └── images/              # 图片资源
├── index.html               # HTML 模板
├── package.json             # 项目配置
├── vite.config.ts           # Vite 配置
├── tailwind.config.js       # TailwindCSS 配置
└── tsconfig.json            # TypeScript 配置
```

## 🚀 快速开始

### 开发模式

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问地址：http://localhost:5173/
```

### 构建生产版本

```bash
# 构建项目
npm run build

# 预览生产版本
npm run preview
```

## 📊 数据管理

所有页面数据都存储在 `src/data/` 目录下，可以根据实际情况修改：

- **技术栈数据**: `src/data/techStack.ts`
- **项目数据**: `src/data/projects.ts`
- **工作经历数据**: `src/data/experiences.ts`
- **联系方式数据**: `src/data/contact.ts`

## 🎨 设计风格

- **主题**: 极简科技风（深色背景）
- **主色调**: #0f172a（深蓝/黑色）
- **点缀色**: #3b82f6（蓝色）、#10b981（绿色）、#f59e0b（橙色）
- **响应式设计**: 支持桌面端、平板端、移动端

## 📱 响应式布局

| 设备类型 | 屏幕宽度 | 布局 |
|----------|----------|------|
| 桌面端 | >1200px | 三列布局 |
| 平板端 | 768px-1200px | 两列布局 |
| 移动端 | <768px | 单列布局 |

## 📄 许可证

MIT License

## 📧 联系方式

如有问题或建议，欢迎联系。
