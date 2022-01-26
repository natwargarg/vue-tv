<template>
  <form @submit.prevent="doSearch" class="search-input">
    <input placeholder="Search TV Shows ..." type="" v-model="searchText" /> |
    <select @change="setCountry($event)">
      <option value="US">US</option>
      <option value="NL">NL</option>
    </select>
  </form>
</template>

<script>
import { mapState, mapActions } from "vuex";
import router from "../router";

export default {
  computed: {
    ...mapState(["selectedCountry"]),
  },
  mounted() {
    // this.getFullSchedule();
    this.getTodayShowByCountry(this.selectedCountry);
  },
  methods: {
    doSearch() {
      if (this.searchText === "") {
        this.getTodayShowByCountry(this.selectedCountry);
      } else {
        router.push(`/`);
        this.getShowBySearch(this.searchText);
        }
    },

    setCountry(event) {
      this.getTodayShowByCountry(event.target.value);
    },
    ...mapActions(["getTodayShowByCountry", "getShowBySearch"]),
  },
  data() {
    return {
      searchText: "",
    };
  },
};
</script>

<style></style>
