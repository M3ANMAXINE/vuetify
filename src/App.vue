<template>
  <v-app>
    <v-app-bar app color="info" dark>
      <v-toolbar-title>EduTecno</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/home" text >Home</v-btn> 
        <v-btn to="/" text >Login</v-btn>
    </v-app-bar>    
    <v-main>
      <router-view></router-view>
    </v-main>
      <v-card height="150">
    <v-footer
      absolute
      class="font-weight-medium"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer>
  </v-card>

  </v-app>
  
</template>

<script>

export default {
  name: 'App',
 
};
</script>
