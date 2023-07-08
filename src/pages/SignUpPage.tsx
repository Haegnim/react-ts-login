import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import Form from '../components/common/Form';
import { Link } from 'react-router-dom';
import { signupUser } from '../api/signup';
import { getUserSignupData } from '../api/signup';
import { useQuery } from 'react-query';
import { useQueryClient, useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

interface loginType {
    userName: string;
    password: string;
    userID: string;
    id: string;
}

//[ ]아이디 중복 체크
//[ ]비밀번호 조건 체크
//[ ]유저 네임
//[ ]약관 동의

const JoinPage = () => {
    const uuid: string = uuidv4();
    const navigate = useNavigate();
    const mutation = useMutation(signupUser, {
        onSuccess: () => {
            alert('회원가입에 성공하였습니다.');
            // queryClient.invalidateQueries('signup');
            // navigate('/');
        },
    });

    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [userID, setUserID] = useState<string>('');
    const [noneDuplicate, setNoneDuplicate] = useState<boolean>(false);

    const { data } = useQuery('signup', getUserSignupData);

    const userNameOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };
    const passwordOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const userIDOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUserID(e.target.value);
    };

    //회원가입 기능
    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (userName === '' || password === '' || userID === '') {
            return alert('빈칸을 전부 입력해주세요');
        }
        if (noneDuplicate) {
            const signupData: loginType = {
                userName,
                password,
                userID,
                id: uuid,
            };
            mutation.mutateAsync(signupData);
        } else {
            return alert('아이디 인증을 해주세요');
        }
    };

    //아이디 비교 기능
    const onClickIDHandler = (e: FormEvent<HTMLFormElement>) => {
        const userIDSearch = data.find((user: loginType) => user.userID === userID);

        e.preventDefault();
        if (userID === '') {
            return alert('사용하실 아이디를 입력해주세요');
        } else if (userIDSearch) {
            alert('이미 존재하는 아이디입니다');
            setUserID('');
        } else {
            alert('사용가능한 아이디입니다.');
            setNoneDuplicate(!noneDuplicate);
        }
    };

    return (
        <LoginBox>
            {' '}
            <h2>Sign up</h2>
            <Form onSubmitHandler={onSubmitHandler}>
                {/* <div> */}
                <div className="id-check">
                    <Input
                        label="user Id"
                        type="text"
                        value={userID}
                        OnChangeHandler={userIDOnChangeHandler}
                    />
                    <Button onClickHandler={onClickIDHandler}>인증 요청</Button>
                </div>
                {/* </div> */}

                <Input
                    label="password"
                    type="password"
                    value={password}
                    OnChangeHandler={passwordOnChangeHandler}
                />

                <Input
                    label="user name"
                    type="text"
                    value={userName}
                    OnChangeHandler={userNameOnChangeHandler}
                />

                <Button>버튼</Button>
            </Form>
            <Link to="/login">회원가입을 하셨나요?</Link>
        </LoginBox>
    );
};
const LoginBox = styled.div`
    width: 400px;
    /* height: 600px; */
    padding: 20px;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 15px 25px rgba(0, 0, 255, 0.6);
    border-radius: 10px;
    /* margin: auto; */
    h2 {
        color: #fff;
        padding: 20px;
    }
    .id-check {
        width: 90%;
        display: flex;
        justify-content: space-between;
        gap: 15px;
    }
`;
export default JoinPage;
