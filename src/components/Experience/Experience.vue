// Experience.vue

<template>
  <section id="experience" class="experience">
    <h2>Experience <span class="blink"><font-awesome-icon :icon="['fas', 'briefcase']" /></span></h2>
    <div class="experience-container">
      <Card company="DKCode" occupation="Frontend Developer" who="Intern" time="July 2023 - Present"
        :description-list={['gf']} :currently="true" />
      <Card company="B2B Soft Sp. z o.o." occupation="Frontend Developer" who="Intern" time="August 2022 - September 2022"
        description="Modernizing the company's application to meet current standards using the combination of SharePoint, React.js, TypeScript, Fluent UI, and Docker." />
      <Card company="O&S Computer-Soft Sp. z o.o." occupation="Software tester" who="Intern" time="July 2022"
        description="Digitalization of documents and testing of internal software for document digitalization for error detection." />
      <Card company="PIEKARY.NET" occupation="
    Internet Network Specialist" who="Intern" time="March 2022 - April 2022" description="Configuring and backing up configuration files, setting up network
    devices, testing the infrastructure for defects, and welding fiber
    optic cables." />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "./Experience.scss";
import Card from "./Card.vue";
export default defineComponent({
  components: {
    Card,
  },
});
</script>
