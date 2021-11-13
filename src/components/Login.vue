<template>
  <v-app id="inspire">
     <v-content>
        <v-container fluid fill-height>
           <v-layout align-center justify-center>
              <v-flex xs12 sm8 md4>
                 <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                       <v-toolbar-title>Login form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                       <v-form>
                          <v-text-field
                             icon="person"
                             name="login"
                             label="Login"
                             type="text"
                          ></v-text-field>
                          <v-text-field
                             id="password"
                             icon="lock"
                             name="password"
                             label="Password"
                             type="password"
                          ></v-text-field>
                       </v-form>
                    </v-card-text>
                    <v-card-actions>
                       <v-spacer></v-spacer>
                       <v-btn color="primary" to="/" @click="login()">Login</v-btn>
                    </v-card-actions>
                 </v-card>
              </v-flex>
           </v-layout>
        </v-container>
     </v-content>
  </v-app>
</template>
<script type="text/javascript">
import Api from '../services/Api';

export default {
  name: 'Login',
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      Api.pingpong('Hello');
    },
  },
};
</script>
  <style>
  .login-component {
    margin-top: 20px;
  }

  .form-login {
      max-width: 330px;
      padding: 15px;
      margin: 0 auto;
    }
  </style>
