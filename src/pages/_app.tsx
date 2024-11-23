import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import DashboardLayout from '@/components/layout/DashboardLayout';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  const isStudentRoute = router.pathname.startsWith('/student');
  const isTeacherRoute = router.pathname.startsWith('/teacher');
  const needsDashboardLayout = isStudentRoute || isTeacherRoute;

  return (
    <QueryClientProvider client={queryClient}>
      {needsDashboardLayout ? (
        <DashboardLayout role={isStudentRoute ? 'student' : 'teacher'}>
          <Component {...pageProps} />
        </DashboardLayout>
      ) : (
        <Component {...pageProps} />
      )}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}