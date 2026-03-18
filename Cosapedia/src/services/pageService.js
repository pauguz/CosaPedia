import axios from axios;

export const pageService={
    perUser: async (userId) => {
        const { data } = await axios.post(`${baseUrl}api/page/user`, userId);
        return data;
    },
}