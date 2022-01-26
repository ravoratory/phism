import styled from 'styled-components';

import { Sidebar } from './components/sidebar';
import { Board } from './components/board';

const App = () => {
  return (
    <Content>
      <header>
        <big>Phism</big>
      </header>
      <main>
        <Sidebar />
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
  > header {
    min-height: 4rem;
    background-color: #333;
    color: whitesmoke;
  }
  > main {
    display: flex;
    height: 100%;
    flex-direction: row;
  }
  > footer {
    min-height: 2rem;
    text-justify: center;
    background-color: lightsteelblue;
  }
`;

export default App;
