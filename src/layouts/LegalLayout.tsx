import { Outlet } from "react-router-dom"

import { LegalLayoutContent } from "@/components/layout/legal-layout-content"

export function LegalLayout() {
  return (
    <LegalLayoutContent>
      <Outlet />
    </LegalLayoutContent>
  )
}

export default LegalLayout
