import { createStore, Store, useStore as useVuexStore } from 'vuex'
import login from './login/login'
import { IRootState, IStoreType } from './types'

const store = createStore<IRootState>({
  state() {
    return {

    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    login,
  }
})

// 初始化store
export function setupStore() {
  store.dispatch('login/loadLoaclLogin')
}

// 自己的useStore
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
