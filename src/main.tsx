import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import  {SocketProvider} from "./context/SocketContext.tsx"
import { ErrorBoundary } from './components/ErrorBoundary.tsx'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
    <ErrorBoundary>
    <SocketProvider>
    <App />
    </SocketProvider>
    </ErrorBoundary>

    </StrictMode>
)
