import './App.css'
// import * as reset from './reset.css'
// import { Global } from '@emotion/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Routes } from './router/routes'

// Create a client
const queryClient = new QueryClient()

function App() {
    return (
        // Provide the client to your App
        <QueryClientProvider client={queryClient}>
            {/* <Global styles={reset} /> */}
            <Routes />
        </QueryClientProvider>
    )
}

export default App
