import axios from 'axios';

const get = async () => {
    const { data } = await axios.get('/api/listnotes');
    return data;
}

const create = async (noteText) => {
    const config = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(noteText),
    }
    const { data } = await axios.post('/api/createnote', config);
    return data;
}

const apiService = {
    get, create,
}

export default apiService;
