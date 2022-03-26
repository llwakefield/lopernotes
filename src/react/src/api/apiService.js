import axios from 'axios';

const get = async () => {
    const { data } = await axios.get('/api/listnotes');
    return data;
}

const create = async (noteText) => {
    const { data } = await axios.post('/api/createnote', { noteText });
    return data;
}

const apiService = {
    get, create,
}

export default apiService;
