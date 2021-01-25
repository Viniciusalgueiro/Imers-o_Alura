import Head from 'next/head'


function IndexPage() {
    return (
      <div>
        <Head>
          <title>Quiz CSS da Alura</title>
          <meta property="og:title" content="Quiz CSS da Alura" key="title" />
          <meta name="description" content="construir um quiz para brincar com os amigos feito em Next.js  " />

        </Head>
        <Head>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://myquiz.vercel.app/"/>
        <meta property="og:title" content="Quiz CSS da Alura"/>
        <meta property="og:description" content=""/>
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>
        </Head>

      </div>
    )
  }
  
  export default IndexPage;