<script lang="ts">
import { defineComponent } from 'vue';
import './Footer.scss';
export default defineComponent({
    data(){
        return
    }
})
</script>

<template>
    <footer id="contact">
      <h2>Contact me!</h2>
      <div class="socials">
        <h3>You can find me here:</h3>
      <a target="_blank" href="https://github.com/BrtSkr"><font-awesome-icon :icon="['fab', 'github']" />Github</a>
      <a target="_blank" href="https://www.linkedin.com/in/bartosz-skrzydelski-764a45262/"><font-awesome-icon :icon="['fab', 'linkedin']" />Linkedin</a>
      <a href="mailto:skrzydelskibartosz@gmail.com"><font-awesome-icon :icon="['fas', 'envelope']" />skrzydelskibartosz@gmail.com</a>
      </div>
    </footer>
</template>