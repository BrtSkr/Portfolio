// Card.vue

<template>
  <div class="card">
    <div class="main-info">
        <h3>{{ company }}</h3>
        <h4>{{ occupation }}</h4>
    </div>
    <div class="minor-info">
      <h5>{{ who }}</h5>
      <h6>{{ time }}</h6>
    </div>
    <p class="description">{{ description }}</p>
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
  },
});
</script>
