import Layout from "@/components/layout/Layout";
import { AuthProvider } from "@/config/context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    // </AuthProvider>
  );
}
