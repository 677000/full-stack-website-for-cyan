这个项目提供了一个完整的全栈网站框架，
UI设计，要求简洁，交互响应友好，符合国际标准，响应式，支持多语言切换，支持多设备兼容性，跨浏览器兼容性，

创建虚拟环境：
python3 -m venv venv 
激活虚拟环境
source venv/bin/activate
推出虚拟环境
deactivate

## 全栈开发简洁版
### 技术栈说明
这个全栈网站使用了以下免费的主流技术栈：
1. **前端框架**：Next.js - React框架，提供服务端渲染和静态生成能力
2. **样式**：Tailwind CSS - 实用优先的CSS框架
3. **UI组件**：shadcn/ui - 基于Radix UI的高质量组件库
4. **后端**：Next.js的服务器组件和服务器操作(Server Actions)
5. **部署平台**：Vercel - 提供免费的托管服务

### 功能特点
1. **响应式设计**：在所有设备上都能良好显示
2. **两个主要页面**：
    1. 首页：包含英雄区域、特性展示和号召行动区域
    2. 联系我们页面：包含联系表单和联系信息
    3. 新闻页面、
    4. 产品与服务页面、
    5. 学习中心页面、
    6. 成果展示页面
3. **服务器操作**：处理联系表单提交
4. **组件化结构**：易于维护和扩展


