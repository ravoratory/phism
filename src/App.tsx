import styled from 'styled-components';

import { Board } from './components/board';

const App = () => {
  return (
    <Content>
      <header>
        Phism
      </header>
      <main>
        <Board />
      </main>
      <footer>
        <small>© 2022 Ravoratory</small>
      </footer>
    </Content>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  background: linear-gradient(180deg, #A2C8F4 0%, #FFFFFF 100%);
  > header {
    min-height: 4rem;
    text-align: left;
    padding: 30px;
    font-size: 50px;
  }
  > main {
    display: flex;
    height: 100%;
    flex-direction: row;
  }
  > footer {
    min-height: 2rem;
    text-justify: center;
  }
`;

export default App;
