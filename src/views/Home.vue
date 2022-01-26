<template>
  <div class="home">
    <ShowList v-bind:title="getTitle"/>
    <ShowList title="popular TV shows" rating="5"/>
    <ShowList title="Drama Series" genres="['Drama']"/>
    <ShowList title="Comedy" genres="['Comedy']"/>
    <ShowList title="Music" genres="['Music']"/>
    <ShowList title="Kids & Family" genres="['Family', 'Children']"/>
    <h1 v-if="noRecordsFound">No records founds</h1>
  </div>
</template>

<script>
import ShowList from "../components/ShowList.vue"

import { mapState} from "vuex";

export default {
  computed: {
    ...mapState(["searchQuery", "shows"]),

// get only
    getTitle: function () {
      return (this.searchQuery === '') ? 'All Shows': `Showing serach "${this.searchQuery}" results `
    },

    noRecordsFound: function () {
      return (!this.shows || this.shows.length === 0)
    },
  },
  name: 'Home',
  components: {
    ShowList,
  },
}
</script>
