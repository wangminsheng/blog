export interface TechCategory {
  name: string;
  items: TechItem[];
}

export interface TechItem {
  name: string;
  level: 'master' | 'proficient' | 'familiar';
  icon?: string;
  description?: string;
}

export const techStack: TechCategory[] = [
  {
    name: '前端开发',
    items: [
      { name: 'React', level: 'familiar', icon: 'react', description: '用于构建网站和应用界面的框架，让页面交互更流畅' },
      { name: 'TypeScript', level: 'familiar', icon: 'typescript', description: '给JavaScript代码添加类型检查，减少出错，让代码更可靠' },
      { name: 'Electron', level: 'familiar', icon: 'electron', description: '用网页技术开发桌面软件，如VS Code' },
      { name: 'TailwindCSS', level: 'familiar', icon: 'tailwind', description: '快速编写网页样式的工具，不用写复杂的CSS' },
      { name: 'HTML/CSS', level: 'proficient', icon: 'html', description: '构建网页的基础技术，HTML负责内容，CSS负责外观' },
    ],
  },
  {
    name: '后端开发',
    items: [
      { name: 'Go', level: 'familiar', icon: 'go', description: 'Google开发的编程语言，适合高性能后端服务' },
      { name: 'Node.js', level: 'familiar', icon: 'node', description: '让JavaScript在服务器上运行，用于开发后端' },
      { name: 'Rust', level: 'familiar', icon: 'rust', description: '注重安全和性能的编程语言，适合系统级开发' },
      { name: 'C#', level: 'familiar', icon: 'csharp', description: 'Microsoft开发的语言，常用于Windows应用和游戏' },
    ],
  },
  {
    name: '运维技术',
    items: [
      { name: 'Docker', level: 'proficient', icon: 'docker', description: '把软件打包成容器，确保在任何环境都能正常运行' },
      { name: 'Kubernetes', level: 'familiar', icon: 'k8s', description: '管理大量容器的工具，实现自动化部署和运维' },
      { name: 'PowerShell', level: 'master', icon: 'powershell', description: 'Windows系统的脚本语言，用于自动化管理和运维' },
      { name: 'Bash', level: 'master', icon: 'Bash', description: 'Linux/Mac系统的命令行脚本语言，用于自动化操作' },
      { name: 'Windows 运维', level: 'master', icon: 'windows', description: '维护和管理Windows服务器的技能' },
      { name: 'Linux 运维', level: 'master', icon: 'linux', description: '维护和管理Linux服务器的技能' },
      { name: 'NoVNC/RDP', level: 'master', icon: 'vnc', description: '远程控制电脑的技术，方便远程办公和运维' },
    ],
  },
  {
    name: '工具技能',
    items: [
      { name: 'Git', level: 'proficient', icon: 'git', description: '代码版本控制工具，管理代码变更历史' },
      { name: 'VS Code', level: 'proficient', icon: 'vscode', description: '微软开发的代码编辑器，功能强大且可扩展' },
      { name: 'CI/CD', level: 'familiar', icon: 'cicd', description: '自动化测试和部署流程，提高开发效率' },
      { name: '网络配置', level: 'proficient', icon: 'network', description: '配置和管理网络设备的技能，确保网络正常运行' },
    ],
  },
];

export const radarData = {
  labels: ['前端', '后端', '运维', '工具', '自动化', '学习能力'],
  datasets: [
    {
      label: '技术能力',
      data: [85, 70, 90, 80, 85, 95],
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(59, 130, 246, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(59, 130, 246, 1)',
    },
  ],
};