<template>
<div>
    <v-card width="400px" class="mx-auto mt-5">
        <v-card-title>
        <h1 class="mx-auto">Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="userName" prepend-icon="mdi-account-circle"  />
          <v-text-field label="password" 
          @click:append="showPassword = !showPassword"
          :type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock" :append-icon="showPassword ? 'mdi-eye': 'mdi-eye-off'"/> 
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="success">Register</v-btn> 
        <v-spacer></v-spacer>      
        <v-btn color="input">Login</v-btn>
      </v-card-actions>
    </v-card>
</div>
</template>

<script>
export default {
   data: () => ({
    showPassword: false
  }),

}
</script>

<style>

</style>