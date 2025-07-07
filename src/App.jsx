import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import { useThemeStore } from './store/ThemeStore'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';
import { MyRouter } from './router/router';

function App() {

  const {theme} = useThemeStore();
  document.documentElement.classList.toggle("dark", theme === "dark");

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
        <MyRouter />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
