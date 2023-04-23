import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <div>
      {/* <Header /> */}
      Header
      <div>
        {/* <Sidebar /> */}
        <Outlet />
      </div>
    </div>
  )
}
