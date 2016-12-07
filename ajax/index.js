import 'isomorphic-fetch';

export default function getData(callback) {
    const url = `/api/data`;

    return fetch(url)
        .then(resp => {
            if (resp.status === 200) {
                return resp.json();
            } else {
                return Promise.reject(resp.statusText);
            }
        }).then(json => {
            try {
                callback(json);
            } catch (e) {
                return Promise.reject(e);
            }
        });
}
