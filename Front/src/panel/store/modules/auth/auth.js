import axios from 'axios'

import { TOKEN_NAME } from '@/panel/configs/api'

export default {
    state: {
        authenticated: false,
    },

    mutations: {
        SET_AUTHENTICATED(state, status) {
            state.authenticated = status
        },
        LOGOUT(state) {
            state.authenticated = false
        }
    },

    actions: {
        login({ commit }, params) {
            return axios.post('login', params)
                .then(response => {

                })
        }
    }
}