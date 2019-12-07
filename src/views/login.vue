<template>
    <div id="login">
        <h1>Login</h1>
        <input type="text" name="login" v-model="input.login" placeholder="Usuário" />
        <input type="password" name="senha" v-model="input.senha" placeholder="Senha" />
        <button type="button" v-on:click="login()">Logar</button> <!--a função de login é chamada quando o botão de submit é clicado-->
        <textarea name="errorMessage" v-bind:class="[visibilidadeTextArea ? 'd-block' : 'd-none']" v-model="input.Error"></textarea>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() { //esse trecho inicializa as variáveis que serão usadas nesse form
            return {
                input: {
                    login: "",
                    senha: ""
                },
                visibilidadeTextArea: false
            }
        },
        computed: {
            token(){
                return this.$store.state.token;
            }
        },
        methods: {
            async login() {

                //esse comando chama a action login dentro do código do store
                //se o usuário consegue logar
                console.log(this.input.login, this.input.senha)
                await this.$store.dispatch('login', {login:this.input.login, senha:this.input.senha})
                
                //
                if( this.$store.state.authenticated  ){
                    this.$router.push({ name: "secure" });
                    console.log('teste', this.$store.state.token);
                }
                else{
                    this.input.login = "";
                    this.input.senha = "";
                    this.visibilidadeTextArea = true;
                    this.input.Error = "Autenticação falhou"
                }
            }
        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
    .d-block {
        display: block;
    }
    .d-none {
        display: none;
    }
</style>