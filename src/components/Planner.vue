<template>
   <div id="app">
   <v-app id="inspire">
      <v-row>
         <v-col xs="12" sm="6" md="6">
               <GmapAutocomplete
                  @place_changed='setPlace'
               />
               <GmapMap
                  :center='center'
                  :zoom='12'
                  style='width:100%;  height: 90vh;'
               />
            </v-col>
            <v-col offset-md="" xs="12" sm="6" md="4">
               <v-date-picker
                  v-model="dates"
                  range
                  width="100%"
               ></v-date-picker>
            </v-col>
      </v-row>
   </v-app>
</div>
</template>
<script type="text/javascript">
import Api from '../services/Api';

export default {
  name: 'Planner',
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      currentPlace: null,
      dates: [''],
      currentHover: null,
      allNodes: [],
      focusMonth: null,
    };
  },
  computed: {
    dateRangeText() {
      return this.dates.join(' ~ ');
    },
  },
  mounted() {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
    today = `${yyyy}/${mm}/${dd}`;

    let tomorrow = new Date();
    const tdd = String(today.getDate() + 1).padStart(2, '0');
    const tmm = String(today.getMonth() + 2).padStart(2, '0'); // January is 0!
    const tyyyy = today.getFullYear() + 1;
    tomorrow = `${tyyyy}/${tmm}/${tdd}`;

    this.dates[0] = today;
    this.dates[1] = tomorrow;
    this.geolocate();
  },
  methods: {
    login() {
      console.log(this.user);
      Api.pingpong('ping');
      this.$router.push('/SignUp');
    },
    setPlace(place) {
      this.currentPlace = place;
    },
    geolocate() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
//   methods: {
//     login() {
//       console.log(this.user);
//       Api.pingpong('ping');
//       this.$router.push('/SignUp');
//     },
//     setPlace(place) {
//       this.currentPlace = place;
//     },
//     geolocate() {
//       navigator.geolocation.getCurrentPosition((position) => {
//         this.center = {
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//         };
//       });
//     },
//   },
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
   .highlight__date {
      background-color: #82e3e3;
   }
   .date__color {
      color: #ffffff;
   }
</style>
