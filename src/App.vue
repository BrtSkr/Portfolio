<script lang="ts">
import { defineComponent } from 'vue';
import Nav from './components/Nav/Nav.vue';
import Header from './components/Header/Header.vue';
import Experience from './components/Experience/Experience.vue';
import Projects from './components/Projects/Projects.vue';
import Skills from './components/Skills/Skills.vue';
import Footer from './components/Footer/Footer.vue';
import Loader from './components/Loader/Loader.vue';
import './scss/global.scss';
export default defineComponent({
    components: {Nav, Header, Experience, Projects, Skills, Footer, Loader}
})
</script>

<template>
 <Nav />
 <Loader />
 <main>
     <Header />
     <Experience />
     <Projects />
     <Skills />
     <Footer />
 </main>
</template>


