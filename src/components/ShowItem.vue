<template>
  <p class="show-item" @click="openShowDetails">
    <img
      alt="Vue logo"
      class="show-image"
      :src="showItem.show.image.medium"
      v-if="showItem.show.image"
    />
    <span class="item-title" v-text="showItem.show.name"></span>
  </p>
</template>

<script>

import router from '../router'
import {mapActions} from "vuex";

export default {
  name: "ShowItem",
  props: {
    showItem: Object,
  },
  methods: {
    ...mapActions(["setShow"]),
    openShowDetails() {
      router.push(`/show/${this.showItem.show.id}`);
      this.setShow(this.showItem.show);
    },
  }
};
</script>

<style>
.show-item {
  margin: 0;
  border-radius: 12px;
  box-shadow: 0 4px 7px rgb(0 0 0 / 25%);
  overflow: hidden;
  width: 210px;
  height: 295px;
  transition: all 0.2s ease-in-out;
}

show-item:hover {
    box-shadow: 0 0 0 2px #19f;
    outline: 0;
  }

.show-image {
  opacity: 1;
  transition-duration: 0.15s;
  transition-property: opacity;
}

show-image:hover {
    opacity: .9;
  }

.item-title{
    text-align: center;
    padding: 1em;
    margin-top: 50%;
    display: block;
}
</style>
