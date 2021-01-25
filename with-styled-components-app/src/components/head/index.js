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
        <meta property="og:image" content="https://i2.wp.com/css-tricks.com/wp-content/uploads/2017/06/css-is-awesome-scaled.jpg?resize=1536%2C1208&ssl=1"/>
        </Head>

      </div>
    )
  }
  
  export default IndexPage