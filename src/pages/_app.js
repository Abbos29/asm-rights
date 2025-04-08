import Header from "@/components/layout/Header/Header";

import "@/styles/vars.scss";
import "@/styles/reset.css";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
