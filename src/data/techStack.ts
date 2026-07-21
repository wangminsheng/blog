export interface TechCategory {
  name: string;
  items: TechItem[];
}

export interface TechItem {
  name: string;
  level: 'master' | 'proficient' | 'familiar';
  icon?: string;
}

export const techStack: TechCategory[] = [
  {
    name: '前端开发',
    items: [
      { name: 'React', level: 'master', icon: 'react' },
      { name: 'TypeScript', level: 'master', icon: 'typescript' },
      { name: 'Electron', level: 'master', icon: 'electron' },
      { name: 'TailwindCSS', level: 'proficient', icon: 'tailwind' },
      { name: 'HTML/CSS', level: 'master', icon: 'html' },
    ],
  },
  {
    name: '后端开发',
    items: [
      { name: 'Go', level: 'proficient', icon: 'go' },
      { name: 'Node.js', level: 'proficient', icon: 'node' },
      { name: 'Rust', level: 'familiar', icon: 'rust' },
      { name: 'C#', level: 'familiar', icon: 'csharp' },
    ],
  },
  {
    name: '运维技术',
    items: [
      { name: 'Docker', level: 'proficient', icon: 'docker' },
      { name: 'Kubernetes', level: 'proficient', icon: 'k8s' },
      { name: 'PowerShell', level: 'master', icon: 'powershell' },
      { name: 'Windows 运维', level: 'master', icon: 'windows' },
      { name: 'Linux 运维', level: 'proficient', icon: 'linux' },
      { name: 'NoVNC/RDP', level: 'proficient', icon: 'vnc' },
    ],
  },
  {
    name: '工具技能',
    items: [
      { name: 'Git', level: 'master', icon: 'git' },
      { name: 'VS Code', level: 'master', icon: 'vscode' },
      { name: 'CI/CD', level: 'proficient', icon: 'cicd' },
      { name: '网络配置', level: 'proficient', icon: 'network' },
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
