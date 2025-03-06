export type Locale = "zh" | "en"

export const translations = {
  zh: {
    // 导航
    nav: {
      home: "首页",
      about: "关于我",
      products: "产品与服务(Blackboxcv)",
      intelligence: "我的数智工具",
      news: "新闻动态",
      learning: "学习中心",
      showcase: "成果展示",
      contact: "联系我",
    },
    // 首页
    home: {
      hero: {
        title: "欢迎来到Cyan的个人数字化空间",
        description: "工业测量光学设备供应商 & 数字化服务顾问",
        cta1: "联系我",
        cta2: "了解更多",
      },
      features: {
        title: "特色服务",
        subtitle: "我们能为制造业伙伴做什么",
        description: "强大的计量技术产品，帮助解决业内复杂的测量挑战",
        items: [
          {
            title: "场景化解决方案",
            description: "我们的设计团队将为您创建独特而专业的设计方案。",
          },
          {
            title: "全周期技术响应",
            description: "关键问题48小时远程诊断，解决您的任何问题。",
          },
          {
            title: "合规性保障",
            description: "工业领域对数据合规性（如ISO标准）要求严格。",
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
        title: "关于我",
        // 比如我附属于Blackboxcv公司，我们提供适配不同需求的各种3D扫描仪。高定制化。
        /**
         * 我出生于中国南方的一个小城市，从小也在那里长大。我喜欢挑战和学习新事物，我喜欢语言以及其背后的多元文化，我喜欢与不同背景的人合作，我喜欢旅行，阅读，瑜伽等各种运动。
         * 在大学期间，我学习了信息管理与信息系统，涵盖管理类学科，也涵盖计算机类学科。大学期间，我在一家软件公司实习，负责coding迭代。
         * 2019年毕业后，我加入了一家制造业公司，负责coding公司的数字化项目，比如工厂数据看版，公司官网，小程序端的销量查询系统，权限管理系统等。
         * 2020年夏天，为了接受更大的挑战和学习更多的知识，我决定锚定阿里巴巴集团，所以整整一年的时间，我利用业务时间钻研技术，自学精进技能，于2021年夏天，成功面上阿里巴巴，成为阿里的一名Web前端工程师。
         * 在阿里巴巴，我熟练使用了很多新技术，比如React、Node.js等。也学到了很多新的知识，比如如何高效工作，如何管理自己的时间和任务，如何与团队合作，如何设计一个大型系统等。在阿里巴巴，我参与研发了很多大型项目，也独立负责过从0到1的复杂系统应用。比如千万级用户体量的门店系统，比如阿里内部的人才服务管理系统。
         * 2024年，我决定离开阿里巴巴，因为我想要更多的自由和挑战。我相信人生本就是自由的，也是充满无限可能的。
         * 我希望通过我的服务，可以帮助更多的企业或决策者或个人实现数字化提效。
         * 所以我决定成为一名自由职业者，为制造业公司提供数字化服务，同时我也是Blackboxcv的营销顾问，为制造业公司提供3D扫描仪设备。
         */
        // 或分析决策需要数字化帮助？我可以帮助制造业公司显著提升项目的周转时间和盈利能力。也可以提供数字化的服务。比如网站开发、咨询服务、培训课程等。
        description: "我出生于中国南方的一个小城市，从小也在那里长大。我喜欢挑战和学习新事物，我喜欢语言以及其背后的多元文化，我喜欢与不同背景的人合作，我喜欢旅行，阅读，瑜伽等各种运动。在大学期间，我学习了信息管理与信息系统，涵盖管理类学科，也涵盖计算机类学科。大学期间，我在一家软件公司实习，负责coding迭代。2019年毕业后，我加入了一家制造业公司，负责coding公司的数字化项目，比如工厂数据看版，公司官网，小程序端的销量查询系统，权限管理系统等。2020年夏天，为了接受更大的挑战和学习更多的知识，我决定锚定阿里巴巴集团，所以整整一年的时间，我利用业务时间钻研技术，自学精进技能，于2021年夏天，成功面上阿里巴巴，成为阿里的一名Web前端工程师。在阿里巴巴，我熟练使用了很多新技术，比如React、Node.js等。也学到了很多新的知识，比如如何高效工作，如何管理自己的时间和任务，如何与团队合作，如何设计一个大型系统等。在阿里巴巴，我参与研发了很多大型项目，也独立负责过从0到1的复杂系统应用。比如千万级用户体量的门店系统，比如阿里内部的人才服务管理系统。2024年，我决定离开阿里巴巴，我想要更多的自由，更多的可能性和挑战。现在，我是Blackboxcv的营销顾问，我很高兴加入这样一个充满创新的团队，我很难不向你们吹嘘一点，我们团队的技术在多年的打磨中走的越来越稳，未来也将走的越来越远，我们因为技术研发和创新获得了许多荣誉和证书，也有很多专利。我希望通过我成为桥梁，可以让更多制造业公司认识我们团队，Blackboxcv可以为制造业公司提供测量解决方案，比如3D扫描仪设备，Blackboxcv还支持高度定制化。 或数字化服务。同时，我个人也可以帮助更多的企业决策者或个人实现数字化提效，比如网站开发、咨询服务、辅助企业制定营销战略等。",
        cta1: "联系我",
        cta2: "了解更多",
      },
      features: {
        title: "特色服务",
        subtitle: "我能为您做什么",
        description: "工业测量光学设备供应商 & 数字化服务顾问",
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
      // 联系方式页面除了基本表单，可以加入即时聊天工具，或预约系统，方便客户直接联系。同时展示合作的认证、合作伙伴标志，增强可信度
      description: "请填写表单，信息会通过邮件形式发送给Cyan，Cyan将在每天的固定时间读取邮件并尽快回复您。",
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
      products: "Products & Services from Blackboxcv",
      intelligence: "Intelligence Tools",
      news: "News",
      learning: "Learning Center",
      showcase: "Showcase",
      contact: "Contact Me",
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

