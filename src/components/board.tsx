import styled from 'styled-components';
import { Claymorphism } from '../designs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import { selectStyle } from '../features/style';
// import { useAppSelector } from '../hooks';

export const Board = () => {
  // const _ = useAppSelector(selectStyle);
  const clay = new Claymorphism();
  return (
    <Content>
      <div id="base">
        <span>standard</span>
        <Card></Card>
      </div>
      <FontAwesomeIcon icon={faArrowRight} size="6x"/>
      <div id="styled">
        <span>{clay.name}</span>
        <Card props={clay.style}></Card>
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

const Card = styled.div<{ props?: string }>`
  background-color: white;
  width: 400px;
  height: 400px;
  border-radius: 32px;
  padding: 16px;
  ${(props) => props.props}
  > p {
    font-size: 16px;
  }
`;
