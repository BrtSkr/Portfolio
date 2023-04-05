<script lang="ts">
import "./Projects.scss";
import '../../scss/utility.scss';
import { defineComponent } from "vue";
import Project from "./Project.vue";
import ss from './img/Screenshot_57.png';

export default defineComponent({
  components: { Project },
  data() {
    return;
  },
});
</script>
<template>
  <section class="projects">
    <h2>Projects <span class="blink">...</span></h2>
    <div class="projects-container">
      <Project 
        project-name="E-commerce Website"
        description="A fully functioning online store created by a team of two people, modeled on Morele.net. In the project, we used technologies such as HTML, SCSS, React.js, Django and Bundler Parcel.js."
        img-path="https://raw.githubusercontent.com/BrtSkr/Portfolio/main/src/components/Projects/img/Screenshot_57.png" 
        repo-url="https://github.com/FilipRedlich/coop-shop"
        live-url="https://pycoop.herokuapp.com/"
        />
        
       <Project 
       project-name="Business Website"
       description="The website showcases a sample design for a company offering various services."
       img-path="https://raw.githubusercontent.com/BrtSkr/Portfolio/main/src/components/Projects/img/Screenshot_58.png"
       row-orientation="flex-row-reverse"
       repo-url="https://github.com/BrtSkr/Business-website"
       live-url="https://brtskr.github.io/Business-website/"
       />
       <Project 
       project-name="Github Search v2"
       description="Revamped version of the previous application utilizes the Github REST API to provide an enriched user experience. With this enhanced functionality, you can easily explore and gather information about other users, their repositories, display repositories in desired order, and even discover the repositories they've starred. Project is still being mantained and new functionalities are being added."
       img-path="https://raw.githubusercontent.com/BrtSkr/Portfolio/main/src/components/Projects/img/Screenshot_59.png"
       repo-url="https://github.com/BrtSkr/Github-Search-v2"
       />
       <Project 
       project-name="AviTransport"
       description="A full-stack application was developed using Express.js, React.js + TypeScript, and SCSS. Front-end developers have seamless access to the database through a REST API built with Express.js. Information can be retrieved through simple queries, allowing for sorting, searching for specific words, and finding elements based on key names. Repository is currently kept private due to sensitive data."
       img-path="https://raw.githubusercontent.com/BrtSkr/Portfolio/main/src/components/Projects/img/Screenshot_60.png"
       row-orientation="flex-row-reverse"
       repo-url="https://github.com/BrtSkr/AviTransport"
       />
    </div>
  </section>
</template>
