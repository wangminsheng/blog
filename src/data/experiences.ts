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
    company: '上海纵骥信息科技有限公司',
    position: '测试经理|云平台运维工程师',
    projects: ['平台测试','平台运维','运维工具开发'],
    achievements: ['从零开始组建组件测试和运维团队，主导设计云平台的全生命周期测试体系建设，制定标准化测试与运维流程。','开发环境检测工具并构建自定义ISO部署安装包，将运维部署效率提升90%','深度参与产品调研与迭代，运维期间服务超过100家设计院；配合销售完成POC支持与签单客户超50家，客户满意度高。', '利用AI工具完成运维中各种实用工具开发，降低运维难道，提高运维效率。'],
  },
  {
    id: '3',
    year: '2012 - 2018',
    company: '天霆云计算科技有限公司',
    position: '竞品分析师',
    projects: ['-'],
    achievements: ['部署市面上各种VDI环境','分析竞品优劣势，给产品提供参考，增强产品市场竞争力'],
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
