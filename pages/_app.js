import "@/styles/globals.css";
import Layout from "./layout";

export default function App({ Component, pageProps }) {
  return (
  
    <layout>
      <Component {...pageProps} />
    </layout>
  );
}
