import Head from 'next/head'
import IndexLanding from '../components/LandingPage/IndexLanding'
import Navbar from '../components/Navbar/Navbar'


export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Head>
        <title>Next-Forum</title>
        <meta name="description" content="Discussion forum on XYZ topics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-full">
          <div className="w-full h-10">
            {/* top landing page navbar */}
            <Navbar>
              
            </Navbar>
          </div>
          <div className="w-full h-auto">
            {/* landing page home or signin&signup */}
            <IndexLanding/>
          </div>
          <div className="footer w-full h-7">

          </div>
      </div>
     
    </div>
  )
}
