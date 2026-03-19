import axios from 'axios';
const baseUrl = import.meta.env.VITE_BASE_URL;


export const authService={
    login: async (userData) => {
        console.log('iniciando intento de login')
        const { data } = await axios.post(`${baseUrl}/user/login`, userData);
        console.log(data)
        return data;
    },
}