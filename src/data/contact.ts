import { images } from '../assets/images';
import resumeOps from '../assets/pdf/汪民胜简历-运维工程师.pdf';
import resumeCloud from '../assets/pdf/汪民胜简历-云平台运维工程师.pdf';
import resumeGpu from '../assets/pdf/汪民胜简历-GPU虚拟化运维.pdf';

export const resumes = [
  {
    id: 'ops',
    title: '汪民胜简历 - 运维工程师',
    subtitle: 'PDF 格式',
    url: resumeOps,
    color: 'blue',
  },
  {
    id: 'cloud',
    title: '汪民胜简历 - 云平台运维',
    subtitle: 'PDF 格式',
    url: resumeCloud,
    color: 'green',
  },
  {
    id: 'gpu',
    title: '汪民胜简历 - GPU虚拟化',
    subtitle: 'PDF 格式',
    url: resumeGpu,
    color: 'orange',
  },
];

export const contactInfo = {
  name: '汪民胜',
  title: '全栈运维工程师',
  leaveDate: '2026-07-18T00:00:00',
  email: 'yelang007sheng@163.com',
  phone: '147-8257-0230',
  location: '上海|松江',
  wechat: 'hayden__wang',
  wechatQr: images.wechatQr,
  groupName: '互助群',
  groupQr: images.groupQr,
  summary: '10年+运维经验，精通Windows/Linux运维、熟悉Electron应用开发、自动化工具开发，熟悉Kubernetes和Docker容器技术，具备优秀的问题分析和解决能力，有强烈的自驱力和学习热情。',
  skills: ['Electron', 'React', 'TypeScript', 'PowerShell', 'Docker', 'Kubernetes', 'Go', 'Rust'],
};

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/wangminsheng', icon: 'github' },
  { name: '博客', url: 'https://www.cnblogs.com/hayden1106', icon: 'blog' },
];
