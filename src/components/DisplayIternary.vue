<template>
    <div id="app">
    <v-app id="inspire">
       <v-row>
          <v-col xs="12" sm="6" md="6">
                <GmapMap
                   :center='center'
                   :zoom='15'
                   style='width:100%;  height: 90vh;'
                >
                   <GmapMarker
                   :key="index"
                   v-for="(m, index) in markers"
                   :position="m.position"
                   />
                </GmapMap>
             </v-col>
             <v-layout row wrap>
             <v-col
             xs = "12" sm="12" md="12"
            >
            <v-row   v-for="(item, i) in items"
            :key="i">
            <v-col offset-md="1" xs = "12" sm="10" md="10">
             <v-card
               color="#1F7087"
               dark
             >
               <div class="d-flex flex-no-wrap justify-space-between">
                 <div>
                   <v-card-title
                     class="text-h5"
                     v-text="item.title"
                   ></v-card-title>

                   <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                 </div>

                 <v-avatar
                   class="ma-3"
                   size="125"
                   tile
                 >
                   <v-img :src="item.src"></v-img>
                 </v-avatar>
               </div>
             </v-card>
            </v-col>
            </v-row>
           </v-col>
           </v-layout>
       </v-row>
    </v-app>
 </div>
 </template>
<script type="text/javascript">
import Api from '../services/Api';

export default {
  name: 'DisplayIternary',
  props: [
    'plannerData',
  ],
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      currentPlace: null,
      dates: [],
      currentHover: null,
      allNodes: [],
      focusMonth: null,
      markers: [],
      places: [],
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
      ],
    };
  },
  created() {
    // this.fetchData();
  },
  mounted() {
    // this.fetchData();
  },
  methods: {
    async fetchData() {
      const response = await Api.planner(this.plannerData);
      // console.log(response.result.trip.wayPoints[0].geometry.coordinates[0][0]);
      for (let i = 0; i < response.result.trip.wayPoints.length; i += 1) {
        this.markers.push({
          position: {
            lat: response.result.trip.wayPoints[i].geometry.coordinates[0][1],
            lng: response.result.trip.wayPoints[i].geometry.coordinates[0][0],
          },
        });
      }
      await this.sleep(100);
      this.center = {
        lat: this.markers[0].position.lat,
        lng: this.markers[0].position.lng,
      };
      console.log(this.center);
    },
    setPlace(place) {
      this.currentPlace = place;
      this.center.lat = (this.currentPlace.geometry.location.lat());
      this.center.lng = (this.currentPlace.geometry.location.lng());
      this.addMarker();
    },
    geolocate() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
    sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
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
    .highlight__date {
       background-color: #82e3e3;
    }
    .date__color {
       color: #ffffff;
    }
 </style>
