<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    imgPath: {
      type: String,
      default: "",
    },
    technology: {
      type: String,
      default: "",
    },
  },
});
</script>

<template>
  <div class="skill">
    <font-awesome-icon class="icon" :icon="['fab', technology]" />
    <p>{{ technology.charAt(0).toUpperCase() + technology.slice(1) }}</p>
  </div>
</template>