import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/App.css'
import Layout from './components/Layouts/Layout'
import { publicRoutes } from './routes/publicRoutes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [...publicRoutes],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
