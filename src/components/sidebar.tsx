import styled from 'styled-components';
import { Claymorphism } from '../designs/claymorphism';
import { setStyle } from '../features/style';
import { useAppDispatch } from '../hooks';

export const Sidebar = () => {
  // const color = useAppSelector(selectColor);
  // const style = useAppSelector(selectStyle);
  const clay = new Claymorphism();
  const dispatch = useAppDispatch();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    clay.setCustomProps({ 'background-color': e.target.value });
    dispatch(setStyle(clay.styleAsString));
  };
  const onClickReset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    clay.resetProps();
    dispatch(setStyle(clay.styleAsString));
  };
  const changeColor = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };
  dispatch(setStyle(clay.styleAsString));
  return (
    <Content>
      <div>
        <label>Board Theme Color:</label>
        <input type="color" onChange={onChange} />
      </div>
      <button type="button" onClick={changeColor}>Change Theme Color</button>
      <button type="button" onClick={onClickReset}>
        Reset Phism Customize
      </button>
    </Content>);
};

const Content = styled.div`
  background-color: lightgray;
  height: 100%;
  width: 400px;
  align-items: center;
  border-right: thin double black;
  display: flex;
  flex-direction: column;
`;
