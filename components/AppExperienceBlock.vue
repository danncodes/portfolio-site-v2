<template>
  <div class="flex flex-col sm:flex-row h-96 w-full max-w-4xl">

    <ul class="flex overflow-x-scroll sm:overflow-x-visible p-2 sm:flex-col sm:justify-center font-fira">

        <li class="flex-grow h-12 min-w-[10rem] items-center justify-evenly flex relative cursor-pointer hover:bg-theme-secondary hover:bg-opacity-70" @click="toggleSection(company.id)" :class=" { 'text-[#59e4a0] hover:text-primary-100' : index == company.id }" v-for="company in companies" :key="company.id">
            <div class="w-full sm:w-[2px] h-[2px] sm:h-full absolute bottom-0 sm:left-0 duration-300 transition-colors" :class=" index == company.id ? 'bg-[#59e4a0]' : 'bg-white bg-opacity-40'"></div>
            {{ company.name}}
        </li>

    </ul>
    <div class="bg-green-300 flex-grow mt-4 sm:ml-4 sm:mt-0">
        <h1>{{ companies[index].name }}</h1>
    </div>

      </div>
</template>

<script>
export default {
    data(){
        return {
            companies: [
                {id: 0, name: "Personify XP", jobTitle: "", date: "", roleDescrption: []},
                {id: 1, name: "CYF", jobTitle: "", date: "", roleDescrption: []},
                {id: 2, name: "Santander", jobTitle: "", date: "", roleDescrption: []},
                {id: 3, name: "John Lewis", jobTitle: "", date: "", roleDescrption: []},
            ],
            index: 0
        }
    },
    methods: {
        toggleSection(id){
            this.index = id
        }
    }
}
</script>

<style>

</style>