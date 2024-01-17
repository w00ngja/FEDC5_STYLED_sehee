import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { lightTheme, darkTheme } from '@/Styles/Theme';
import GlobalStyle from '@/Styles/Global';
import RouteManager from '@/Routes/Router';
import Header from './Components/Common/Header';
import { useDarkModeStore } from './Stores';
import DarkMode from './Components/DarkMode';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 2 },
  },
});

const App = () => {
  const { isDarkMode } = useDarkModeStore();
  const { pathname } = useLocation();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Header
          activeHeader={pathname !== '/login' && pathname !== '/signUp'}
        />
        <RouteManager />
        <DarkMode />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;