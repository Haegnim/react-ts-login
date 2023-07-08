import React from 'react';
import { useQuery } from 'react-query';
import { getUserSignupData } from '../api/signup';

import { Link } from 'react-router-dom';

interface SignUpType {
    userName: string;
    password: string;
    userID: string;
    id: number;
}

const Home = () => {
    const { isLoading, isError, data } = useQuery('signup', getUserSignupData);
    console.log(data);
    if (isLoading) {
        return <p>로딩중입니다....!</p>;
    }
    if (isError) {
        return <p>오류가 발생하였습니다...!</p>;
    }
    return (
        <div>
            <h2>HOME Page</h2>
            {data.map((user: SignUpType, idx: number) => {
                return (
                    <div key={idx}>
                        <span>{user.userName}</span>
                        <span>{user.password}</span>
                        <span>{user.userID}</span>
                    </div>
                );
            })}
            <Link to="/login">Go Login</Link>
        </div>
    );
};

export default Home;
