import styled from 'styled-components';
import { selectStyle } from '../features/style';
import { useAppSelector } from '../hooks';

export const Board = () => {
  const style = useAppSelector(selectStyle);

  return (
    <Content>
      <p>Phism board is now developing!!</p>
      <Card props={style}>
        {style.split(';').map((prop, index) => (<p key={index}>{prop}</p>))}
      </Card>
    </Content>
  );
};

const Content = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  transition: color 0.5s ease-in-out;
`;

const Card = styled.div<{ props?: string }>`
  background-color: white;
  width: 400px;
  height: 300px;
  ${(props) => props.props}
`;
