import axios from 'axios';

export default function (endpoint, payload) {
    let url = endpoint;

    const options = {
        method: 'POST',
        url: url,
        data: payload,
        responseType: 'json',
    };
    return axios(options);
}
