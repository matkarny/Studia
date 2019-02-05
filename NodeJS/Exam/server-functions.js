const axios = require('axios');

const axiosOptions = {
    headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'axios/0.18.0',
    }
};

async function createNote(note) {
    const response = await axios.post('http://api.quuu.linuxpl.eu/todo/icfebtck', note, axiosOptions);
    return response.data;
}

async function getNote() {
    try {
        const response = await axios.get(`http://api.quuu.linuxpl.eu/todo/icfebtck`, axiosOptions);
        return response.data;
    } catch (error) {
        return []
    }
}


module.exports = {
    createNote,
    getNote,
};
