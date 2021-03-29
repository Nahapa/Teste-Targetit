import { createStore } from "vuex"

// import auth from './modules/auth/auth'
import form from './modules/forms/form'
import user from './modules/users/user'

const store = createStore({
    modules: {
        // auth,
        form,
        user
    }
})

export default store