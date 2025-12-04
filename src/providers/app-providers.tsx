import * as React from "react"
import { HelmetProvider } from "react-helmet-async"

import { MockProvider } from "@/components/mock-provider"
import { CookieConsent } from "@/components/ui/cookie-consent"
import { ErrorProvider } from "@/providers/error-provider"
import { QueryProvider } from "@/providers/query-provider"
import { ThemeProvider } from "@/providers/theme-provider"

interface AppProvidersProps {
  children: React.ReactNode
}

/**
 * 应用级 Provider 组合（纯 React + Vite 版本）
 *
 * Provider 层级说明（从外到内）：
 * 1. HelmetProvider - 文档 head 管理（替代 Next.js metadata）
 * 2. ThemeProvider - 主题管理，最外层以确保所有组件可访问主题
 * 3. MockProvider - Mock 数据拦截，在实际请求之前处理
 * 4. QueryProvider - React Query 客户端，管理所有数据请求
 * 5. ErrorProvider - 错误收集与展示
 *
 * 注意：AuthProvider、PermissionProvider、WebSocketProvider、KeepAliveProvider
 * 需要依赖 React Router 的 context，因此在路由层（布局组件）中使用
 */
export function AppProviders({ children }: AppProvidersProps) {
  return (
    <HelmetProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <MockProvider>
          <QueryProvider>
            <ErrorProvider>
              {children}
            </ErrorProvider>
          </QueryProvider>
        </MockProvider>
        <CookieConsent />
      </ThemeProvider>
    </HelmetProvider>
  )
}

/**
 * 创建 Provider 组合的辅助函数
 * 用于动态组合多个 Provider
 */
export function composeProviders(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  providers: Array<[React.ComponentType<any>, Record<string, unknown>]>
): React.FC<{ children: React.ReactNode }> {
  return function ComposedProvider({ children }) {
    return providers.reduceRight(
      (acc, [Provider, props]) => <Provider {...props}>{acc}</Provider>,
      children
    ) as React.ReactElement
  }
}
