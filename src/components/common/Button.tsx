import React from 'react';
import styled from 'styled-components';
import { ChildrenProps } from '../../model/children';

const ButtonStyled = styled.button`
    width: 130px;
    height: 40px;
    border: none;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.5);
    margin: 10px 0;
    color: #03e9f4;
    transition: all 0.2s ease-in-out;
    &:hover {
        background: rgba(0, 0, 0, 0.2);
        border: 1px solid #03e9f4;
    }
    &:active {
        background: #03e9f4;
    }
`;

const Button = ({ children, onClickHandler }: ChildrenProps) => {
    return <ButtonStyled onClick={onClickHandler}>{children}</ButtonStyled>;
};

export default Button;
