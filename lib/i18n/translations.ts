export type Locale = "zh" | "en"

export const translations = {
  zh: {
    // 导航
    nav: {
      home: "首页",
      about: "关于我",
      products: "产品与服务",
      intelligence: "数智工具",
      news: "新闻动态",
      learning: "学习中心",
      showcase: "成果展示",
      contact: "联系我们",
    },
    // 首页
    home: {
      hero: {
        title: "欢迎来到Cyan的网站",
        description: "我们提供专业的服务和解决方案，满足您的各种需求。",
        cta1: "联系我们",
        cta2: "了解更多",
      },
      features: {
        title: "特色服务",
        subtitle: "我们能为您做什么",
        description: "我们提供全方位的服务，帮助您实现业务目标。",
        items: [
          {
            title: "专业设计",
            description: "我们的设计团队将为您创建独特而专业的设计方案。",
          },
          {
            title: "技术支持",
            description: "我们提供全天候的技术支持，解决您的任何问题。",
          },
          {
            title: "定制解决方案",
            description: "根据您的具体需求，我们提供量身定制的解决方案。",
          },
        ],
      },
      cta: {
        title: "准备好开始了吗？",
        description: "联系我们，开始您的项目。我们期待与您合作！",
        button: "立即联系",
      },
    },
    // 关于我
    about: {
      hero: {
        title: "欢迎来到Cyan的网站",
        description: "从代码到光波：打造精准的工业测量解决方案",
        cta1: "联系我们",
        cta2: "了解更多",
      },
      features: {
        title: "特色服务",
        subtitle: "我们能为您做什么",
        description: "比如代码和3D扫描仪的图像，强化转型故事。",
        items: [
          {
            title: "转型故事",
            description: "详细讲述他的职业转型故事，突出技术背景如何助力现在的外贸工作。",
          },
          {
            title: "我的价值观",
            description: "比如对精准数据的重视，增强信任感。",
          },
          {
            title: "我的经验和成就",
            description: "分时间线展示项目经验和成就，比如帮助客户降低成本、缩短周期等。",
          },
        ],
      },
      cta: {
        title: "准备好开始了吗？",
        description: "联系我们，开始您的项目。我们期待与您合作！",
        button: "立即联系",
      },
    },
    // 新闻页面
    news: {
      title: "新闻动态",
      description: "了解我们的最新动态、行业新闻和重要公告。",
      readMore: "阅读更多",
      categories: "分类",
      recentPosts: "最近文章",
      searchPlaceholder: "搜索新闻...",
    },
    // 产品与服务
    products: {
      title: "产品与服务",
      description: "探索我们提供的全方位产品和服务解决方案。",
      viewDetails: "查看详情",
      categories: {
        all: "全部",
        software: "产品",
        consulting: "服务",
        case: "成功案例",
      },
    },
    // 数字化工具
    intelligence: {
      title: "数智工具",
      description: "探索Cyan提供的技术赋能包，实现数据驱动选型决策。",
      categories: {
        tutorials: "市场分析",
        technology: "公司分析",
        articles: "产品分析",
        // 可以发布技术文章、行业分析、资源等，体现专业知识和行业洞察。增强专业形象。
        // guides: "技术文章/行业分析",
        resources: "预算粗估计算器",
      },
      searchPlaceholder: "集成AI...",
      viewResource: "查看资源",
    },
    // 学习中心
    learning: {
      title: "学习中心",
      description: "获取教程、指南和资源，帮助您提升技能和知识。",
      categories: {
        tutorials: "培训课程",
        technology: "技术文章",
        articles: "行业分析",
        resources: "资源平台",
      },
      searchPlaceholder: "搜索学习资源...",
      viewResource: "查看资源",
    },
    // 成果展示
    showcase: {
      title: "成果展示",
      description: "浏览我完成的数字化项目和数字化驱动产品。",
      viewCase: "查看案例",
      categories: {
        all: "全部",
        webDevelopment: "网站开发",
        mobileApps: "移动应用",
        design: "设计项目",
        consulting: "咨询项目",
      },
      clientSays: "客户评价",
    },
    // 联系页面
    contact: {
      title: "联系我",
      description: "Cyan很乐意听取您的意见或者向您提供服务。请填写表单，信息会通过邮件形式发送给我，我会在固定的时间读取邮件并尽量在2天内回复您。联系方式页面除了基本表单，可以加入即时聊天工具，或预约系统，方便客户直接联系。同时展示合作的认证、合作伙伴标志，增强可信度",
      info: {
        title: "联系方式",
        phone: "+86 187 9798 3328",
        email: "liaosarong@gmail.com",
        address: "浙江省杭州市余杭区五常街道，靠近阿里巴巴总部",
      },
      form: {
        title: "发送消息",
        description: "填写下面的表单与我们取得联系。",
        name: "姓名",
        email: "邮箱",
        message: "消息",
        submit: "发送消息",
        namePlaceholder: "请输入您的姓名",
        emailPlaceholder: "请输入您的邮箱",
        messagePlaceholder: "请输入您的消息",
      },
    },
    // 页脚
    footer: {
      copyright: "保留所有权利",
      privacyPolicy: "隐私政策",
      termsOfService: "服务条款",
    },
    // 通用
    common: {
      loading: "加载中...",
      error: "出错了",
      retry: "重试",
      search: "搜索",
      filter: "筛选",
      sort: "排序",
      language: "语言",
    },
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About Me",
      products: "Products & Services",
      intelligence: "Intelligence Tools",
      news: "News",
      learning: "Learning Center",
      showcase: "Showcase",
      contact: "Contact Us",
    },
    // Home page
    home: {
      hero: {
        title: "Welcome to Our Website",
        description: "We provide professional services and solutions to meet your various needs.",
        cta1: "Contact Us",
        cta2: "Learn More",
      },
      features: {
        title: "Featured Services",
        subtitle: "What We Can Do For You",
        description: "We provide comprehensive services to help you achieve your business goals.",
        items: [
          {
            title: "Professional Design",
            description: "Our design team will create unique and professional design solutions for you.",
          },
          {
            title: "Technical Support",
            description: "We provide 24/7 technical support to solve any of your problems.",
          },
          {
            title: "Custom Solutions",
            description: "We provide tailored solutions based on your specific needs.",
          },
        ],
      },
      cta: {
        title: "Ready to Get Started?",
        description: "Contact us to start your project. We look forward to working with you!",
        button: "Contact Now",
      },
    },
    // About page
    about: {
      hero: {
        title: "Welcome to Our Website",
        description: "We provide professional services and solutions to meet your various needs.",
        cta1: "Contact Us",
        cta2: "Learn More",
      },
      features: {
        title: "Featured Services",
        subtitle: "What We Can Do For You",
        description: "We provide comprehensive services to help you achieve your business goals.",
        items: [
          {
            title: "Professional Design",
            description: "Our design team will create unique and professional design solutions for you.",
          },
          {
            title: "Technical Support",
            description: "We provide 24/7 technical support to solve any of your problems.",
          },
          {
            title: "Custom Solutions",
            description: "We provide tailored solutions based on your specific needs.",
          },
        ],
      },
      cta: {
        title: "Ready to Get Started?",
        description: "Contact us to start your project. We look forward to working with you!",
        button: "Contact Now",
      },
    },
    // Contact page
    contact: {
      title: "Contact Me",
      description:
        "We would love to hear from you. Please fill out the form and we will get back to you as soon as possible.",
      info: {
        title: "Contact Information",
        phone: "+86 187 9798 3328",
        email: "liaosarong@gmail.com",
        address: "Wuchang Sub-district, Yuhang District, Hangzhou City, Zhejiang Province, near the headquarters of Alibaba",
      },
      form: {
        title: "Send a Message",
        description: "Fill out the form below to get in touch with us.",
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send Message",
        namePlaceholder: "Enter your name",
        emailPlaceholder: "Enter your email",
        messagePlaceholder: "Enter your message",
      },
    },
    // News page
    news: {
      title: "News",
      description: "Stay updated with our latest news, industry updates, and important announcements.",
      readMore: "Read More",
      categories: "Categories",
      recentPosts: "Recent Posts",
      searchPlaceholder: "Search news...",
    },
    // Products & Services
    products: {
      title: "Products & Services",
      description: "Explore our comprehensive range of products and service solutions.",
      viewDetails: "View Details",
      categories: {
        all: "All",
        software: "Software Solutions",
        consulting: "Consulting Services",
        training: "Training Courses",
      },
    },
    // 数字化工具
    intelligence: {
      title: "数智工具",
      description: "探索Cyan提供的技术赋能包，实现数据驱动选型决策。",
      categories: {
        tutorials: "市场分析",
        technology: "公司分析",
        articles: "产品分析",
        // 可以发布技术文章、行业分析、资源等，体现专业知识和行业洞察。增强专业形象。
        // guides: "技术文章/行业分析",
        resources: "预算粗估计算器",
      },
      searchPlaceholder: "AI问答...",
      viewResource: "查看资源",
    },
    // Learning Center
    learning: {
      title: "Learning Center",
      description: "Access tutorials, guides, and resources to help you improve your skills and knowledge.",
      categories: {
        tutorials: "Tutorials",
        guides: "Guides",
        resources: "Resources",
      },
      searchPlaceholder: "Search learning resources...",
      viewResource: "View Resource",
    },
    // Showcase
    showcase: {
      title: "Showcase",
      description: "Browse our completed projects and client success stories.",
      viewCase: "View Case",
      categories: {
        all: "All",
        webDevelopment: "Web Development",
        mobileApps: "Mobile Apps",
        design: "Design Projects",
        consulting: "Consulting Projects",
      },
      clientSays: "What Our Clients Say",
    },
    // Footer
    footer: {
      copyright: "All rights reserved",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
    },
    // Common
    common: {
      loading: "Loading...",
      error: "An error occurred",
      retry: "Retry",
      search: "Search",
      filter: "Filter",
      sort: "Sort",
      language: "Language",
    },
  },
}

