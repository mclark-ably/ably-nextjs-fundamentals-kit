import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Layout.module.css'

type LayoutProps = {
  children: React.ReactNode,
  pageTitle?: string,
  metaDescription: string,
  showHomeLink?: boolean,
}

export default function Layout({ children, pageTitle, metaDescription, showHomeLink = true }: LayoutProps) {
  const headTitle = (pageTitle? `${pageTitle} - ` : '') + 'Ably and Next.js starter kit'
  return (
    <div className={styles.container}>
      <Head>
        <title>{headTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="icon" href="https://static.ably.dev/motif-red.svg?ably-nextjs-starter-kit" type="image/svg+xml" />
      </Head>
      <main className={styles.main}>

        <h1 className={styles.title}>
          <a href="https://ably.com/?utm_source=github&utm_medium=github-repo&utm_campaign=GLB-2211-ably-nextjs-starter-kit&utm_content=ably-nextjs-starter-kit&src=GLB-2211-ably-nextjs-starter-kit-github-repo">Ably</a> &amp; <a href="https://nextjs.org">Next.js</a> fundamentals
        </h1>
        { showHomeLink && <Link href="/">&larr; Home</Link> }

        {pageTitle && <h2>{pageTitle}</h2>}

        {children}
      </main>
      <footer className={styles.footer}>
        Powered by{' '}
        <span className={styles.logo}>
          <a
            href="https://ably.com/?utm_source=github&utm_medium=github-repo&utm_campaign=GLB-2211-ably-nextjs-starter-kit&utm_content=ably-nextjs-starter-kit&src=GLB-2211-ably-nextjs-starter-kit-github-repo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="https://static.ably.dev/logo-h-mono-black.svg?ably-nextjs-starter-kit" alt="Ably Logo" width={102} height={18} />
          </a>
        </span>
        &amp;
        <span className={styles.logo}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=ably-nextjs-starter-kit&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={16} />
          </a>
        </span>
      </footer>
    </div>
  )
}