### 部署步骤
1. 在GitHub上创建一个新仓库并上传代码
2. 注册Vercel账号(免费)：[https://vercel.com](https://vercel.com)
3. 在Vercel上导入GitHub仓库
4. Vercel会自动检测Next.js项目并配置构建设置
5. 点击"Deploy"按钮完成部署
6. 部署完成后，Vercel会提供一个域名(例如：your-project.vercel.app)


### 本地开发
1. 克隆仓库到本地
2. 安装依赖：`npm install`
3. 启动开发服务器：`npm run dev`
4. 在浏览器中访问：`http://localhost:3000`

## 优化网站UI设计与功能增强
### 1. UI设计优化
- **简洁现代设计**：采用了更加简洁、现代的设计风格，减少视觉干扰
- **一致性**：在所有页面保持一致的设计语言和组件样式
- **动画效果**：添加了平滑的过渡动画，提升用户体验
- **色彩方案**：使用了更加协调的色彩方案，支持深色模式
- **卡片布局**：使用卡片组件展示内容，提高可读性和视觉层次


### 2. 多语言支持
- 实现了完整的中英文双语支持
- 添加了语言切换器，可以在任何页面切换语言
- 使用上下文API管理语言状态，确保全站一致性
- 本地存储用户语言偏好


### 3. 响应式设计
- 所有页面完全响应式，适配从手机到桌面的各种设备
- 针对移动设备优化了导航和布局
- 使用Tailwind CSS的响应式类实现不同屏幕尺寸的布局调整


### 4. 主题支持
- 添加了亮色/暗色主题切换功能
- 支持系统主题自动检测
- 主题切换无闪烁


### 5. 新增页面
- **新闻动态页面**：展示公司新闻和行业动态
- **产品与服务页面**：展示公司提供的产品和服务
- **学习中心页面**：提供教程、指南和资源
- **成果展示页面**：展示项目案例和客户评价


### 6. 交互优化
- 添加了平滑的页面过渡动画
- 改进了导航体验，当前页面高亮显示
- 添加了选项卡组件，方便内容分类浏览
- 优化了表单交互和反馈


### 7. 跨浏览器兼容性
- 使用标准CSS属性和特性
- 添加了必要的前缀和回退方案
- 使用现代JavaScript特性，同时确保广泛兼容性


### 8. 性能优化
- 使用Next.js的图像优化功能
- 组件懒加载
- 优化动画性能




## 项目结构说明
### 核心项目结构
```plaintext
/
├── app/                    # Next.js App Router 应用目录
│   ├── (site)/             # 前台网站页面
│   ├── admin/              # 后台管理页面
│   ├── api/                # API 路由
│   └── actions.ts          # 服务器操作
├── components/             # 可复用组件
│   ├── admin/              # 后台管理组件
│   ├── editor/             # 富文本编辑器组件
│   ├── forms/              # 表单组件
│   ├── ui/                 # UI 基础组件 (shadcn/ui)
│   └── ...                 # 其他组件
├── lib/                    # 工具库和辅助函数
│   ├── api-middlewares/    # API 中间件
│   ├── db/                 # 数据库相关
│   ├── i18n/               # 国际化相关
│   ├── validations/        # 验证模式
│   └── ...                 # 其他工具函数
├── public/                 # 静态资源
└── ...                     # 配置文件
```

### 前端项目结构
包含多个页面，用于向用户展示内容
```plaintext
app/(site)/
├── page.tsx                # 首页
├── contact/                # 联系页面
├── news/                   # 新闻页面
├── products/               # 产品页面
├── learning/               # 学习中心
└── showcase/               # 案例展示
```

### 后台管理系统项目结构
提供内容管理和系统设置功能
```plaintext
app/admin/
├── layout.tsx              # 后台布局（包含侧边栏和顶部导航）
├── page.tsx                # 仪表盘页面
├── login/                  # 登录页面
├── news/                   # 新闻管理
│   ├── page.tsx            # 新闻列表
│   ├── new/                # 新建新闻
│   └── [id]/               # 编辑新闻
├── products/               # 产品管理
│   ├── page.tsx            # 产品列表
│   ├── new/                # 新建产品
│   └── [id]/               # 编辑产品
├── resources/              # 学习资源管理
│   ├── page.tsx            # 资源列表
│   ├── new/                # 新建资源
│   └── [id]/               # 编辑资源
├── showcases/              # 案例展示管理
│   ├── page.tsx            # 案例列表
│   ├── new/                # 新建案例
│   └── [id]/               # 编辑案例
├── users/                  # 用户管理
│   ├── page.tsx            # 用户列表
│   ├── new/                # 新建用户
│   └── [id]/               # 编辑用户
└── settings/               # 系统设置
    └── page.tsx            # 设置页面
```

### API路由项目结构
API 路由处理数据请求和操作
```plaintext
app/api/
├── admin/                  # 后台管理 API
│   ├── news/               # 新闻相关 API
│   │   ├── route.ts        # 新闻列表和创建
│   │   └── [id]/           # 单个新闻操作
│   ├── products/           # 产品相关 API
│   ├── resources/          # 资源相关 API
│   ├── showcases/          # 案例相关 API
│   ├── users/              # 用户相关 API
│   └── settings/           # 设置相关 API
├── uploadthing/            # 文件上传 API
└── ...                     # 其他 API
```


### 组件库
```plaintext
components/
├── admin/                  # 后台管理组件
│   ├── header.tsx          # 后台顶部导航
│   ├── sidebar.tsx         # 后台侧边栏
│   └── data-table.tsx      # 数据表格组件
├── editor/                 # 富文本编辑器组件
│   ├── tiptap.tsx          # TipTap 编辑器主组件
│   ├── toolbar.tsx         # 编辑器工具栏
│   ├── extensions.ts       # 编辑器扩展配置
│   └── styles.css          # 编辑器样式
├── forms/                  # 表单组件
│   ├── user-form.tsx       # 用户表单
│   └── ...                 # 其他表单组件
├── header.tsx              # 前台网站头部
├── footer.tsx              # 前台网站底部
├── language-switcher.tsx   # 语言切换器
├── theme-toggle.tsx        # 主题切换器
├── uploadthing.tsx         # 文件上传组件
└── ui/                     # UI 基础组件
    ├── button.tsx
    ├── card.tsx
    ├── form.tsx
    ├── input.tsx
    └── ...                 # 其他 UI 组件
```


### 工具库
包含各种辅助函数和配置
```plaintext
lib/
├── api-middlewares/        # API 中间件
│   └── with-validation.ts  # 验证中间件
├── db/                     # 数据库相关
│   ├── schema.prisma       # Prisma 数据库模型
│   └── index.ts            # 数据库客户端
├── i18n/                   # 国际化相关
│   ├── context.tsx         # 语言上下文
│   └── translations.ts     # 翻译文本
├── validations/            # 验证模式
│   ├── auth.ts             # 认证相关验证
│   ├── content.ts          # 内容相关验证
│   ├── settings.ts         # 设置相关验证
│   └── upload.ts           # 上传相关验证
├── auth.ts                 # 认证相关
├── uploadthing.ts          # 文件上传配置
└── utils.ts                # 通用工具函数
```


### 数据库模型
项目使用 Prisma ORM 和 PostgreSQL 数据库，主要模型包括
```plaintext
// 用户模型
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String    @unique
  password      String
  role          Role      @default(EDITOR)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  news          News[]
  products      Product[]
  resources     Resource[]
  showcases     Showcase[]
}

// 角色枚举
enum Role {
  ADMIN
  EDITOR
}

// 新闻模型
model News {
  id          String   @id @default(cuid())
  title       Json     // 存储多语言标题 { zh: "中文标题", en: "English Title" }
  content     Json     // 存储多语言内容
  image       String?  // 图片URL
  category    String
  published   Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  author      User     @relation(fields: [authorId], references: [id])
  authorId    String
}

// 产品模型
model Product {
  id          String   @id @default(cuid())
  title       Json
  description Json
  image       String?
  category    String
  published   Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  author      User     @relation(fields: [authorId], references: [id])
  authorId    String
}

// 学习资源模型
model Resource {
  id          String   @id @default(cuid())
  title       Json
  content     Json
  type        String   // tutorial, guide, resource
  image       String?
  published   Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  author      User     @relation(fields: [authorId], references: [id])
  authorId    String
}

// 案例展示模型
model Showcase {
  id          String   @id @default(cuid())
  title       Json
  description Json
  image       String?
  category    String
  published   Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  author      User     @relation(fields: [authorId], references: [id])
  authorId    String
}
```




### 完整项目结构
```plaintext
├── app/                      # Next.js 应用主目录
│   ├── layout.tsx           # 根布局组件
│   ├── page.tsx             # 首页组件
│   ├── globals.css          # 全局样式
│   ├── actions.ts           # 服务器端动作【后端】
│   ├── contact/             # 联系页面目录
│   │   └── page.tsx
│   ├── news/               # 新闻页面目录
│   │   └── page.tsx
│   ├── products/          # 产品页面目录
│   │   └── page.tsx
│   ├── learning/         # 学习中心页面目录
│   │   └── page.tsx
│   └── showcase/        # 成果展示页面目录
│       └── page.tsx
│
├── components/          # 共享组件目录（前端）
│   ├── header.tsx      # 页头组件
│   ├── footer.tsx      # 页脚组件
│   ├── language-switcher.tsx  # 语言切换组件
│   ├── theme-toggle.tsx       # 主题切换组件
│   ├── theme-provider.tsx     # 主题提供者组件
│   └── ui/             # UI组件库
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dropdown-menu.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── sheet.tsx
│       ├── tabs.tsx
│       └── textarea.tsx
│
├── lib/                # 工具库目录
│   ├── utils.ts       # 通用工具函数
│   └── i18n/          # 国际化相关
│       ├── context.tsx    # 语言上下文（前端）
│       └── translations.ts # 翻译文件（前端）
├── validations/                # 使用 Zod 来实现后台管理系统的数据验证功能
│
└── public/            # 静态资源目录
```



## 技术栈
Thought for some time### 现代网站管理系统 - 项目结构说明

这个项目是一个完整的现代网站系统，包含前台展示和后台管理功能，支持多语言，使用 Next.js 构建。下面是项目的完整结构说明：

## 核心目录结构

```plaintext
/
├── app/                    # Next.js App Router 应用目录
│   ├── (site)/             # 前台网站页面
│   ├── admin/              # 后台管理页面
│   ├── api/                # API 路由
│   └── actions.ts          # 服务器操作
├── components/             # 可复用组件
│   ├── admin/              # 后台管理组件
│   ├── editor/             # 富文本编辑器组件
│   ├── forms/              # 表单组件
│   ├── ui/                 # UI 基础组件 (shadcn/ui)
│   └── ...                 # 其他组件
├── lib/                    # 工具库和辅助函数
│   ├── api-middlewares/    # API 中间件
│   ├── db/                 # 数据库相关
│   ├── i18n/               # 国际化相关
│   ├── validations/        # 验证模式
│   └── ...                 # 其他工具函数
├── public/                 # 静态资源
└── ...                     # 配置文件
```

## 前台网站 (`app/(site)/`)

前台网站包含多个页面，用于向用户展示内容：

```plaintext
app/(site)/
├── page.tsx                # 首页
├── contact/                # 联系页面
├── news/                   # 新闻页面
├── products/               # 产品页面
├── learning/               # 学习中心
└── showcase/               # 案例展示
```

## 后台管理系统 (`app/admin/`)

后台管理系统提供内容管理和系统设置功能：

```plaintext
app/admin/
├── layout.tsx              # 后台布局（包含侧边栏和顶部导航）
├── page.tsx                # 仪表盘页面
├── login/                  # 登录页面
├── news/                   # 新闻管理
│   ├── page.tsx            # 新闻列表
│   ├── new/                # 新建新闻
│   └── [id]/               # 编辑新闻
├── products/               # 产品管理
│   ├── page.tsx            # 产品列表
│   ├── new/                # 新建产品
│   └── [id]/               # 编辑产品
├── resources/              # 学习资源管理
│   ├── page.tsx            # 资源列表
│   ├── new/                # 新建资源
│   └── [id]/               # 编辑资源
├── showcases/              # 案例展示管理
│   ├── page.tsx            # 案例列表
│   ├── new/                # 新建案例
│   └── [id]/               # 编辑案例
├── users/                  # 用户管理
│   ├── page.tsx            # 用户列表
│   ├── new/                # 新建用户
│   └── [id]/               # 编辑用户
└── settings/               # 系统设置
    └── page.tsx            # 设置页面
```

## API 路由 (`app/api/`)

API 路由处理数据请求和操作：

```plaintext
app/api/
├── admin/                  # 后台管理 API
│   ├── news/               # 新闻相关 API
│   │   ├── route.ts        # 新闻列表和创建
│   │   └── [id]/           # 单个新闻操作
│   ├── products/           # 产品相关 API
│   ├── resources/          # 资源相关 API
│   ├── showcases/          # 案例相关 API
│   ├── users/              # 用户相关 API
│   └── settings/           # 设置相关 API
├── uploadthing/            # 文件上传 API
└── ...                     # 其他 API
```

## 组件库 (`components/`)

组件库包含各种可复用的组件：

```plaintext
components/
├── admin/                  # 后台管理组件
│   ├── header.tsx          # 后台顶部导航
│   ├── sidebar.tsx         # 后台侧边栏
│   └── data-table.tsx      # 数据表格组件
├── editor/                 # 富文本编辑器组件
│   ├── tiptap.tsx          # TipTap 编辑器主组件
│   ├── toolbar.tsx         # 编辑器工具栏
│   ├── extensions.ts       # 编辑器扩展配置
│   └── styles.css          # 编辑器样式
├── forms/                  # 表单组件
│   ├── user-form.tsx       # 用户表单
│   └── ...                 # 其他表单组件
├── header.tsx              # 前台网站头部
├── footer.tsx              # 前台网站底部
├── language-switcher.tsx   # 语言切换器
├── theme-toggle.tsx        # 主题切换器
├── uploadthing.tsx         # 文件上传组件
└── ui/                     # UI 基础组件
    ├── button.tsx
    ├── card.tsx
    ├── form.tsx
    ├── input.tsx
    └── ...                 # 其他 UI 组件
```

## 工具库 (`lib/`)

工具库包含各种辅助函数和配置：

```plaintext
lib/
├── api-middlewares/        # API 中间件
│   └── with-validation.ts  # 验证中间件
├── db/                     # 数据库相关
│   ├── schema.prisma       # Prisma 数据库模型
│   └── index.ts            # 数据库客户端
├── i18n/                   # 国际化相关
│   ├── context.tsx         # 语言上下文
│   └── translations.ts     # 翻译文本
├── validations/            # 验证模式
│   ├── auth.ts             # 认证相关验证
│   ├── content.ts          # 内容相关验证
│   ├── settings.ts         # 设置相关验证
│   └── upload.ts           # 上传相关验证
├── auth.ts                 # 认证相关
├── uploadthing.ts          # 文件上传配置
└── utils.ts                # 通用工具函数
```

## 数据库模型

项目使用 Prisma ORM 和 PostgreSQL 数据库，主要模型包括：

```plaintext
// 用户模型
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String    @unique
  password      String
  role          Role      @default(EDITOR)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  news          News[]
  products      Product[]
  resources     Resource[]
  showcases     Showcase[]
}

// 角色枚举
enum Role {
  ADMIN
  EDITOR
}

// 新闻模型
model News {
  id          String   @id @default(cuid())
  title       Json     // 存储多语言标题 { zh: "中文标题", en: "English Title" }
  content     Json     // 存储多语言内容
  image       String?  // 图片URL
  category    String
  published   Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  author      User     @relation(fields: [authorId], references: [id])
  authorId    String
}

// 产品模型
model Product {
  id          String   @id @default(cuid())
  title       Json
  description Json
  image       String?
  category    String
  published   Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  author      User     @relation(fields: [authorId], references: [id])
  authorId    String
}

// 学习资源模型
model Resource {
  id          String   @id @default(cuid())
  title       Json
  content     Json
  type        String   // tutorial, guide, resource
  image       String?
  published   Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  author      User     @relation(fields: [authorId], references: [id])
  authorId    String
}

// 案例展示模型
model Showcase {
  id          String   @id @default(cuid())
  title       Json
  description Json
  image       String?
  category    String
  published   Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  author      User     @relation(fields: [authorId], references: [id])
  authorId    String
}
```

## 技术栈

项目使用了以下主要技术：

1. **前端框架**

1. Next.js 14 (App Router)
2. React 18
3. TypeScript



2. **UI 和样式**

1. Tailwind CSS
2. shadcn/ui 组件库
3. Framer Motion (动画)
4. Lucide React (图标)



3. **状态管理和表单**

1. React Context API
2. React Hook Form
3. Zod (验证)



4. **后端和数据**

1. Next.js API Routes
2. Prisma ORM
3. PostgreSQL
4. NextAuth.js (认证)



5. **富文本编辑**

1. TipTap 编辑器
2. 自定义扩展



6. **文件上传**

1. UploadThing



7. **国际化**

1. 自定义 i18n 实现
2. 多语言内容管理


## 功能模块
Thought for some time### 现代网站管理系统 - 项目结构说明

这个项目是一个完整的现代网站系统，包含前台展示和后台管理功能，支持多语言，使用 Next.js 构建。下面是项目的完整结构说明：

## 核心目录结构

```plaintext
/
├── app/                    # Next.js App Router 应用目录
│   ├── (site)/             # 前台网站页面
│   ├── admin/              # 后台管理页面
│   ├── api/                # API 路由
│   └── actions.ts          # 服务器操作
├── components/             # 可复用组件
│   ├── admin/              # 后台管理组件
│   ├── editor/             # 富文本编辑器组件
│   ├── forms/              # 表单组件
│   ├── ui/                 # UI 基础组件 (shadcn/ui)
│   └── ...                 # 其他组件
├── lib/                    # 工具库和辅助函数
│   ├── api-middlewares/    # API 中间件
│   ├── db/                 # 数据库相关
│   ├── i18n/               # 国际化相关
│   ├── validations/        # 验证模式
│   └── ...                 # 其他工具函数
├── public/                 # 静态资源
└── ...                     # 配置文件
```

## 前台网站 (`app/(site)/`)

前台网站包含多个页面，用于向用户展示内容：

```plaintext
app/(site)/
├── page.tsx                # 首页
├── contact/                # 联系页面
├── news/                   # 新闻页面
├── products/               # 产品页面
├── learning/               # 学习中心
└── showcase/               # 案例展示
```

## 后台管理系统 (`app/admin/`)

后台管理系统提供内容管理和系统设置功能：

```plaintext
app/admin/
├── layout.tsx              # 后台布局（包含侧边栏和顶部导航）
├── page.tsx                # 仪表盘页面
├── login/                  # 登录页面
├── news/                   # 新闻管理
│   ├── page.tsx            # 新闻列表
│   ├── new/                # 新建新闻
│   └── [id]/               # 编辑新闻
├── products/               # 产品管理
│   ├── page.tsx            # 产品列表
│   ├── new/                # 新建产品
│   └── [id]/               # 编辑产品
├── resources/              # 学习资源管理
│   ├── page.tsx            # 资源列表
│   ├── new/                # 新建资源
│   └── [id]/               # 编辑资源
├── showcases/              # 案例展示管理
│   ├── page.tsx            # 案例列表
│   ├── new/                # 新建案例
│   └── [id]/               # 编辑案例
├── users/                  # 用户管理
│   ├── page.tsx            # 用户列表
│   ├── new/                # 新建用户
│   └── [id]/               # 编辑用户
└── settings/               # 系统设置
    └── page.tsx            # 设置页面
```

## API 路由 (`app/api/`)

API 路由处理数据请求和操作：

```plaintext
app/api/
├── admin/                  # 后台管理 API
│   ├── news/               # 新闻相关 API
│   │   ├── route.ts        # 新闻列表和创建
│   │   └── [id]/           # 单个新闻操作
│   ├── products/           # 产品相关 API
│   ├── resources/          # 资源相关 API
│   ├── showcases/          # 案例相关 API
│   ├── users/              # 用户相关 API
│   └── settings/           # 设置相关 API
├── uploadthing/            # 文件上传 API
└── ...                     # 其他 API
```

## 组件库 (`components/`)

组件库包含各种可复用的组件：

```plaintext
components/
├── admin/                  # 后台管理组件
│   ├── header.tsx          # 后台顶部导航
│   ├── sidebar.tsx         # 后台侧边栏
│   └── data-table.tsx      # 数据表格组件
├── editor/                 # 富文本编辑器组件
│   ├── tiptap.tsx          # TipTap 编辑器主组件
│   ├── toolbar.tsx         # 编辑器工具栏
│   ├── extensions.ts       # 编辑器扩展配置
│   └── styles.css          # 编辑器样式
├── forms/                  # 表单组件
│   ├── user-form.tsx       # 用户表单
│   └── ...                 # 其他表单组件
├── header.tsx              # 前台网站头部
├── footer.tsx              # 前台网站底部
├── language-switcher.tsx   # 语言切换器
├── theme-toggle.tsx        # 主题切换器
├── uploadthing.tsx         # 文件上传组件
└── ui/                     # UI 基础组件
    ├── button.tsx
    ├── card.tsx
    ├── form.tsx
    ├── input.tsx
    └── ...                 # 其他 UI 组件
```

## 工具库 (`lib/`)

工具库包含各种辅助函数和配置：

```plaintext
lib/
├── api-middlewares/        # API 中间件
│   └── with-validation.ts  # 验证中间件
├── db/                     # 数据库相关
│   ├── schema.prisma       # Prisma 数据库模型
│   └── index.ts            # 数据库客户端
├── i18n/                   # 国际化相关
│   ├── context.tsx         # 语言上下文
│   └── translations.ts     # 翻译文本
├── validations/            # 验证模式
│   ├── auth.ts             # 认证相关验证
│   ├── content.ts          # 内容相关验证
│   ├── settings.ts         # 设置相关验证
│   └── upload.ts           # 上传相关验证
├── auth.ts                 # 认证相关
├── uploadthing.ts          # 文件上传配置
└── utils.ts                # 通用工具函数
```

## 数据库模型

项目使用 Prisma ORM 和 PostgreSQL 数据库，主要模型包括：

```plaintext
// 用户模型
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String    @unique
  password      String
  role          Role      @default(EDITOR)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  news          News[]
  products      Product[]
  resources     Resource[]
  showcases     Showcase[]
}

// 角色枚举
enum Role {
  ADMIN
  EDITOR
}

// 新闻模型
model News {
  id          String   @id @default(cuid())
  title       Json     // 存储多语言标题 { zh: "中文标题", en: "English Title" }
  content     Json     // 存储多语言内容
  image       String?  // 图片URL
  category    String
  published   Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  author      User     @relation(fields: [authorId], references: [id])
  authorId    String
}

// 产品模型
model Product {
  id          String   @id @default(cuid())
  title       Json
  description Json
  image       String?
  category    String
  published   Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  author      User     @relation(fields: [authorId], references: [id])
  authorId    String
}

// 学习资源模型
model Resource {
  id          String   @id @default(cuid())
  title       Json
  content     Json
  type        String   // tutorial, guide, resource
  image       String?
  published   Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  author      User     @relation(fields: [authorId], references: [id])
  authorId    String
}

// 案例展示模型
model Showcase {
  id          String   @id @default(cuid())
  title       Json
  description Json
  image       String?
  category    String
  published   Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  author      User     @relation(fields: [authorId], references: [id])
  authorId    String
}
```

## 技术栈

项目使用了以下主要技术：

1. **前端框架**

1. Next.js 14 (App Router)
2. React 18
3. TypeScript



2. **UI 和样式**

1. Tailwind CSS
2. shadcn/ui 组件库
3. Framer Motion (动画)
4. Lucide React (图标)



3. **状态管理和表单**

1. React Context API
2. React Hook Form
3. Zod (验证)



4. **后端和数据**

1. Next.js API Routes
2. Prisma ORM
3. PostgreSQL
4. NextAuth.js (认证)



5. **富文本编辑**

1. TipTap 编辑器
2. 自定义扩展



6. **文件上传**

1. UploadThing



7. **国际化**

1. 自定义 i18n 实现
2. 多语言内容管理





## 功能模块

### 1. 认证系统

认证系统使用 NextAuth.js 实现，支持：

- 基于凭证的登录
- 角色权限控制 (管理员/编辑)
- 会话管理
- 安全密码存储


### 2. 内容管理

内容管理系统支持多种内容类型：

- 新闻文章
- 产品和服务
- 学习资源
- 案例展示


每种内容类型都支持：

- 多语言内容 (中文/英文)
- 富文本编辑
- 图片上传
- 分类管理
- 发布状态控制


### 3. 用户管理

用户管理功能包括：

- 用户列表查看
- 创建新用户
- 编辑用户信息
- 角色分配
- 密码管理


### 4. 系统设置

系统设置功能包括：

- 网站基本信息设置
- 联系方式设置
- 多语言设置


### 5. 前台展示

前台网站包括：

- 响应式设计
- 多语言支持
- 暗色/亮色模式
- 动画效果
- 联系表单


## 数据流程

1. **前台数据流**

1. 用户访问前台页面
2. Next.js 服务器组件获取数据
3. 数据通过 props 传递给客户端组件
4. 客户端组件渲染 UI



2. **后台数据流**

1. 管理员登录后台
2. 客户端组件通过 API 请求数据
3. 表单提交数据到 API 端点
4. API 端点验证数据并更新数据库
5. UI 更新以反映变化



3. **文件上传流程**

1. 用户选择文件
2. UploadThing 组件处理上传
3. 文件存储在云端
4. 文件 URL 保存到数据库





## 安全措施

项目实现了多层安全措施：

1. **认证和授权**

1. 基于 JWT 的会话管理
2. 角色权限控制
3. 路由保护



2. **数据验证**

1. 使用 Zod 进行严格的数据验证
2. API 中间件验证
3. 表单验证



3. **安全存储**

1. 密码哈希存储
2. 敏感信息保护



4. **CSRF 保护**

1. 表单 CSRF 保护
2. API 请求验证





## 扩展性

项目设计考虑了扩展性：

1. **模块化结构**

1. 组件可复用
2. 功能模块化



2. **API 抽象**

1. 统一的 API 处理模式
2. 中间件支持



3. **验证抽象**

1. 可复用的验证模式
2. 自定义验证规则



4. **UI 组件系统**

1. 基于 shadcn/ui 的组件库
2. 主题定制支持





这个项目结构提供了一个完整的现代网站系统，包含前台展示和后台管理功能，支持多语言，使用最新的 Next.js 技术栈构建。它适合中小型企业网站、内容管理系统或作为更大项目的起点。

todo???


### 前端部分 (Client-Side)

前端代码主要包括：
1. **页面组件** 

```plaintext
app/
├── page.tsx          # 首页
├── contact/page.tsx  # 联系页面
├── news/page.tsx     # 新闻页面
├── products/page.tsx # 产品页面
├── learning/page.tsx # 学习中心页面
└── showcase/page.tsx # 成果展示页面
```

2. **共享组件** 
```plaintext
components/
├── header.tsx           # 页头导航
├── footer.tsx           # 页脚
├── language-switcher.tsx # 语言切换器
├── theme-toggle.tsx      # 主题切换器
└── ui/                  # UI组件库
```

3. **前端工具和配置**
```plaintext
lib/
├── i18n/               # 国际化支持
│   ├── context.tsx     # 语言上下文
│   └── translations.ts  # 翻译文件
└── utils.ts            # 通用工具函数
```

### 后端部分 (Server-Side)
后端代码主要包括：
1. **服务器端动作** 
```plaintext
app/
└── actions.ts          # 服务器端动作处理
```

- 处理表单提交
- 处理API请求
- 数据库操作（如果有）


2. **API路由** 
```plaintext
app/api/               # API路由（如果需要可以添加）
└── route.ts          # API端点定义
```

3. **服务器端组件** 
- Next.js的页面默认是服务器端组件
- 使用 'use client' 指令的组件是客户端组件


### 关键技术特性

1. **前端技术栈** 
- Next.js 14+ (React框架)
- Tailwind CSS (样式)
- shadcn/ui (UI组件库)
- Framer Motion (动画)
- next-themes (主题支持)


2. **后端技术栈** 
- Next.js Server Actions (服务器端动作)
- Next.js API Routes (API路由)
- 可扩展的数据库集成


3. **性能优化** 
- 服务器端渲染 (SSR)
- 图片优化
- 代码分割
- 客户端路由


4. **国际化支持** 
- 使用React Context进行语言状态管理
- 支持多语言切换
- 本地化存储


5. **主题支持** 
- 亮色/暗色主题
- 系统主题检测
- 主题持久化


### 部署说明
该项目可以部署到Vercel平台 ，它会自动处理：

- 构建优化
- CDN分发
- SSL证书
- 持续部署
- 环境变量管理


### 扩展建议

1. **后端扩展**
- 添加数据库连接（如MongoDB、PostgreSQL）
- 实现用户认证
- 添加更多API端点


2. **前端扩展**
- 添加更多交互功能
- 实现更多动画效果
- 添加更多页面组件


3. **性能优化**
- 实现增量静态再生成（ISR）
- 添加缓存策略
- 优化资源加载

# 规划后台管理系统
让我规划一个后台管理系统：
1. 需要添加的功能：
- 管理员认证系统（登录、注册、权限管理）
- 内容管理（新闻、产品、学习资源、案例展示）
- 用户管理（管理员账户管理）
- 文件上传管理（图片等媒体文件）
- 多语言内容管理


2. 技术选择：
- 数据库：Prisma + PostgreSQL（可靠且支持关系型数据）
- 认证：NextAuth.js（现在改名为Auth.js）
- 文件存储：Vercel Blob（用于存储上传的图片等文件）
- 表单处理：react-hook-form + zod（表单验证和处理）
- UI组件：继续使用shadcn/ui保持一致性


3. 数据结构设计：
- 用户（管理员）表
- 内容表（新闻、产品等）
- 媒体文件表
- 权限表

## 后台管理系统的基础框架
包含了以下功能：
1. **数据库设计**
- 使用Prisma作为ORM
- 设计了用户、新闻、产品、资源、案例等数据模型
- 支持多语言内容存储

2. **认证系统**
- 使用NextAuth.js实现认证
- 支持邮箱密码登录
- 角色权限控制（管理员和编辑）

3. **后台界面**
- 响应式布局
- 侧边栏导航
- 数据表格展示
- 分页和搜索功能
**添加更多功能页面**
- 新建/编辑新闻页面
- 新建/编辑产品页面
- 新建/编辑学习资源页面
- 新建/编辑案例展示页面
- 用户管理页面
- 系统设置页面

4. **内容管理**
- 新闻管理
- 产品管理
- 学习资源管理
- 案例展示管理

5. **添加文件上传功能**
- 集成Vercel Blob存储
- 图片上传组件
- 图片预览和裁剪

6. **添加富文本编辑器**
- 集成TipTap或其他编辑器
- 支持图片插入
- 支持多语言内容编辑

7. **添加数据验证**
- 使用Zod进行表单验证
- API请求验证
- 错误处理

8. **添加更多功能**
- 内容版本控制
- 定时发布
- 数据导入导出
- 操作日志
- 数据备份

让我们开始实现这个后台管理系统。
首先，我们需要设置数据库和认证系统：
![alt text](image.png)