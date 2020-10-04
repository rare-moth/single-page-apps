import Head from 'next/head'
import '../App.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>TODO Example</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}



export default MyApp