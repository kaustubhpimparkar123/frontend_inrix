<template>
    <div id="app">
      <v-app id="inspire">
        <v-main>
           <v-container fluid fill-height>
              <v-layout align-center justify-center>
                 <v-flex xs12 sm8 md4>
                    <v-card class="elevation-12">
                       <v-toolbar dark color="primary">
                          <v-toolbar-title> {{toolbarTitle}}</v-toolbar-title>
                       </v-toolbar>
                       <v-card-text v-if="toggle">
                          <v-form>
                             <v-text-field
                                icon="person"
                                name="login"
                                label="Username"
                                type="text"
                                v-model="userData.email"
                             ></v-text-field>
                             <v-text-field
                                id="password"
                                icon="lock"
                                name="password"
                                label="Password"
                                type="password"
                                v-model="userData.password"
                             ></v-text-field>
                          </v-form>
                       </v-card-text>
                       <v-card-actions v-if="toggle">
                          <v-spacer></v-spacer>
                          <v-btn color="primary" @click="setToogle()">Next</v-btn>
                       </v-card-actions>
                      <v-flex v-if="!toggle">
                      <v-slider
                        v-model="hiking"
                        v-bind:value="hiking"
                        :min="0"
                        :max="10"
                        height="50"
                        label="Hiking"
                        >
                      </v-slider>
                      <v-slider
                        v-model="running"
                        v-bind:value="running"
                        :min="0"
                        :max="10"
                        height="50"
                        label="Running"
                      >
                    </v-slider>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" @click="signup()">Sign Up</v-btn>
                    </v-card-actions>
                    </v-flex>
                    </v-card>
                 </v-flex>
              </v-layout>
           </v-container>
        </v-main>
     </v-app>
        <!-- <h1> Hello </h1> -->
      </div>
  </template>
<script type="text/javascript">
import Api from '../services/Api';

export default {
  name: 'SignUp',
  data() {
    return {
      toggle: true,
      hiking: 9,
      running: 9,
      toolbarTitle: 'Sign Up',
      userData: {
        email: '',
        password: '',
        hiking: 0,
        running: 0,
      },
    };
  },
  methods: {
    setToogle() {
      this.toggle = !this.toggle;
      this.toolbarTitle = 'Interests';
      // console.log(this.toggle);
    },
    async signup() {
      this.userData.hiking = this.hiking;
      this.userData.running = this.running;
      console.log(this.userData);
      Api.pingpong('ping');
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
