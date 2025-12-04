import { Suspense, lazy } from "react"

import { Skeleton } from "@/components/ui/skeleton"

// 懒加载 Dashboard 组件
const ConfigurableDashboard = lazy(() =>
  import("@/components/dashboard").then((mod) => ({ default: mod.ConfigurableDashboard }))
)

function DashboardSkeleton() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="h-32 rounded-xl" />
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Skeleton className="h-80 rounded-xl" />
        <Skeleton className="h-80 rounded-xl" />
      </div>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">仪表盘</h1>
      </div>
      <Suspense fallback={<DashboardSkeleton />}>
        <ConfigurableDashboard />
      </Suspense>
    </div>
  )
}
