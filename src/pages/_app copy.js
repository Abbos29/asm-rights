import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

import "@/styles/vars.scss";
import "@/styles/reset.css";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
        staleTime: 5 * 60 * 1000, // данные считаются свежими в течение 5 минут
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </QueryClientProvider>
  );
}