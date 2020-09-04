<template>
  <v-row>
    <v-col cols="12" sm="8" offset-sm="2">
      <v-card>
        <v-container fluid>
          <v-row>
            <v-col
              v-for="n in personajes"
              :key="n.id"
              class="d-flex child-flex"
              cols="4">
              <v-card >
                <v-img
                  :src="n.imagen"
                  :lazy-src="n.imagen"
                  aspect-ratio="1"
                  class="grey lighten-2">
                  </v-img> 
                <v-card-title>{{n.nombre}}</v-card-title> 
              </v-card>
               </v-col>
            </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      personajes: [
{
'id': 1,
'nombre': 'Morty',
'imagen': 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
},
{
'id': 2,
'nombre': 'Rick',
'imagen': 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
},
{
'id': 3,
'nombre': 'Summer',
'imagen': 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
},
{
'id': 4,
'nombre': 'Beth',
'imagen': 'https://rickandmortyapi.com/api/character/avatar/4.jpeg'
},
{
'id': 5,
'nombre': 'Jerry',
'imagen': 'https://rickandmortyapi.com/api/character/avatar/5.jpeg'
}
]
    }
  },
  
}
</script>
