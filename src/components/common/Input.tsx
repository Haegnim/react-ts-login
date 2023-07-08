import React, { ChangeEvent } from 'react';
import { styled, css } from 'styled-components';

const InputBox = styled.div`
    width: 90%;
    margin: 0 0 20px;
    /* background-color: #fefefe; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
`;

const Label = styled.label<{ focus: string }>`
    color: #fff;
    position: absolute;
    top: 0;
    transform: ${(props) => props.focus || `translate(0px, 20px)`};
    transition: all 0.3s ease-in-out;
    ${({ focus }) => {
        if (focus) {
            return css`
                color: #03e9f4;
            `;
        }
    }}
`;

const InputStyled = styled.input`
    width: 100%;
    height: 40px;
    padding: 10px 10px;
    margin: 10px 0;
    background: transparent;
    border: none;
    outline: none;
    border-bottom: 1px solid #fff;
    color: #fff;
    &:is(:focus, :hover) {
    }
    &:is(:focus, :hover) + ${Label} {
        transform: translate(-3px, -17px) scale(0.9);
        color: #03e9f4;
    }
`;

interface LabelType {
    label: string;
    type: string;
    value: string;
    OnChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<LabelType> = ({ label, type, value, OnChangeHandler }) => {
    return (
        <InputBox>
            <InputStyled type={type} value={value} onChange={OnChangeHandler}></InputStyled>
            <Label focus={value && `translate(-3px, -17px) scale(0.9)`}>{label}</Label>
        </InputBox>
    );
};

export default Input;
