import React from 'react';
import styled from 'styled-components';
import { selectColor, setColor } from '../features/color';
import { useAppDispatch, useAppSelector } from '../hooks';

export const Config = () => {
  const color = useAppSelector(selectColor);
  const dispatch = useAppDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(setColor(e.target.value));
  };

  return (
    <Main>
      <input type="color" onChange={onChange} id="picker" value={color}/>
      <label htmlFor="picker">{color.toUpperCase()}</label>
    </Main>
  );
};

const Main = styled.div`
  width: 180px;
  padding: 12px;
  background-color: white;
  display: flex;
  justify-items: center;
  align-items: center;
  grid-gap: 30px;
  border-radius: 12px;
`;
