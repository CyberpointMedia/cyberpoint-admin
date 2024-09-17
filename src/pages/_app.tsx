import type { AppProps } from 'next/app'
import "@/styles/globals.css";
import Sidebar from '../components/Sidebar';
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}