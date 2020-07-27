<template>
  <div>
    <img :src='character.image' :alt='character.name' />
    <div>
      <h2>{{character.name}}</h2>
      <p><span>Species:</span> {{character.species}}</p>
      <p><span>Gender:</span> {{character.gender}}</p>
      <p><span>Status:</span> {{character.status}}</p>
      <p v-if="character.location"><span>Location:</span> {{character.location.name}}</p> 
    </div>
      <router-link to="/">Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'CardDetail',
  props: { 
    character: {
      type: Object 
    }
  }
}
</script>

<style>

</style>