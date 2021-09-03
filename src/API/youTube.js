import axios from 'axios'

const KEY = 'AIzaSyAoaBzg52HFP0ug-7YFwinTq5Jlr7xI8QM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})