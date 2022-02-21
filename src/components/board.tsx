import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from '../hooks';
import { selectColor } from '../features/color';
import { selectDesign } from '../features/design';

export const Board = () => {
  const color = useAppSelector(selectColor);
  const design = useAppSelector(selectDesign);
  return (
    <Content>
      <div id="base">
        <span>standard</span>
        <Card color={color}></Card>
      </div>
      <FontAwesomeIcon icon={faArrowRight} size="6x"/>
      <div id="styled">
        <span>{design?.name ?? 'standard'}</span>
        <Card props={design?.style ?? ''} color={color}></Card>
      </div>
    </Content>
  );
};

const Content = styled.div`
  height: 100%;
  width: 100%;
  font-size: 30px;
  justify-content: center;
  display: flex;
  flex-direction: row;
  grid-gap: 40px;
  align-items: center;
  justify-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  transition: color 0.5s ease-in-out;
  & > div {
    display: flex;
    flex-direction: column;
    grid-gap: 30px;
  }
`;

const Card = styled.div<{ props?: string, color?: string }>`
  background-color: ${(props) => props.color ?? 'white'};
  width: 400px;
  height: 400px;
  border-radius: 32px;
  padding: 16px;
  ${(props) => props.props}
  > p {
    font-size: 16px;
  }
`;
