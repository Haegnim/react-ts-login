import React from 'react';
import './App.css';
import styled from 'styled-components';
import Router from 'shared/Router';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <AppStyled className="App">
                <Router />
            </AppStyled>
        </QueryClientProvider>
    );
};
const AppStyled = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(#141e30, #243b55);
`;
export default App;
