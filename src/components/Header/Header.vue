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
            <p class="description">My career aspiration is to be a Frontend developer. In my leisure time, I develop personal projects using HTML, CSS, JavaScript, and React.js. I am driven to further my skills in this area and continuously enhance my abilities.</p>
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