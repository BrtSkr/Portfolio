<script lang="ts">
import { defineComponent } from 'vue';
 import './Nav.scss';
 export default defineComponent({
    data(){
        return
    }
})

</script>

<template>
  <nav class="nav">
    <p>BartoszSkrzydelski</p>
    <div class="nav-anchors">
      <a href="https://github.com/BrtSkr"><font-awesome-icon :icon="['fab', 'github']" /></a>
      <a href="https://www.linkedin.com/in/bartosz-skrzydelski-764a45262/"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
      <a href="mailto:skrzydelskibartosz@gmail.com"><font-awesome-icon :icon="['fas', 'envelope']" /></a>
    </div>
  </nav>
</template>
