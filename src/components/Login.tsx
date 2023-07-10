import React, { useRef, useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import Input from './common/Input';
import Button from './common/Button';
import Form from './common/Form';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { loginUser } from '../api/signup';
import { useQueryClient, useMutation } from 'react-query';

interface loginType {
    password: string;
    id: string;
}

export const Login: React.FC = () => {
    const navigate = useNavigate();
    const [userID, setUserID] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const mutation = useMutation(loginUser, {
        onSuccess: () => {
            alert('로그인에 성공하였습니다.');
        },
    });
    const noneID = useRef<boolean>(false);
    const nonePW = useRef<boolean>(false);

    // const { data } = useQuery('signup', getUserSignupData);

    const userNameOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUserID(e.target.value);
    };
    const passwordOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const logindata: loginType = {
            password: password,
            id: userID,
        };
        mutation.mutateAsync(logindata);
        // if (userID === '' || password === '') {
        //     return alert('아이디와 비번을 입력해주세요');
        // } else {
        //     noneUserCheck();
        //     nonePWCheck();
        // }

        // if (noneID.current && nonePW.current) {
        //     noneID.current = false;
        //     nonePW.current = false;
        //     alert('로그인에 성공하였습니다');
        //     navigate('/');
        // } else if (noneID.current || nonePW.current) {
        //     noneID.current = false;
        //     nonePW.current = false;
        //     return alert('아이디와 비밀번호를 확인하세요.');
        // } else {
        //     return alert('존재하지 않는 회원입니다.');
        // }
    };

    // const noneUserCheck = () => {
    //     const userIDSearch = data.find((user: loginType) => user.userID === userID);
    //     if (userIDSearch) {
    //         noneID.current = true;
    //     }
    // };
    // const nonePWCheck = () => {
    //     const userPasswordSearch = data.find((user: loginType) => user.password === password);
    //     if (userPasswordSearch) {
    //         nonePW.current = true;
    //     }
    // };

    return (
        <LoginBox>
            <h2>Login</h2>
            <Form onSubmitHandler={onSubmitHandler}>
                <Input
                    label="User ID"
                    type="text"
                    value={userID}
                    OnChangeHandler={userNameOnChangeHandler}
                />
                <Input
                    label="Password"
                    type="password"
                    value={password}
                    OnChangeHandler={passwordOnChangeHandler}
                />
                <Button>버튼</Button>
            </Form>
            <Link to="/signup">회원가입이 아직이신가요?</Link>
        </LoginBox>
    );
};

const LoginBox = styled.div`
    width: 400px;
    /* height: 600px; */
    padding: 20px;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    /* margin: auto; */
    h2 {
        color: #fff;
        padding: 20px;
    }
`;
