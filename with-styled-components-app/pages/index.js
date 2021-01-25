import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
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
      <p>Hello world!</p>
    </div>
  )
}

export default IndexPage

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Viniciusalgueiro" />
    </QuizBackground>
  );
}
