<template>
  <div class="details" v-if="show">
    <img
      v-bind:alt="show?.name"
      class="image"
      :src="show?.image?.original"
      v-if="show?.image"
    />
    <div class="info">
      {{show?.name}}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions} from "vuex";

export default {
  computed: {
    ...mapState(["show"]),
  },
  
  name: 'Details',
  components: {  },
    methods: {
    ...mapActions(["getShow"]),
  },
}
</script>

<style scoped>
  .details{
    position: relative;
  }
  .image {
    width: 100vw;
  }
  .info{
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    z-index: 1;
    top: 2em;
    left: 2em;
    right: 2em;
    padding: 2em;
    color: aliceblue;
    font-size: 2em;
  }
      .more-info{
        font-size: 1em;
      }
</style>
