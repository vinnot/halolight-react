import { RouterProvider } from "react-router-dom"

import { GoogleAnalytics } from "@/components/google-analytics"
import { AppProviders } from "@/providers/app-providers"
import { router } from "@/routes"

export default function App() {
  return (
    <AppProviders>
      <GoogleAnalytics />
      <RouterProvider router={router} />
    </AppProviders>
  )
}
