<template>
  <div>
    <CardDetail :character='character'/> 
  </div> 
</template>

<script>
import api from '../../service';
import CardDetail from '../../components/CardDetail';

export default {
  name: 'DetailPage',
  components: { CardDetail },
  data() {
    return {
      character: {}
    }
  }, 
  created() {
    this.getCharacters()
  },
  methods: {
    getCharacters() {
    api.get(`/character/${this.$route.params.id}`)
      .then(response => this.character = response.data)
      .catch(err => console.log(err));
    }
  }
}
</script>

<style>

</style>