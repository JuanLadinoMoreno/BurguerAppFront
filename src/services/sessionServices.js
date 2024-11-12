import axios from "./axios";

export const onRegister = async (user) => axios.post(`/users/register`, user);

export const onLogin = async (user) => axios.post(`/users/login`, user);

export const onLogout = async (user) => axios.post(`/users/logout`, user);

// export const onVerifyToken = async () => axios.get(`/verify`);

export async function onVerifyToken(){
    try {
        return await axios.get('/users/verify');
        
    } catch (error) {
        console.log('url verify not found');
    }
}


// export async function onLogin(user){
//     try{
//         console.log('ffffffffffffff', user);
//         await axios({
//             // url: 'http://localhost:8080/api/session/login',
//             url: '/login',
//             method: 'POST',
//             data: user,
//             // withCredentials: true
        
//         })
//         // console.log('true');
//         return true
//     }catch(e){
//         // console.log('false');
//         console.log('Erroro al conextarse al servidor', e);
//         return false
//     }
// }



// export async function onRegister(user){
//     try{
//         // console.log('ffffffffffffff', user);
//         await axios({
//             // url: 'http://localhost:8080/api/session/register',
//             url: '/register',
//             method: 'POST',
//             data: user,
//             // withCredentials: true
//         })
//         console.log('true axios register');
//         console.log('user axios register', user);
//         // return ({
//         //     email: user.email
//         // })
        
//     }catch(e){
//         // console.log('false');
//         console.log('Erroro al conextarse al servidor', e);
        
//     }
// }



