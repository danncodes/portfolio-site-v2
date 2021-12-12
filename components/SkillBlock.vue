<template>
<main class="w-full flex flex-col md:w-8/12 gap-y-2 mx-auto my-8">
<Skill v-for="skill in Skills" :key="skill.skill" :skill="skill.skill" :skillLevel="skill.skillLevel"/>


</main>
</template>

<script>
export default {
    data(){
        return {
            Skills: [
                {skill: "Vue.JS", skillLevel: "80%"},
                {skill: "VueX", skillLevel: "80%"},
                {skill: "Nuxt.JS", skillLevel: "80%"},
                {skill: "HTML", skillLevel: "80%"},
                {skill: "CSS", skillLevel: "80%"},
                {skill: "Javascript", skillLevel: "80%"},
                {skill: "Typescript", skillLevel: "50%"},
                {skill: "PostgresSQL", skillLevel: "60%"},
                {skill: "Node.JS", skillLevel: "70%"},
                {skill: "Express", skillLevel: "70%"},
                {skill: "Jest", skillLevel: "50%"},
                {skill: "Git", skillLevel: "90%"},
            ]
        }
    }

}
</script>

<style>

</style>