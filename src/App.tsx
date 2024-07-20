import './App.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Routes } from './router/routes'


// Create a client
const queryClient = new QueryClient()

function App() {
    return (
        // Provide the client to your App
        <QueryClientProvider client={queryClient}>
        <Routes />
        </QueryClientProvider>
    )
}

export default App
