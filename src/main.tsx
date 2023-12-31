
import ReactDOM from 'react-dom/client'
import { router } from './App'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import AuthProvider from "./contexts/AuthContext"

ReactDOM.createRoot(document.getElementById('root')!).render(
  
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  
)
