import axios from 'axios';

export const instance = axios.create({
  baseURL: `서버주소`,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json,',
  },
  withCredentials: true,
});

export const instances = {
  // ex)
  // getMainPage: async () => {
  //   const response = await instance.get('/main');
  //   return response.data;
  // },
};

// 여기서부터는 인터셉터를 다룹니다.

// api.interceptors.request.use(
//   config => {
//     return config
//   },
//   error =>{
//     console.log(error)
//     return Promise.reject(error)
//   }
// )

// api.interceptors.response.use(
//   response => {
//     const res = response.data
//     return res
//   },
//   error =>{
//     console.log(error)
//     return Promise.reject(error)
//   }
// )
