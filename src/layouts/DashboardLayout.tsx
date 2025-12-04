import { Navigate, Outlet, useLocation } from "react-router-dom"

import { AdminLayout } from "@/components/layout/admin-layout"
import { AuthProvider } from "@/providers/auth-provider"
import { KeepAliveProvider } from "@/providers/keep-alive-provider"
import { PermissionProvider } from "@/providers/permission-provider"
import { WebSocketProvider } from "@/providers/websocket-provider"
import { useAuthStore } from "@/stores/auth-store"

// 公开路由列表
const publicRoutes = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/terms",
  "/privacy",
]

export function DashboardLayout() {
  const location = useLocation()
  const { isAuthenticated, isLoading } = useAuthStore()

  const isPublicRoute = publicRoutes.some((route) =>
    location.pathname.startsWith(route)
  )

  // 未登录用户访问受保护页面时重定向到登录页
  if (!isAuthenticated && !isPublicRoute && !isLoading) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return (
    <AuthProvider>
      <PermissionProvider>
        <WebSocketProvider>
          <KeepAliveProvider>
            <AdminLayout>
              <Outlet />
            </AdminLayout>
          </KeepAliveProvider>
        </WebSocketProvider>
      </PermissionProvider>
    </AuthProvider>
  )
}

export default DashboardLayout
