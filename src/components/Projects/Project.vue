<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    props: {
        projectName: {
            type: String,
            default: "",
        },
        description: {
            type: String,
            default: "",
        },
        imgPath: {
            type: String,
            default: null,
        },
        liveUrl: {
         type: String,
         default: null
        },
        repoUrl: {
            type: String,
            default: null
        },
        rowOrientation: {
            type: String,
            default: "flex-row",
        },
    },
});
</script>

<template>
    <div class="project" :class="rowOrientation">
        <img v-bind:src="imgPath" :alt="projectName" />
        <div class="details">
            <h3 class="name">{{ projectName }}</h3>
            <p class="description">{{ description }}</p>
            <div class="project-anchors">
                <a v-if="liveUrl" :href="liveUrl">Live</a>
                <a v-if="repoUrl" :href="repoUrl">Repository</a>
            </div>
        </div>
    </div>
</template>
