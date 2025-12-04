# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是 HaloLight 后台管理系统的 **React 版本**，基于 React 19 + Vite 6 + TypeScript 构建，使用 Tailwind CSS 4、Zustand、React Query 和 shadcn/ui。

### 技术栈特点

| 特性 | 技术选型 | 说明 |
|------|----------|------|
| 框架 | React 19 | 使用最新的 React 19 特性 |
| 构建工具 | Vite 6 | 快速的开发服务器和构建 |
| 路由 | React Router 6 | 客户端路由 |
| 状态管理 | Zustand 5 | 轻量级状态管理 |
| 数据获取 | React Query 5 | 服务端状态管理 |
| 样式 | Tailwind CSS 4 | 实用优先的 CSS 框架 |
| UI 组件 | shadcn/ui | 基于 Radix UI 的组件库 |
| 表单 | React Hook Form + Zod | 类型安全的表单验证 |
| 动画 | Framer Motion | 流畅的动画效果 |
| 测试 | Vitest + Testing Library | 单元测试和组件测试 |

## 前置要求

- **Node.js**: >= 18.0.0
- **pnpm**: >= 8.0.0
- **Git**: 最新版本

## 常用命令

```bash
pnpm dev          # 启动开发服务器 (http://localhost:5173)
pnpm build        # 生产构建
pnpm preview      # 本地预览构建产物
pnpm lint         # ESLint 检查
pnpm lint:fix     # ESLint 自动修复
pnpm type-check   # TypeScript 类型检查
pnpm test         # 运行单元测试 (watch 模式)
pnpm test:ui      # 运行测试 UI
pnpm test:run     # 运行单元测试 (单次)
pnpm test:coverage # 运行测试并生成覆盖率报告
```

## 项目结构

```
halolight-react/
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions CI 配置
├── public/                     # 静态资源
│   ├── favicon.ico
│   ├── logo-*.svg
│   ├── _headers                # 安全头配置
│   └── sw.js                   # Service Worker (PWA)
├── src/
│   ├── actions/                # Server Actions / API 调用
│   ├── assets/                 # 图片、字体等资源
│   ├── components/             # React 组件
│   │   ├── ui/                 # shadcn/ui 组件
│   │   ├── layout/             # 布局组件
│   │   └── dashboard/          # Dashboard 组件
│   ├── config/                 # 配置文件
│   │   ├── routes.ts           # 路由配置
│   │   └── tdk.ts              # SEO TDK 配置
│   ├── hooks/                  # 自定义 Hooks
│   ├── layouts/                # 页面布局
│   ├── lib/                    # 工具库和辅助函数
│   │   ├── api/                # API 客户端
│   │   ├── auth/               # 认证逻辑
│   │   └── utils/              # 通用工具
│   ├── mock/                   # Mock 数据
│   ├── pages/                  # 页面组件
│   │   ├── auth/               # 认证页面
│   │   ├── dashboard/          # Dashboard 页面
│   │   └── legal/              # 法律条款页面
│   ├── providers/              # Context Providers
│   ├── routes/                 # 路由定义
│   ├── stores/                 # Zustand 状态管理
│   ├── styles/                 # 全局样式
│   ├── test/                   # 测试工具和配置
│   ├── types/                  # TypeScript 类型定义
│   ├── App.tsx                 # 应用根组件
│   └── main.tsx                # 应用入口
├── .env.development            # 开发环境变量
├── .env.example                # 环境变量示例
├── CLAUDE.md                   # 本文件
├── README.md                   # 项目说明
├── eslint.config.js            # ESLint 配置
├── index.html                  # HTML 模板
├── package.json                # 项目依赖
├── postcss.config.mjs          # PostCSS 配置
├── tsconfig.json               # TypeScript 配置
├── vite.config.ts              # Vite 配置
└── vitest.config.ts            # Vitest 配置
```

## 环境变量

### 开发环境 (.env.development)

```bash
# API 配置
VITE_API_URL=/api
VITE_MOCK=true                  # 启用 Mock 数据

# 应用配置
VITE_APP_TITLE=HaloLight
VITE_BRAND_NAME=HaloLight

# 功能开关
VITE_ENABLE_PWA=false
VITE_ENABLE_ANALYTICS=false
```

