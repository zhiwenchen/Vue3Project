import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        user:{}
      }
    },
    mutations: {
      set_user_info(state,user) {
        state.user = user
      }
    }
  })

  export default store