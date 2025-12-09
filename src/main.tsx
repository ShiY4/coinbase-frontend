import { createRoot } from 'react-dom/client'
import './index.css'
import { RootLayout } from '@/layouts'

createRoot(document.getElementById('root')!).render(
  <>
    <RootLayout/>
  </>
)
