import styled from 'styled-components';
import { selectColor } from '../features/color';
import { useAppSelector } from '../hooks';

export const Board = () => {
  const color = useAppSelector(selectColor);
  return (
    <Content color={color}>
      <p>Phism board is now developing!!</p>
    </Content>
  );
};

const Content = styled.div<{color: string}>`
  background-color: antiquewhite;
  color: ${(props) => props.color};
  height: 100%;
  width: 100%;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
`;
