<template>
  <section class="h-32 mx-auto lg:px-12 mt-32 overflow-x-scroll rounded-sm flex gap-x-2 shadow-inner bg-[#59e4a0] border-2 border-[#59e4a0]">
    <Skill v-for="skill in skills" :key="skill.id" :skill="skill"/>
  </section>
</template>

<script>
export default {
    data(){
        return{
            skills: [
                {icon: "javascript.svg", id: "Javascript"},
                {icon: "vue.svg", id: "Vue"},
                {icon: "nuxt-icon.svg", id: "Nuxt"},
                {icon: "nodejs.svg", id: "Node JS"},
                {icon: "express.svg", id: "Express"},
                {icon: "postgresql.svg", id: "PostgresSQL"},
                {icon: "html-5.svg", id: "HTML5"},
                {icon: "css-3.svg", id: "CSS3"},
                {icon: "typescript-icon.svg", id: "Typescript"},
                {icon: "git-icon.svg", id: "Git"},
                {icon: "github-icon.svg", id: "Github"},
                {icon: "tailwindcss-icon.svg", id: "Tailwind CSS"},
                {icon: "bootstrap.svg", id: "Bootstrap"},
                {icon: "materializecss.svg", id: "Materialize"},
                {icon: "sequelize.svg", id: "Sequelize"},
                {icon: "sqlite.svg", id: "SQLite"},
                {icon: "mysql.svg", id: "MySQL"},
                {icon: "jest.svg", id: "Jest"},
            ]
        }
    }

}
</script>

<style>

</style>