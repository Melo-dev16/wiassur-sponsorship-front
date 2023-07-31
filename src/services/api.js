import axios from 'axios'

axios.interceptors.request.use(function (config) {
    return config
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (config) {
    return config
}, function (error) {

    return Promise.reject(error);
})

function createGetRoute(baseRoute, params) {
    Object.keys(params).forEach((key, index) => {
        if (index > 0) {
            baseRoute += "&"
        }
        else {
            baseRoute += "?"
        }

        baseRoute += (key + "=" + params[key])
    })

    return baseRoute
}

export function post(endpoint, data, headers = {}) {
    if (endpoint[0] !== '/') {
        endpoint += '/' + endpoint
    }

    return axios.post(environment.apiURL + endpoint, data, {
        headers: headers
    });
}

export function get(endpoint, data = {}, headers = {}) {
    if (endpoint[0] !== '/') {
        endpoint += '/' + endpoint
    }

    let route = createGetRoute(environment.apiURL + endpoint, data);

    return axios.get(route, {
        headers: headers
    });
}

export function remove(endpoint, headers = {}) {
    if (endpoint[0] !== '/') {
        endpoint += '/' + endpoint
    }

    return axios.delete(environment.apiURL + endpoint, {
        headers: headers
    });
}

export function put(endpoint, data, headers = {}) {
    if (endpoint[0] !== '/') {
        endpoint += '/' + endpoint
    }

    return axios.put(environment.apiURL + endpoint, data, {
        headers: headers
    });
}

export function patch(endpoint, data, headers = {}) {
    if (endpoint[0] !== '/') {
        endpoint += '/' + endpoint
    }

    return axios.patch(environment.apiURL + endpoint, data, {
        headers: headers
    });
}
