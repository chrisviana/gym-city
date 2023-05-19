import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layout/default'
import { SearchStudent } from './page/SearchStudent'
import { Login } from './page/Login'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/app" element={<DefaultLayout />}>
        <Route path="/app/searchstudent" element={<SearchStudent />} />
      </Route>
    </Routes>
  )
}
