<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Sobre</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
<br>
<br>
<br>
<br>
<v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>To Atôa</v-toolbar-title>
    </v-app-bar>

     <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"

            label="Nome"
            required
          ></v-text-field>
          <v-text-field
            v-model="rg"
            :rules="nameRules"
            :counter="12"
            label="RG"
            required
          ></v-text-field>
          <v-text-field
            v-model="cpf"
            :rules="nameRules"
            :counter="14"
            label="CPF/CNPJ"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="telefone"
            :rules="nameRules"
            :counter="14"
            label="Telefone"
            required
          ></v-text-field>
          <v-text-field
            v-model="altura"
            :rules="nameRules"
            :counter="4"
            label="Altura"
            required
          ></v-text-field>
          <v-text-field
            v-model="peso"
            :rules="nameRules"
            label="Peso"
            :counter="4"
            required
          ></v-text-field>
          <v-text-field
            v-model="data"
            :rules="data"
            :counter="0.0"
            label="Data Nascimento 00/00/0000"
            required
          ></v-text-field>
         <v-btn class="mr-4" @click="submit">submit</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'Home',
    props: {
      source: String,
    },
    data() { //esse trecho inicializa as variáveis que serão usadas nesse form
    return {
    input: {
    Nome: "",
      rg: "",
      cpf: "",
      telefone:"",
      altura:"",
      peso: "",
      data:"",
    }
    }
    },
    data: () => ({
      drawer: null,
       valid: false,
      firstname: '',
      lastname: '',
      rg: '',
      cpf: '',
      telefone:'',
      altura:'',
      peso: '',
      data:'',
      nameRules: [
        v => !!v || 'Este campo is required',
        v => v.length <= 70 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
    methods: {
 cadastrar() {
 this.$store.dispatch('cadastrar', {
   Nome:this.input.Nome,
   rg:this.input.rg,
   cpf:this.input.cpf,
   telefone:this.input.telefone,
   altura:this.input.altura,
   peso:this.input.peso,
   email:this.input.email,
   data:this.input.data
   })
 this.$router.push({ name: "secure" });
 }
 } 
 }
</script>