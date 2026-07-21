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
    year: '2026年7月 - 至今',
    company: '待业',
    position: '自我提升中...',
    projects: ['个人技术项目开发', '技术博客撰写'],
    achievements: ['深入学习 K8s 和云原生技术', '完善技术知识体系'],
  },
  {
    id: '2',
    year: '2018 - 2026',
    company: '某云计算公司',
    position: '测试经理|云平台运维工程师',
    projects: ['环境检测工具开发', 'AI云办公客户端', '云平台运维'],
    achievements: ['测试团队组建','开发环境检测工具，提升运维效率', '负责云平台日常运维，保障服务稳定', '处理各类技术问题，客户满意度高'],
  },
  {
    id: '3',
    year: '2012 - 2018',
    company: '某软件公司',
    position: '竞品分析师',
    projects: ['-'],
    achievements: ['部署市面上各种VDI环境','分析竞品优劣势，给产品提供参考，增强产品的市场竞争力'],
  },
  {
    id: '4',
    year: '2010 - 2012',
    company: '达丰电脑',
    position: '自动化测试工程师',
    projects: ['产线自动化测试脚本编写'],
    achievements: ['参与思科服务器出厂自动化测试', '参与达丰自研服务出厂自动化测试', '参与网卡出厂自动化测试'],
  },
  {
    id: '5',
    year: '2009 - 2010',
    company: '博洋电脑',
    position: '维修员',
    projects: ['系统维护', '打印机维修'],
    achievements: ['负责公司系统日常运维', '客户打印机维修'],
  },
];
