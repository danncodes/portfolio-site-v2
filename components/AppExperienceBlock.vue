<template>
  <div class="flex flex-col sm:flex-row h-96 w-full max-w-3xl">

    <ul class="flex overflow-x-scroll sm:overflow-x-visible p-2 sm:flex-col sm:justify-center font-fira">

        <li class="flex-grow h-12 min-w-[10rem] items-center justify-evenly flex relative cursor-pointer hover:bg-theme-secondary hover:bg-opacity-70" @click="toggleSection(company.id)" :class=" { 'text-[#59e4a0] hover:text-primary-100' : index == company.id }" v-for="company in companies" :key="company.id">
            <div class="w-full sm:w-[2px] h-[2px] sm:h-full absolute bottom-0 sm:left-0 duration-300 transition-colors" :class=" index == company.id ? 'bg-[#59e4a0]' : 'bg-white bg-opacity-40'"></div>
            {{ company.name}}
        </li>

    </ul>
    <section class="flex-grow p-3- mt-4 sm:ml-4 sm:mt-0">

        <!-- Title -->
        <div class="flex justify-center items-center flex-col sm:flex-row">
            <h2 class="text-xl">{{companies[index].jobTitle}}</h2>
            <h3 class="font-fira text-secondary ml-2"><span class="mx-2">@</span>{{ companies[index].name }}</h3>
        </div>

        <!-- Date -->
        <div class="my-6">
            <h5 class="font-fira text-xs text-primary-200 text-center">{{companies[index].date}}</h5>
        </div>

        <!-- Job Description -->
        <ul class="my-4 flex justify-center flex-col">
            <li class="flex mb-2 ml-1 sm:w-10/12" v-for="description in companies[index].roleDescrption" :key="description.id">
                 <hr class="w-2 mr-4 border-[#59e4a0] border-1 px-1">
                 <span class="font-inter text-primary-200 text-sm pl-4">{{ description.description }}</span>
            </li>
        </ul>
    </section>

      </div>
</template>

<script>
export default {
    data(){
        return {
            companies: [
                {id: 0, name: "Personify XP", jobTitle: "Junior Software Engineer", date: "March 2021 - Present", roleDescrption: [{id: 1, description: ""}]},
                {id: 1, name: "CYF", jobTitle: "Teaching Assistant", date: "May 2021 - Present", roleDescrption: [{id: 1, description: ""}]},
                {id: 2, name: "Santander", jobTitle: "Personal Banker", date: "August 2016 - March 2021", roleDescrption: [{id: 1, description: "I have a background working in financial services and this experience allows me to confidently communicate with stakeholders at all levels. This experience also provides me a great range of interpersonal, social and time management skills that are a core part of my working life and transferable skills which are relevant to any role. I am extremely hardworking and determined to make that transition from a personal banker to a software developer."}]},
                {id: 3, name: "John Lewis", jobTitle: "Customer Advisor", date: "January 2014 - August 2016", roleDescrption: [{id: 1, description: ""}]},
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