# HaloLight React

[![CI](https://github.com/halolight/halolight-react/workflows/CI/badge.svg)](https://github.com/halolight/halolight-react/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.x-61dafb)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646cff)](https://vitejs.dev/)

基于 **React 19 + Vite 6 + TypeScript** 的现代化中文后台管理系统。

## ✨ 特性

- 🚀 **React 19** - 使用最新的 React 19 特性和 Hooks
- ⚡️ **Vite 6** - 极速的开发服务器和构建工具
- 🎨 **Tailwind CSS 4** - 实用优先的 CSS 框架
- 🧩 **shadcn/ui** - 高质量的 UI 组件库 (基于 Radix UI)
- 📦 **Zustand** - 轻量级状态管理
- 🔄 **React Query** - 强大的服务端状态管理
- 📝 **TypeScript** - 类型安全的开发体验
- 🎭 **Framer Motion** - 流畅的动画效果
- 🧪 **Vitest** - 快速的单元测试框架
- 🔐 **权限管理** - 完整的 RBAC 权限系统
- 🌙 **暗黑模式** - 内置主题切换功能
- 📱 **响应式设计** - 完美适配移动端
- 🌐 **国际化** - 支持中英文切换
- 🎯 **Mock 数据** - 本地开发无需后端

## 📦 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | React 19 + TypeScript 5 |
| 构建工具 | Vite 6 |
| 路由 | React Router 6 |
| 状态管理 | Zustand 5 + React Query 5 |
| UI 组件 | shadcn/ui + Radix UI |
| 样式 | Tailwind CSS 4 |
| 表单 | React Hook Form + Zod |
| 动画 | Framer Motion |
| 图表 | Recharts |
| 测试 | Vitest + Testing Library |
| 代码规范 | ESLint + TypeScript ESLint |

## 🚀 快速开始

### 前置要求

- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0

### 安装

```bash
# 克隆项目
git clone https://github.com/halolight/halolight-react.git
cd halolight-react

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

访问 http://localhost:5173 查看应用。

### 环境变量

复制 `.env.example` 到 `.env.development`：

```bash
cp .env.example .env.development
```

编辑 `.env.development`：

```bash
# API 配置
VITE_API_URL=/api
VITE_MOCK=true                  # 启用 Mock 数据

# 应用配置
VITE_APP_TITLE=HaloLight
VITE_BRAND_NAME=HaloLight
```

## 📜 可用脚本

```bash
# 开发
pnpm dev          # 启动开发服务器
pnpm preview      # 预览生产构建

# 构建
pnpm build        # 生产构建
pnpm type-check   # TypeScript 类型检查

# 代码质量
pnpm lint         # ESLint 检查
pnpm lint:fix     # ESLint 自动修复

# 测试
pnpm test         # 运行测试 (watch 模式)
pnpm test:ui      # 测试 UI 界面
pnpm test:run     # 运行测试 (单次)
pnpm test:coverage # 测试覆盖率报告
```

## 📁 项目结构

```
halolight-react/
├── .github/              # GitHub Actions 配置
├── public/               # 静态资源
├── src/
│   ├── actions/          # API 调用
│   ├── components/       # React 组件
│   │   ├── ui/           # shadcn/ui 组件
│   │   ├── layout/       # 布局组件
│   │   └── dashboard/    # Dashboard 组件
│   ├── config/           # 配置文件
│   ├── hooks/            # 自定义 Hooks
│   ├── layouts/          # 页面布局
│   ├── lib/              # 工具库
│   ├── mock/             # Mock 数据
│   ├── pages/            # 页面组件
│   ├── providers/        # Context Providers
│   ├── routes/           # 路由配置
│   ├── stores/           # Zustand 状态管理
│   ├── test/             # 测试工具
│   └── types/            # TypeScript 类型
├── CLAUDE.md             # 开发指南
├── README.md             # 本文件
└── package.json          # 项目依赖
```

## 🎨 功能特性

### 认证系统

- ✅ 登录 / 注册
- ✅ 忘记密码 / 重置密码
- ✅ 记住我
- ✅ 多账号切换
- ✅ JWT Token 管理

### Dashboard

- ✅ 数据统计卡片
- ✅ 可配置的仪表盘
- ✅ 实时数据图表
- ✅ 拖拽布局调整
- ✅ 最近活动展示

### 用户管理

- ✅ 用户列表
- ✅ 用户详情
- ✅ 权限管理
- ✅ 角色分配

### 系统设置

- ✅ 个人资料编辑
- ✅ 密码修改
- ✅ 主题切换 (明亮/暗黑)
- ✅ 团队管理
- ✅ 角色权限配置

### 其他功能

- ✅ 文件管理
- ✅ 文档管理
- ✅ 消息中心
- ✅ 通知提醒
- ✅ 日历视图

## 🔐 权限系统

基于 **RBAC (Role-Based Access Control)** 实现：

```tsx
// 在组件中检查权限
import { usePermission } from '@/hooks/use-permission';

function UsersPage() {
  const { can } = usePermission();

  if (!can('users:read')) {
    return <div>无权限访问</div>;
  }

  return <div>用户列表</div>;
}
```

支持的权限操作：
- `read` - 查看
- `create` - 创建
- `update` - 更新
- `delete` - 删除

## 🌐 国际化

支持中英文切换：

```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  return <h1>{t('common.welcome')}</h1>;
}
```

## 🎨 主题定制

在 `src/styles/globals.css` 中定义主题变量：

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    /* ... 更多变量 */
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    /* ... 更多变量 */
  }
}
```

## 🧪 测试

编写测试用例：

```tsx
// button.test.tsx
import { render, screen } from '@/test/test-utils';
import { Button } from './button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

运行测试：

```bash
pnpm test:run
pnpm test:coverage
```

## 📈 性能优化

- ⚡️ 路由级代码分割
- 🖼️ 图片懒加载
- 📦 Tree Shaking
- 🗜️ 压缩优化
- 🔄 Service Worker (PWA)

## 🚢 部署

### Vercel (推荐)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/halolight/halolight-react)

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/halolight/halolight-react)

### 自托管

```bash
# 构建
pnpm build

# 使用 Nginx 部署 dist/ 目录
```

## 🤝 贡献

欢迎贡献代码！请查看 [CLAUDE.md](./CLAUDE.md) 了解开发指南。

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'feat: add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

## 📝 Commit 规范

遵循 [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: 新功能
fix: 修复 Bug
docs: 文档更新
style: 代码格式调整
refactor: 代码重构
perf: 性能优化
test: 测试相关
chore: 构建/依赖更新
```

## 🔗 相关链接

- 📚 **文档**: https://halolight.docs.h7ml.cn/
- 🌐 **在线预览**: https://halolight-react.h7ml.cn
- 📦 **GitHub**: https://github.com/halolight/halolight-react
- 🐛 **问题反馈**: https://github.com/halolight/halolight-react/issues

## 🌟 相关项目

- [halolight](https://github.com/halolight/halolight) - Next.js 14 版本
- [halolight-vue](https://github.com/halolight/halolight-vue) - Vue 3.5 版本
- [halolight-angular](https://github.com/halolight/halolight-angular) - Angular 21 版本
- [halolight-docs](https://github.com/halolight/docs) - 官方文档

## 📄 许可证

[MIT](./LICENSE) © [h7ml](https://github.com/h7ml)

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/h7ml">h7ml</a>
</p>
