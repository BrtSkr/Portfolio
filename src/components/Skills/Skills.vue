<script lang="ts">
import { defineComponent } from "vue";
import Skill from "./Skill.vue";

import "./Skills.scss";
export default defineComponent({
  components: { Skill },
});
</script>
<template>
  <section class="skills">
    <h2>Skills <span><font-awesome-icon class="skills-code" :icon="['fas', 'code']" /></span></h2>
    <p>
      The main area of expertise is front end development (client side of the
      web). HTML, CSS, JS, building small and medium web applications with Vue
      or React, custom plugins, features, animations, and coding interactive
      layouts.
    </p>
    <p>Visit my <a href="https://www.linkedin.com/in/bartosz-skrzydelski-764a45262/">Linkedin</a> for more details.</p>
    <div class="main-technologies">
      <h3>Main technologies</h3>
      <div class="technologies-container">
        <Skill 
        technology="react"
        />
        <Skill 
        technology="vuejs"
        />
        <Skill 
        technology="js"
        />
        <Skill 
        technology="css3"
        />
        <Skill 
        technology="sass"
        />
        <Skill 
        technology="html5"
        />
        <Skill 
        technology="bootstrap"
        />
      </div>
      
    </div>
  </section>
</template>
