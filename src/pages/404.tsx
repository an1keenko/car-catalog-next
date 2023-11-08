import { NextPage } from 'next'
import Image from 'next/image'
import Layout from '@/components/layout/Layout'
import Head from 'next/head'

const NotFound: NextPage = () => {
  return (
    <Layout title="404">
      <Head>Not Found</Head>
      <div style={{ margin: '0 auto' }}>
        <Image priority src="/404.png" alt="Error 404" width={700} height={400} />
      </div>
    </Layout>
  )
}

export default NotFound