### 生产环境

生产环境变量通过构建时注入或服务器环境变量设置。

## 开发规范

### 代码风格

- 使用 **TypeScript** 严格模式
- 遵循 **ESLint** 规则，保持代码一致性
- 使用 **Prettier** 自动格式化（通过 ESLint 集成）
- 组件使用 **函数式组件** + Hooks
- 优先使用 **命名导出** 而非默认导出

### 组件开发

```tsx
// ✅ 推荐：函数式组件 + TypeScript
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ variant = 'primary', children, onClick }: ButtonProps) {
  return (
    <button
      className={cn('btn', variant === 'primary' && 'btn-primary')}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// ❌ 避免：默认导出
export default Button;
```

### 状态管理

- **本地状态**: 使用 `useState`、`useReducer`
- **全局状态**: 使用 **Zustand** (stores/)
- **服务端状态**: 使用 **React Query** (hooks/)
- **表单状态**: 使用 **React Hook Form**

```tsx
// Zustand Store 示例
import { create } from 'zustand';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (credentials: Credentials) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (credentials) => {
    const user = await authApi.login(credentials);
    set({ user, isAuthenticated: true });
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
}));
```

### API 调用

使用 React Query 进行数据获取：

```tsx
// hooks/use-users.ts
import { useQuery } from '@tanstack/react-query';
import { usersApi } from '@/lib/api';

export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: usersApi.getAll,
  });
}

// 在组件中使用
function UsersPage() {
  const { data: users, isLoading, error } = useUsers();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>{/* 渲染用户列表 */}</div>;
}
```

### 路由配置

```tsx
// routes/index.tsx
import { createBrowserRouter } from 'react-router-dom';
import { DashboardLayout } from '@/layouts/dashboard-layout';
import { HomePage } from '@/pages/dashboard/home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // 更多路由...
    ],
  },
]);
```

### 样式规范

使用 Tailwind CSS 实用类：

```tsx
// ✅ 推荐：使用 cn() 合并类名
import { cn } from '@/lib/utils';

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border bg-card text-card-foreground shadow-sm',
        className
      )}
      {...props}
    />
  );
}

// ✅ 响应式设计
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* 内容 */}
</div>
```

### 测试规范

- 为关键组件编写 **单元测试**
- 测试文件命名: `*.test.ts` 或 `*.spec.ts`
- 测试覆盖率目标: **70%**

```tsx
// components/ui/button.test.tsx
import { render, screen } from '@/test/test-utils';
import { Button } from './button';

describe('Button', () => {
  it('renders with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click me</Button>);

    await userEvent.click(screen.getByText('Click me'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
```

## Git 工作流

### 分支策略

- `main`: 主分支，保护分支，仅通过 PR 合并
- `develop`: 开发分支，日常开发在此分支
- `feature/*`: 功能分支，从 `develop` 创建
- `fix/*`: 修复分支，从 `develop` 或 `main` 创建
- `hotfix/*`: 紧急修复，从 `main` 创建

### Commit 规范

遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```bash
# 格式
<type>(<scope>): <subject>

# 示例
feat(auth): add login page
fix(dashboard): resolve chart rendering issue
docs(readme): update installation instructions
style(button): adjust padding and colors
refactor(api): simplify error handling
test(auth): add login form tests
chore(deps): upgrade react to v19
```

**Type 类型**:
- `feat`: 新功能
- `fix`: 修复 Bug
- `docs`: 文档更新
- `style`: 代码格式调整（不影响功能）
- `refactor`: 代码重构
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建、依赖等

### Pull Request 流程

1. 从 `develop` 创建功能分支
2. 开发并提交代码
3. 确保通过所有测试和检查：
   - `pnpm lint` (无错误)
   - `pnpm type-check` (无错误)
   - `pnpm test:run` (全部通过)
   - `pnpm build` (构建成功)
4. 创建 PR，填写描述和变更内容
5. 等待 CI 通过和代码审查
6. 合并到 `develop`

## Mock 数据

项目使用 **Mock.js** 和 **fetch 拦截** 实现本地开发的 Mock 数据。

### 启用/禁用 Mock

