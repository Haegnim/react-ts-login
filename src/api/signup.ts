import axios from 'axios';
import { Cookies } from 'react-cookie';
interface loginType {
    userName: string;
    password: string;
    userID: string;
    id: string;
}

// 모든 todos를 가져오는 api
const getUserSignupData = async () => {
    const response = await axios.get(`http://localhost:3001/signup`);
    return response.data;
};

const signupUser = async (signupData: loginType) => {
    console.log(signupData);
    await axios.post(`http://localhost:3001/signup`, signupData);
};

const cookies = new Cookies();

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

export { getUserSignupData, signupUser };
