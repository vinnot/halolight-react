import { Navigate, Outlet } from "react-router-dom"

import { useAuthStore } from "@/stores/auth-store"

export function AuthLayout() {
  const { isAuthenticated } = useAuthStore()

  // 已登录用户访问认证页面时重定向到首页
  if (isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}

export default AuthLayout
