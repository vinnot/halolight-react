
import { useLocation } from "react-router-dom"
import * as React from "react"

import { getRouteTdk } from "@/config/tdk"
import { useTdk } from "@/hooks/use-tdk"

export function TdkManager() {
  const location = useLocation(); const pathname = location.pathname
  const tdkEntry = React.useMemo(() => getRouteTdk(pathname), [pathname])
  useTdk(tdkEntry)
  return null
}
