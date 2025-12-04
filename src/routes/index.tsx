import type { ReactNode } from "react"
import { lazy, Suspense } from "react"
import {
  createBrowserRouter,
  type RouteObject,
} from "react-router-dom"

import { AuthLayout } from "@/layouts/AuthLayout"
import { DashboardLayout } from "@/layouts/DashboardLayout"
import { LegalLayout } from "@/layouts/LegalLayout"

// 懒加载页面组件
const LoginPage = lazy(() => import("@/pages/auth/login"))
const RegisterPage = lazy(() => import("@/pages/auth/register"))
const ForgotPasswordPage = lazy(() => import("@/pages/auth/forgot-password"))
const ResetPasswordPage = lazy(() => import("@/pages/auth/reset-password"))

const DashboardPage = lazy(() => import("@/pages/dashboard/home"))
const AnalyticsPage = lazy(() => import("@/pages/dashboard/analytics"))
const UsersPage = lazy(() => import("@/pages/dashboard/users"))
const AccountsPage = lazy(() => import("@/pages/dashboard/accounts"))
const CalendarPage = lazy(() => import("@/pages/dashboard/calendar"))
const MessagesPage = lazy(() => import("@/pages/dashboard/messages"))
const NotificationsPage = lazy(() => import("@/pages/dashboard/notifications"))
const FilesPage = lazy(() => import("@/pages/dashboard/files"))
const DocumentsPage = lazy(() => import("@/pages/dashboard/documents"))
const DocsPage = lazy(() => import("@/pages/dashboard/docs"))
const ProfilePage = lazy(() => import("@/pages/dashboard/profile"))
const SettingsPage = lazy(() => import("@/pages/dashboard/settings"))
const TeamsPage = lazy(() => import("@/pages/dashboard/settings/teams"))
const RolesPage = lazy(() => import("@/pages/dashboard/settings/teams/roles"))

const TermsPage = lazy(() => import("@/pages/legal/terms"))
const PrivacyPage = lazy(() => import("@/pages/legal/privacy"))

const NotFoundPage = lazy(() => import("@/pages/not-found"))

// 加载中组件
function PageLoader() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </div>
  )
}

// 包装懒加载组件
function lazyLoad(Component: React.LazyExoticComponent<() => ReactNode>): ReactNode {
  return (
    <Suspense fallback={<PageLoader />}>
      <Component />
    </Suspense>
  )
}

const routes: RouteObject[] = [
  // 认证路由
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "login", element: lazyLoad(LoginPage) },
      { path: "register", element: lazyLoad(RegisterPage) },
      { path: "forgot-password", element: lazyLoad(ForgotPasswordPage) },
      { path: "reset-password", element: lazyLoad(ResetPasswordPage) },
    ],
  },
  // 仪表盘路由
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: lazyLoad(DashboardPage) },
      { path: "analytics", element: lazyLoad(AnalyticsPage) },
      { path: "users", element: lazyLoad(UsersPage) },
      { path: "accounts", element: lazyLoad(AccountsPage) },
      { path: "calendar", element: lazyLoad(CalendarPage) },
      { path: "messages", element: lazyLoad(MessagesPage) },
      { path: "notifications", element: lazyLoad(NotificationsPage) },
      { path: "files", element: lazyLoad(FilesPage) },
      { path: "documents", element: lazyLoad(DocumentsPage) },
      { path: "docs", element: lazyLoad(DocsPage) },
      { path: "profile", element: lazyLoad(ProfilePage) },
      {
        path: "settings",
        children: [
          { index: true, element: lazyLoad(SettingsPage) },
          {
            path: "teams",
            children: [
              { index: true, element: lazyLoad(TeamsPage) },
              { path: "roles", element: lazyLoad(RolesPage) },
            ],
          },
        ],
      },
    ],
  },
  // 法律条款路由
  {
    path: "/",
    element: <LegalLayout />,
    children: [
      { path: "terms", element: lazyLoad(TermsPage) },
      { path: "privacy", element: lazyLoad(PrivacyPage) },
    ],
  },
  // 404
  { path: "*", element: lazyLoad(NotFoundPage) },
]

export const router = createBrowserRouter(routes)

export default routes
