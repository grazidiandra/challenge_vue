<template>
    <router-link :to="{ name: 'DetailPage', params: { id: character.id }}">
      <img :src='character.image' :alt='character.name'/>
      <p>{{character.name}}</p>
    </router-link>
</template>

<script>
export default {
  name: 'Card',
  props: { character: Object }
}
</script>

<style>

</style>