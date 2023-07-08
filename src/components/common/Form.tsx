// import React, { ReactNode } from 'react';
import styled from 'styled-components';
import React, { FormEvent } from 'react';

import { ReactNode } from 'react';

type PropsType = {
    children: ReactNode;
    onSubmitHandler: (e: FormEvent<HTMLFormElement>) => void;
};

const Form: React.FC<PropsType> = ({ children, onSubmitHandler }) => {
    return <FormStyled onSubmit={onSubmitHandler}>{children}</FormStyled>;
};
const FormStyled = styled.form`
    width: 100%;
    height: 100%;
    margin: 20px 0;
    /* background-color: aqua; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export default Form;
