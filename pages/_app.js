import "@/styles/globals.css";
import Head from "next/head";
export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Todo App</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}
