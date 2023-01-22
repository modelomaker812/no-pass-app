import Head from 'next/head'

type Props = {
  children: React.ReactNode
}

export const Layout = (props: Props) => (
  <>
    <Head>
      <title>No Pass App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {props.children}
  </>
)
