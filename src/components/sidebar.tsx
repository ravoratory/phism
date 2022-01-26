import styled from 'styled-components';
import { selectColor, setColor } from '../features/color';
import { useAppDispatch, useAppSelector } from '../hooks';

export const Sidebar = () => {
  const color = useAppSelector(selectColor);
  const dispatch = useAppDispatch();
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    dispatch(setColor(e.target.value));
  };
  return (
    <Content>
      <label>Current Color is {color}</label>
      <Selector name="design" id="choose-design"
        onChange={onChange}
        color={color}>
        <option value="black" selected>Black</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
      </Selector>
    </Content>);
};

const Content = styled.div`
  background-color: lightgray;
  height: 100%;
  width: 400px;
  align-items: center;
  border-right: thin double black;
`;

const Selector = styled.select<{ color: string }>`
  color: ${(props) => props.color};
  width: 80%;
`;
