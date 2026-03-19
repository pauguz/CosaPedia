import axios from 'axios';
const baseUrl = import.meta.env.VITE_BASE_URL;


export const pageService={
    perUser: async (userId) => {
        console.log('iniciando busqueda de paginas del user')
        const { data } = await axios.get(`${baseUrl}/page/user/${userId}`);
        return data;
    },
}