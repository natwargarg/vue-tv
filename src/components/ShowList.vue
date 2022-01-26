<script>
import ShowItem from "./ShowItem.vue";
import { smoothScroll, filterShowsByGenres, filterShowsByRating } from "../utils";

export default {
  name: "ShowList",
  components: { ShowItem },
  props: {
    title: String,
    genres: String,
    rating: {
      type: [Number, String],
      required: false,
      default: ""
    },
  },
  computed: {
    filterShows() {
      let filterShows = this.$store.state.shows;
      filterShows = filterShowsByGenres(this.genres, filterShows);    
      return filterShowsByRating(this.rating, filterShows);
    },

    isShow(){
      return (this.filterShows && this.filterShows.length > 0)
    }
  },

  methods: {
    // ...mapActions(["getFullSchedule"]),
    next() {
      smoothScroll(() => this.$refs.list.scrollBy(10, 0), 10, 46);
    },
    prev() {
      smoothScroll(() => this.$refs.list.scrollBy(-10, 0), 10, 46);
    },
  },
  created() {},
  mounted() {},
};
</script>

<template>
<div v-if="isShow">
  <div class="list-container">
    <h1 class="title">{{title}} : {{filterShows.length}}</h1>
    <div ref="list" class="tv-show-list">
      <ShowItem
        v-for="(showItem, i) in filterShows"
        :key="i"
        :showItem="showItem"
      ></ShowItem>
    </div>

    <button
      class="button prev-next-button previous"
      type="button"
      @click="prev"
      aria-label="Previous"
    >
      <svg class="button-icon" viewBox="0 0 100 100">
        <path
          d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
          class="arrow"
        ></path>
      </svg>
    </button>
    <button
      class="button prev-next-button next"
      type="button"
      @click="next"
      aria-label="Next"
    >
      <svg class="button-icon" viewBox="0 0 100 100">
        <path
          d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
          class="arrow"
          transform="translate(100, 100) rotate(180) "
        ></path>
      </svg>
    </button>
  </div>
  </div>
</template>

<style>
.title {
  padding: 16px;
  padding-bottom: 0;
  margin-bottom: 0;
  color: #41b883;
  color: #344b5c;
}

.list-container {
  position: relative;
}

.tv-show-list {
  display: grid;
  grid-gap: 16px;
  /* grid-template-columns: 0px; */
  grid-template-rows: 295px;
  grid-auto-flow: column;
  grid-auto-columns: 210px;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 1em;
}

.prev-img-button,
next-img-button {
  position: absolute;
  left: 0px;
  top: 50%;
  cursor: pointer;
}

.next-img-button {
  right: 0px;
}

.button {
  background: hsla(0, 0%, 100%, 0.75);
  border: none;
  color: #333;
  position: absolute;
  transition: all 0.2s ease-in-out;
}

.button:hover {
  background: #fff;
  cursor: pointer;
}

.button:focus {
  box-shadow: 0 0 0 2px #19f;
  outline: 0;
}

.button:active {
  opacity: 0.6;
}

.button:disabled {
  cursor: auto;
  opacity: 0.3;
  pointer-events: none;
}

.button-icon {
  fill: currentColor;
}

.prev-next-button {
  border-radius: 50%;
  height: 44px;
  top: 59%;
  transform: translateY(-50%);
  width: 44px;
}

.prev-next-button.previous {
  left: 16px;
}

.prev-next-button.next {
  right: 16px;
}

.prev-next-button .button-icon {
  height: 60%;
  left: 20%;
  position: absolute;
  top: 20%;
  width: 60%;
}

h1 {
  text-align: left;
}
</style>
