import axios from 'axios';
import { Cookies } from 'react-cookie';
interface loginType {
    password: string;
    id: string;
}

// 모든 todos를 가져오는 api
const getUserSignupData = async () => {
    const response = await axios.get(`http://3.38.191.164/`);
    return response.data;
};

const signupUser = async (signupData: loginType) => {
    console.log(signupData);
    try {
        const response = await axios.post('/register', signupData);
        return response.data;
    } catch (error) {
        console.error('Error while sending data to the server:', error);
    }
};

const loginUser = async (loginData: loginType) => {
    console.log(loginData);
    try {
        const response = await axios.post('/login', loginData);
        const token = response.data.token;
        console.log(token);
        return token;
    } catch (error) {
        console.error('Error while sending data to the server:', error);
    }
};

// const cookies = new Cookies();

// const handleLogin = async () => {
//   const response = await axios.post(`http://localhost:3001/signup`,{
//     id,password,
//   },{withCredentials:true});
//   if(response.status === 200){
//     console.log("인증완료")
//   }
// }

// const getData = async()=>{
//   const accessToken = cookies.get("accessToken");
//   const response = await axios.post(`http://localhost:3001/signup`,{
//     headers:{
//       "content-Type":"application/json",
//       Authorization:`Bearer ${accessToken}`
//     }
// })
// setData(response.data.data)
// }

export { getUserSignupData, signupUser, loginUser };
