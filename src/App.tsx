import styled from 'styled-components';

import { Board } from './components/board';
import { Config } from './components/config';
import { selectColor } from './features/color';
import { useAppSelector } from './hooks';

const App = () => {
  const color = useAppSelector(selectColor);
  return (
    <Content color={color}>
      <header>
        Phism
      </header>
      <main>
        <Config />
        <Board />
      </main>
      <footer>
        <small>© 2022 Ravoratory</small>
      </footer>
    </Content>
  );
};

const Content = styled.div<{color: string}>`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  background-color: ${(props) => props.color};
  > header {
    min-height: 4rem;
    text-align: left;
    padding: 30px;
    font-size: 50px;
  }
  > main {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
  > footer {
    min-height: 2rem;
    text-justify: center;
  }
`;

export default App;
