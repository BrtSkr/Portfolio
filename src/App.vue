<script setup lang="ts">
import { defineComponent } from 'vue';
import Nav from './components/Nav/Nav.vue';
import Header from './components/Header/Header.vue';
import Experience from './components/Experience/Experience.vue';
import Projects from './components/Projects/Projects.vue';
import Skills from './components/Skills/Skills.vue';
import Footer from './components/Footer/Footer.vue';
import './scss/global.scss';

</script>

<template>
 <Nav />
 <main>
     <Header />
     <Experience />
     <Projects />
     <Skills />
     <Footer />
 </main>
</template>


