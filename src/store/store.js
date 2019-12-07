import Vuex from 'vuex';
import axios from 'axios';
import Vue from 'vue';
Vue.use(Vuex);
const store = {
 state: {
 authenticated: false
 },
 mutations:{
 auth_success(state, { token }) {
 state.token = token;
 },
 logout(state) {
 state.token = '';
 },
 },
 actions: {
 login({ commit }, user) {
 console.log('chegou qui');
 console.log(user.login);
 console.log(user.senha);
 axios.post('http://localhost:3000/login', { login: user.login, // /app/user/  login/router
senha: user.senha})
 .then(resp => {
 const token = resp.data.token;
 console.log(token)
 })
 .catch(err => {
 localStorage.removeItem('token');
 reject(err);
 });
 },

 logout({ commit }) {
 console.log("Deslogando usuário")
 console.log("Token dele vai ser excluído")
 /* return new Promise(resolve => {
 commit('logout');
 localStorage.removeItem('token');
 delete axios.defaults.headers.Authorization;
 resolve();
 }); */
 },

 },
 getters:{
 isLoggedIn: state => !!state.token,
 }
};
export default new Vuex.Store(store);