<template>
  <div class="flex flex-col sm:flex-row h-96 w-full max-w-4xl">

    <ul class="flex overflow-x-scroll sm:overflow-x-visible p-2 sm:flex-col sm:justify-center font-fira">
        <li class="flex-grow h-12 min-w-[10rem] items-center justify-evenly flex relative cursor-pointer hover:bg-theme-secondary hover:bg-opacity-70" @click="toggleSection(0)" :class=" { 'text-[#59e4a0] hover:text-primary-100' : index == 0 }">
            <div class="w-full sm:w-[2px] h-[2px] sm:h-full absolute bottom-0 sm:left-0 duration-300 transition-colors" :class=" index == 0 ? 'bg-[#59e4a0]' : 'bg-white bg-opacity-40'"></div>
            PersonifyXP
        </li>
        <li class="flex-grow h-12 min-w-[10rem] items-center justify-evenly flex relative cursor-pointer hover:bg-theme-secondary hover:bg-opacity-70" @click="toggleSection(1)" :class=" { 'text-[#59e4a0] hover:text-primary-100' : index == 1 }">
            <div class="w-full sm:w-[2px] h-[2px] sm:h-full absolute bottom-0 sm:left-0 duration-300 transition-colors" :class=" index == 1 ? 'bg-[#59e4a0]' : 'bg-white bg-opacity-40'"></div>
            CYF</li>
        <li class="flex-grow h-12 min-w-[10rem] items-center justify-evenly flex relative cursor-pointer hover:bg-theme-secondary hover:bg-opacity-70" @click="toggleSection(2)" :class=" { 'text-[#59e4a0] hover:text-primary-100' : index == 2 }">
            <div class="w-full sm:w-[2px] h-[2px] sm:h-full absolute bottom-0 sm:left-0 duration-300 transition-colors" :class=" index == 2 ? 'bg-[#59e4a0]' : 'bg-white bg-opacity-40'"></div>
            Santander</li>
        <li class="flex-grow h-12 min-w-[10rem] items-center justify-evenly flex relative cursor-pointer hover:bg-theme-secondary hover:bg-opacity-70" @click="toggleSection(3)" :class=" { 'text-[#59e4a0] hover:text-primary-100' : index == 3 }">
            <div class="w-full sm:w-[2px] h-[2px] sm:h-full absolute bottom-0 sm:left-0 duration-300 transition-colors" :class=" index == 3 ? 'bg-[#59e4a0]' : 'bg-white bg-opacity-40'"></div>
            John Lewis</li>
    </ul>
    <div class="bg-green-300 flex-grow mt-4 sm:ml-4 sm:mt-0">
        <h1>{{ experience[index] }}</h1>
    </div>

      </div>
</template>

<script>
export default {
    data(){
        return {
            experience: ["1","2","3","4"],
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