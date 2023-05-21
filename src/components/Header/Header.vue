<script lang="ts">
import { defineComponent } from 'vue';
import './Header.scss';
export default defineComponent({
  
})
</script>

<template>
    <header>
        <div class="container">
            <h1>Nice to meet you!</h1>
            <p class="name">I'm <span>Bartosz Skrzydelski.</span></p>
            <p class="description">Passionate IT professional with technical education and expertise in programming. Graduated from a technical high school excelling as an IT technician, proficient in SQL, network management, and PC repairs. Actively engaged in personal projects focused on JavaScript, React.js, Vue.js, Sass, HTML5, and CSS3, expanding programming skills. Strong problem-solving, attention to detail, and collaborative mindset developed through hands-on experience with diverse languages, frameworks, and libraries.</p>
            <div class="button-container">
                <a href="#experience">Check more!
                    <span></span><span></span><span></span><span></span>
                </a>
                <a href="#contact">Contact me
                    <span></span><span></span><span></span><span></span>
                </a>
            </div>
        </div>
    </header>
</template>