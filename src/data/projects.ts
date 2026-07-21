export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  highlights: string[];
  year: string;
  link?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    name: '环境检测工具(使用AI写的)',
    description: '基于 Electron + React + TypeScript 开发的 3DCloudAgent 环境检测工具，提供可视化界面展示系统环境检测结果，包括系统信息、软件检测、网络检测、存储检测等功能。',
    techStack: ['Electron', 'React', 'TypeScript', 'TailwindCSS', 'Vite'],
    highlights: [
      '自动检测系统环境配置',
      '多端口连通性检测（响应时间<1秒）',
      'SMB协议版本检测',
    ],
    year: '2026',
  },
  {
    id: '2',
    name: 'AI云办公(使用AI写的)',
    description: '基于 Electron 开发的云办公客户端，集成远程桌面、文件管理、环境检测等功能，为设计云平台用户提供一站式办公体验。',
    techStack: ['Electron', 'React', 'TypeScript', 'TailwindCSS'],
    highlights: [
      '支持 RDP 协议连接',
      '云盘挂载状态监控',
      '支持免安装',
    ],
    year: '2026',
  },
  {
    id: '3',
    name: 'Resolution-Dpi(使用AI写的)',
    description: '一个用于管理 Windows 显示器分辨率和 DPI 缩放的命令行工具',
    techStack: ['Go', 'React', 'TypeScript', 'Vite'],
    highlights: [
      '支持多证书格式（PEM/DER/PFX）',
      'CLI 命令行工具',
      'Web UI 可视化管理',
      '证书有效期提醒',
    ],
    year: '2023',
  },
  {
    id: '4',
    name: '小工具-d3_screen',
    description: '基于 Rust 开发的屏幕分辨率和 DPI 检测工具，用于获取和设置显示器的分辨率和缩放比例。',
    techStack: ['Rust', 'Windows API'],
    highlights: [
      '快速获取显示器信息',
      '支持多显示器配置',
      'DPI 缩放比例检测',
      '高性能本地代码',
    ],
    year: '2025',
  },
  {
    id: '5',
    name: 'K8s 实战项目',
    description: '设计云平台 Kubernetes 部署方案，包括集群搭建、服务部署、网络配置、监控告警等完整流程。',
    techStack: ['Kubernetes', 'Docker', 'Helm', 'Prometheus'],
    highlights: [
      '完整的 K8s 部署方案设计',
      'Docker 镜像管理',
      '服务编排与调度',
      '监控告警体系搭建',
    ],
    year: '2022',
  },
  {
    id: '6',
    name: 'NoVNC 部署项目',
    description: '基于 Docker 部署 NoVNC 服务，实现浏览器端远程桌面访问，支持加密连接和 token 认证。',
    techStack: ['Docker', 'NoVNC', 'WebSocket', 'SSL/TLS'],
    highlights: [
      'Docker 容器化部署',
      'WebSocket 协议通信',
      'Token 认证机制',
      '支持多种分辨率适配',
    ],
    year: '2022',
  },
];