```bash
# .env.development
VITE_MOCK=true   # 启用 Mock
VITE_MOCK=false  # 禁用 Mock，使用真实 API
```

### Mock 数据定义

```tsx
// mock/users.ts
import Mock from 'mockjs';

export const usersData = Mock.mock({
  'users|10-20': [
    {
      'id|+1': 1,
      name: '@cname',
      email: '@email',
      'role|1': ['admin', 'user', 'editor'],
      createdAt: '@datetime',
    },
  ],
}).users;
```

## 性能优化

### 代码分割

使用 React.lazy 和 Suspense 进行路由级代码分割：

```tsx
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('@/pages/dashboard/home'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HomePage />
    </Suspense>
  );
}
```

### 图片优化

- 使用 WebP 格式
- 实现懒加载
- 设置合适的尺寸

```tsx
<img
  src="/images/logo.webp"
  alt="Logo"
  loading="lazy"
  width={200}
  height={50}
/>
```

## 部署

### 构建

```bash
pnpm build
```

构建产物位于 `dist/` 目录。

### 部署平台

- **Vercel** (推荐)
- **Netlify**
- **Cloudflare Pages**
- **自托管** (Nginx / Docker)

### 部署配置

```bash
# Vercel
vercel --prod

# Netlify
netlify deploy --prod

# Docker
docker build -t halolight-react .
docker run -p 3000:3000 halolight-react
```

## 常见问题

### 1. 端口冲突

如果 5173 端口被占用，可以修改 `vite.config.ts`：

```ts
export default defineConfig({
  server: {
    port: 3000,
  },
});
```

### 2. 类型错误

运行类型检查并修复：

```bash
pnpm type-check
```

### 3. 构建失败

清理缓存后重新构建：

```bash
rm -rf node_modules dist
pnpm install
pnpm build
```

## 相关链接

- 📚 **文档**: https://halolight.docs.h7ml.cn/
- 🌐 **在线预览**: https://halolight-react.h7ml.cn
- 📦 **GitHub**: https://github.com/halolight/halolight-react
- 🐛 **问题反馈**: https://github.com/halolight/halolight-react/issues

## 架构对比

### 与 Next.js 版本的差异

| 特性 | Next.js 版 | React 版 |
|------|-----------|----------|
| 框架 | Next.js 15 | React 19 + Vite 6 |
| 渲染模式 | SSR/SSG | CSR (Client-Side Rendering) |
| 路由 | App Router (服务端) | React Router (客户端) |
| API | Server Actions / Route Handlers | 独立后端 API |
| 部署 | Vercel / 自托管 | 静态托管 / CDN |
| SEO | 原生支持 | 需要额外配置 (react-helmet) |

## 新增功能开发指南

### 1. 添加新页面

```bash
# 1. 创建页面组件
src/pages/dashboard/my-page.tsx

# 2. 添加路由
src/routes/index.tsx

# 3. 更新导航
src/config/routes.ts
```

### 2. 添加新的 UI 组件

```bash
# 使用 shadcn/ui CLI
pnpm dlx shadcn@latest add <component-name>

# 手动创建
src/components/ui/my-component.tsx
```

### 3. 添加新的 API 端点

```bash
# 1. 定义 API 方法
src/lib/api/services/my-service.ts

# 2. 创建 Hook
src/hooks/use-my-data.ts

# 3. 添加 Mock 数据（可选）
src/mock/my-data.ts
```

## 升级指南

### React 19 新特性

本项目已升级到 React 19，可以使用以下新特性：

- **use() Hook**: 在渲染中读取 Promise/Context
- **Server Actions**: 表单直接调用服务端函数（需要后端支持）
- **useFormStatus**: 表单状态管理
- **useOptimistic**: 乐观更新

### 从 React 18 迁移

如果从 React 18 升级，需要注意：

1. 更新依赖：
```bash
pnpm update react@19 react-dom@19 @types/react@19 @types/react-dom@19
```

2. 检查第三方库兼容性：
- react-router-dom: ✅ 兼容
- framer-motion: ✅ 兼容
- react-query: ✅ 兼容
- react-hook-form: ✅ 兼容

3. 测试关键功能确保无破坏性变更

## 贡献指南

欢迎贡献！请遵循以下步骤：

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'feat: add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

## 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件
