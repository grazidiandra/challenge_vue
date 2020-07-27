<template>
    <div>
      <input type='search' @input="handleSearch($event.target.value)" v-model="search"/>
      <div v-for="character in characters" :key="character.id">
        <Card :character='character'/>
      </div>
      <div>
        <button @click="prevPage">Previous</button>
        <button @click="nextPage">Next</button>
      </div> 
    </div>
</template>

<script>
import Card from '../../components/Card'

export default {
  name: 'MainPage',
  components: { Card },
  data() {
    return {
      search: '',
      characters: [],
      charactersInfo: {},
      page: '',
      filter: false,
    }
  },
  created() {
    this.getCharacters()
  },
  methods: {
    getCharacters(page = 1) {
      this.$http.get(`/character?page=${page}`)
      .then(response => {
        const { results, info } = response.data;
        this.characters = results;
        this.charactersInfo = info;
        this.page = page;
        })
      .catch(error => console.log(error))
    },
    handleSearch(search, page = 1) {
      this.search = search;
      this.$http.get(`/character/?page=${page}&name=${search}`)
        .then(response => {
          const { results, info } = response.data;
          this.characters = results;
          this.charactersInfo = info;
          this.page = page;
          this.filter = true;
        })
        .catch((err) => console.log(err));
    },
    prevPage() {
      if (this.page === 1) return;
      const pageNumber =  this.page - 1;
      this.filter ? this.handleSearch(this.search, pageNumber) :
      this.getCharacters(pageNumber);
    },
    nextPage() {
      if (this.page === this.charactersInfo.pages) return;
      const pageNumber =  this.page + 1;
      this.filter ? this.handleSearch(this.search, pageNumber) :
      this.getCharacters(pageNumber);
    }
  }
}
</script>

<style>

</style>