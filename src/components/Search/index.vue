<template>
    <div>
      <input type='search' @input="handleSearch($event.target.value)" :value="search"/>
    </div>
</template>

<script>
export default {
  name: 'Search',
  props: { search: String, handleSearch: Function }
}
</script>

<style>

</style>