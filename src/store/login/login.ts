import { Module } from "vuex";
import { ILoginState } from './types'
import { IRootState } from '../types'
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {

    }
  },
  mutations: {

  },
  actions: {

  }
}

export default loginModule