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
        <meta property="og:image" content="https://media.istockphoto.com/photos/glass-with-whiskey-on-wooden-table-and-black-background-copy-space-picture-id1213740620?k=6&m=1213740620&s=170667a&w=0&h=GhRyfLC6hjD1P-rZ2hqi19rmiSg1kAIiy26sNuBHX_0="/>
        </Head>

      </div>
    )
  }
  
  export default IndexPage