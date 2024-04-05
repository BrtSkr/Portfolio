<template>
    <!-- <div>
      <div ref="loaderRight" class="loader loader-right animate--hide-right">
        T
      </div>
      <div ref="loaderIcon" class="loader-icon">
        <font-awesome-icon class="icon" :icon="['fab', 'vuejs']" />
      </div>
      <div ref="loaderLeft" class="loader loader-left animate--hide-left">
        T
      </div>
    </div> -->
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import './Loader.scss';
  
  export default defineComponent({
    mounted() {
      const loaderRight = this.$refs.loaderRight as HTMLElement;
      const loaderLeft = this.$refs.loaderLeft as HTMLElement;
      const loaderIcon = this.$refs.loaderIcon as HTMLElement;
      loaderRight.addEventListener('animationend', () => {
        loaderRight.remove();
      });
      loaderLeft.addEventListener('animationend', () => {
        loaderLeft.remove();
      });
      setTimeout(() =>{
      loaderIcon.remove()
      loaderLeft.classList.add('animate--hide-left');
      loaderRight.classList.add('animate--hide-right');
      }, 2000)
      
    }
  })
  </script>
  