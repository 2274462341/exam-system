export default {
    state: {
        authorMsg: ''
    },
    mutations: {
        showUsers (state, msg) {
            state.authorMsg = msg
        }
    },
    actions: {
        getShowUser ({commit}) {
            // Axios.get('/api/user/userInfo').then(res => {
            //     let authorMsg = res.data.data.identity_text;
            commit('showUsers', 1);
            //     let routers = filterAuthor(mainRouters, authorMsg);
            //     dispatch('Author/saveAuthor', routers, {root: true})
            //     Router.addRoutes(routers)
            //     localStorage.setItem('authorMsg', authorMsg);
            // })
        }
    }
}
