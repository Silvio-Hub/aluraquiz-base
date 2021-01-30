import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget/index'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import QuizLogo from '../src/components/QuizLogo'


const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;
// const BackgroundImage = styled.div`
// background-image: url(${db.bg});
// flex: 1;
// background-size: cover;
// background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;


export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Primeira aula imersão react alura!</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Estou participando *-*</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
          <h1>Primeira aula imersão alura!</h1>
          
          <p>Partiu aprender?</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/silvio-hub" />
    </QuizBackground>
  )
}
