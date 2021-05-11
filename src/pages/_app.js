import { Layout } from "@/components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100vh;
          background-color: #f5f5f5;
        }
      `}</style>
    </Layout>
  );
}

export default MyApp;
