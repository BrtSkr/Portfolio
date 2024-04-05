// Card.vue

<template>
  <div :id="optionalID" class="card" :class="{ 'card-currently': currently === true }">
    <div class="main-info">
      <h3>{{ company }}</h3>
      <h4>{{ occupation }}</h4>
    </div>
    <div class="minor-info">
      <h5>{{ who }}</h5>
      <h6>{{ time }}</h6>
    </div>
    <ul v-if="descriptionList && descriptionList.length > 0">
      <li v-for="(item, index) in descriptionList" :key="index">{{ item }}</li>
    </ul>
    <p v-else class="description">{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    company: {
      type: String,
      default: '',
    },
    who: {
      type: String,
      default: '',
    },
    occupation: {
      type: String,
      default: ''
    },
    time: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    descriptionList: {
      type: Array,
      default: '',
    },
    currently: {
      type: Boolean,
      default: false
    },
    optionalID: {
      type: String,
      default: ''
    }
  },
});
</script>
