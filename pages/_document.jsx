import { Html, Main, Head, NextScript } from 'next/document'
import Footer from './Footer'
import Header from './Header'
import Link from 'next/link'
export default function Document() {
    const headdata = [
        {
            description: 'Persional home page of EliasChen',
        },
    ]
    return (
        <Html>
            <Head>
                <meta name="theme-color" content="#da532c"></meta>
                <link
                    href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                ></link>
                <meta name="description" content="Persional home page of EliasChen" />
                {/* meta:og */}
                <meta property="og:image" content="../public/eliaschen.jpg" />
                <meta property="og:type" content="blog" />
                <meta property="og:url" content="https://www.eliaschen.dev" />
                <meta property="og:title" content="EliasChen/Home" />
                <meta property="og:description" content="Persional home page of EliasChen" />
            </Head>
            <body className="dark:bg-[#111111] bg-[#f9fafb] dark:text-white duration-75">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
