export interface Experience {
  id: string;
  year: string;
  company: string;
  position: string;
  projects: string[];
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: '1',
    year: '2025 - 至今',
    company: '待业',
    position: '自我提升',
    projects: ['个人技术项目开发', '技术博客撰写', '开源项目贡献'],
    achievements: ['深入学习 K8s 和云原生技术', '开发多个实用工具', '完善技术知识体系'],
  },
  {
    id: '2',
    year: '2024 - 2025',
    company: '某科技公司',
    position: '云平台运维工程师',
    projects: ['环境检测工具开发', '纵骥云办公客户端', 'GPU虚拟化运维'],
    achievements: ['开发环境检测工具，提升运维效率', '负责云平台日常运维，保障服务稳定', '处理各类技术问题，客户满意度高'],
  },
  {
    id: '3',
    year: '2022 - 2024',
    company: '某软件公司',
    position: '运维工程师',
    projects: ['K8s 集群部署', 'NoVNC 远程桌面', '企业级存储方案'],
    achievements: ['完成设计云平台 K8s 部署方案', '实现浏览器端远程桌面访问', '为多家企业提供存储解决方案'],
  },
  {
    id: '4',
    year: '2019 - 2022',
    company: '某IT服务公司',
    position: '系统工程师',
    projects: ['虚拟化平台搭建', '服务器运维', '网络配置'],
    achievements: ['搭建企业虚拟化平台', '保障服务器稳定运行', '解决复杂网络问题'],
  },
  {
    id: '5',
    year: '2015 - 2019',
    company: '某科技公司',
    position: '运维专员',
    projects: ['系统运维', '数据库管理', '安全加固'],
    achievements: ['负责公司系统日常运维', '管理企业级数据库', '实施安全加固措施'],
  },
];
