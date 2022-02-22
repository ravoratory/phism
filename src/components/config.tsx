import React from 'react';
import styled from 'styled-components';
import { selectColor, setColor } from '../features/color';
import { designs, setDesign } from '../features/design';
import { useAppDispatch, useAppSelector } from '../hooks';

export const Config = () => {
  const color = useAppSelector(selectColor);
  const dispatch = useAppDispatch();

  const onChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(setColor(e.target.value));
  };

  const onChangeDesign = (e: React.MouseEvent<HTMLInputElement>) => {
    dispatch(setDesign(e.currentTarget.value));
  };

  const radioButtons = Object.entries(designs).map(([name, design], idx) =>
    (<label key={`style-${idx}`}><input type="radio"
      name='design' value={name} onClick={onChangeDesign}/>{name}
    </label>));
  return (
    <Wrapper>
      <DesignList>
        <form><fieldset>
          {radioButtons}
        </fieldset></form>
      </DesignList>
      <Color>
        <div>
          <input type="color" onChange={onChangeColor}
            id="picker" value={color} />
          <label htmlFor="picker">{color.toUpperCase()}</label>
        </div>
      </Color>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DesignList = styled.div`
  font-size: 12px;
  display: flex;
  & fieldset {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }
`;

const Color = styled.div`
  width: 180px;
  height: 40px;
  padding: 12px;
  background-color: white;
  display: flex;
  justify-items: center;
  align-items: center;
  grid-gap: 30px;
  border-radius: 12px;
`;
