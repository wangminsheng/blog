# 问题解决记录

本文件记录项目开发过程中遇到的问题及其解决步骤，方便学习和复盘。

---

## 问题1：社交媒体链接无法跳转

### 问题描述
联系方式区域的 GitHub 和 LinkedIn 按钮点击后无法跳转到对应链接。

### 问题原因
在 `Contact.tsx` 组件中，链接地址硬编码为 `href="#"`，没有使用 `socialLinks` 数据中的真实链接。

### 解决步骤

#### 步骤1：分析代码
打开 `src/components/Contact.tsx` 文件，查看社交媒体按钮的实现：

```tsx
// 问题代码
<motion.a
  href="#"  // 硬编码为 #，不会跳转
  className="flex items-center gap-2 px-4 py-2 bg-tech-blue/10 text-tech-blue rounded-lg hover:bg-tech-blue/20 transition-colors"
  whileHover={{ scale: 1.05 }}
>
  <Github size={18} />
  GitHub
</motion.a>
```

#### 步骤2：修改导入
将 `socialLinks` 添加到导入语句中：

```tsx
// 之前
import { contactInfo } from '../data/contact';

// 修改后
import { contactInfo, socialLinks } from '../data/contact';
```

#### 步骤3：动态渲染链接
将硬编码的按钮改为动态渲染，使用 `socialLinks` 数据：

```tsx
// 修改前
<div className="flex gap-4 mt-6">
  <motion.a href="#" ...>
    <Github size={18} />
    GitHub
  </motion.a>
  <motion.a href="#" ...>
    <Linkedin size={18} />
    LinkedIn
  </motion.a>
</div>

// 修改后
<div className="flex gap-4 mt-6">
  {socialLinks.map((link) => (
    <motion.a
      key={link.name}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 bg-tech-blue/10 text-tech-blue rounded-lg hover:bg-tech-blue/20 transition-colors"
      whileHover={{ scale: 1.05 }}
    >
      {link.icon === 'github' ? <Github size={18} /> : <Globe size={18} />}
      {link.name}
    </motion.a>
  ))}
</div>
```

#### 步骤4：添加必要的属性
- `target="_blank"`：在新标签页打开链接
- `rel="noopener noreferrer"`：安全属性，防止跨站攻击

### 验证结果
修改后，点击 GitHub 和博客按钮会正确跳转到对应的链接。

### 知识点总结
1. **数据驱动渲染**：React 中应尽量使用数据动态渲染组件，避免硬编码
2. **a 标签属性**：`target="_blank"` 和 `rel="noopener noreferrer"` 是打开外部链接的最佳实践
3. **key 属性**：使用 map 渲染列表时，必须为每个元素提供唯一的 key
4. **条件渲染**：根据数据动态选择不同的图标

---

## 问题2：视频播放无反应（本地和线上都无法播放）

### 问题描述
视频介绍区域点击播放按钮后没有反应，本地开发服务器和 GitHub Pages 都无法播放视频。

### 问题原因
由于 `vite.config.ts` 中设置了 `base: '/blog/'`，视频路径需要加上 `/blog/` 前缀才能正确访问。原代码中视频路径使用的是 `/video/xxx.mp4`，导致请求返回 404。

### 解决步骤

#### 步骤1：排查问题
在本地开发服务器中测试视频文件是否可访问：

```powershell
# 测试不带前缀的路径（返回 404）
Invoke-WebRequest "http://localhost:5173/video/环境检测工具.mp4" -UseBasicParsing | Select-Object StatusCode

# 测试带前缀的路径（返回 200）
Invoke-WebRequest "http://localhost:5173/blog/video/环境检测工具.mp4" -UseBasicParsing | Select-Object StatusCode
```

#### 步骤2：修改视频路径
打开 `src/components/VideoSection.tsx`，修改 `<video>` 标签的路径：

```tsx
// 修改前
<video
  poster="/video/环境检测工具.mp4#t=1"
>
  <source src="/video/环境检测工具.mp4" type="video/mp4" />
</video>

// 修改后
<video
  poster="/blog/video/环境检测工具.mp4#t=1"
>
  <source src="/blog/video/环境检测工具.mp4" type="video/mp4" />
</video>
```

#### 步骤3：本地验证
启动开发服务器，访问 `http://localhost:5173/blog`，确认视频可以正常播放。

### 验证结果
修改后，本地开发服务器和 GitHub Pages 都能正常播放视频。

### 知识点总结
1. **Vite base 配置**：当设置 `base` 路径时，所有静态资源路径都需要加上这个前缀
2. **public 目录**：Vite 会将 `public` 目录下的文件原样复制到构建输出目录
3. **资源路径测试**：遇到资源加载问题时，先通过 HTTP 请求测试资源是否可访问
4. **本地优先验证**：部署前应先在本地验证功能是否正常

---

## 格式说明

### 问题记录格式
- **问题描述**: 简洁描述问题现象
- **问题原因**: 分析问题产生的根本原因
- **解决步骤**: 详细的解决过程，包含代码对比
- **验证结果**: 问题是否解决
- **知识点总结**: 从问题中学到的知识

### 标签说明
- ✅ 已解决
- 🔧 修复中
- ❓ 待排查
