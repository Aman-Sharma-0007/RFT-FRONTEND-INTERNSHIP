import { Routes, Route, Navigate } from 'react-router-dom'
import ShoppingPage from './pages/ShoppingPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ShoppingPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}