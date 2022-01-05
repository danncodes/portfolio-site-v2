<template>
  <div class="flex flex-col sm:flex-row min-h-[32rem] sm:min-h-[auto] w-full max-w-3xl">

    <ul class="flex overflow-x-scroll sm:overflow-x-visible p-2 sm:flex-col sm:justify-center font-fira sm:min-h-[24rem] sm:max-h-96">

        <li class="flex-grow h-12 min-w-[10rem] items-center justify-evenly flex relative cursor-pointer text-primary-200 hover:bg-theme-secondary hover:bg-opacity-70" @click="toggleSection(company.id)" :class=" { 'text-[#59e4a0] hover:text-primary-100' : index == company.id }" v-for="company in companies" :key="company.id">
            <div class="w-full sm:w-[2px] h-[2px] sm:h-full absolute bottom-0 sm:left-0 duration-300 transition-colors" :class=" index == company.id ? 'bg-[#59e4a0]' : 'bg-white bg-opacity-40'"></div>
            {{ company.name}}
        </li>

    </ul>
    <section class="flex-grow p-3- mt-4 sm:ml-4 sm:mt-0">

        <!-- Title -->
        <div class="flex justify-center items-center flex-col sm:flex-row">
            <h2 class="text-xl text-primary-200 dark:text-white">{{companies[index].jobTitle}}</h2>
            <h3 class="font-fira text-secondary ml-2"><span class="mx-2">@</span>{{ companies[index].name }}</h3>
        </div>

        <!-- Date -->
        <div class="my-6">
            <h5 class="font-fira text-xs text-primary-200 text-center">{{companies[index].date}}</h5>
        </div>

        <!-- Job Description -->
        <ul class="my-4 flex justify-center flex-col">
            <li class="flex mb-2 ml-1 sm:w-10/12 text-primary-200" v-for="description in companies[index].roleDescrption.description" :key="description">
                 <span class="font-inter text-sm pl-4 mr-4 text-secondary">▹</span>
                  {{ description }}
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
                {id: 0, name: "Personify XP", jobTitle: "Junior Software Engineer", date: "March 2021 - Present", roleDescrption: {id: 1, description: ["At PersonifyXP, I am currently using a variety of different languages and frameworks such as JavaScript, Vue, Node.js, PostgresSQL etc.", "I am responsible for client-side UI scripting using JavaScript", "Unit testing using Jest", "Building complex web applications", "Working with Git versioning tools", "Debugging code errors", "Communicating with a multi-disciplinary team of engineers, designers, clients and stakeholders on a daily basis"]}},
                {id: 1, name: "Code Your Future", jobTitle: "Teaching Assistant", date: "May 2021 - Present", roleDescrption: {id: 1, description: ["At Code Your Future, I am a volunteer teaching assistant supporting the community with their Full-stack curriculum. CYF focuses on helping those from unlikely and disadvantaged backgrounds to achieve their dreams of pursuing successful careers in technology. I feel really passionate about making technology accessible for all and being a part of a movement diversifying the industry.", "CYF covers an 8-month full-stack web development course covering HTML, CSS, Vanilla JavaScript, React, Node.js, MONGODB, SQL and more, with live classes on weekends (1-full day) and online assignments during the week.", "In their journey of interrupted lives, unfinished studies and integration challenges, many of these individuals yearn to update their tech skills, but lack learning opportunities. Code Your Future want to change this."]}},
                {id: 2, name: "Santander", jobTitle: "Personal Banker", date: "August 2016 - March 2021", roleDescrption: {id: 1, description: ["This was a client focussed role which required clear and effective communication with stakeholders at all levels", "Collaboration with different departments within the business to achieve desired client outcomes.", "Writing up reports for analysis on client accounts.", "The ability to utilise social and time management skills"]}},
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