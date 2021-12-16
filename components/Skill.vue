<template>
  <main class="bg-[#b0b1bc] w-full h-5 my-1 relative bg-opacity-50">

    <section class="h-full w-full flex">

        <!-- Tag -->
        <div class="z-[2] shadow font-bold text-[9px] sm:text-[11px] min-w-[5rem] max-w[5rem] h-5 flex items-center justify-center bg-[#59e4a0] text-black">
           <span>{{ skill }}</span>
        </div>

        <div class="z-[2] h-5 bg-[#59e4a182] absolute left-0 top-0" ref="skillLevel">
        </div>

        <span class="absolute right-4 top-1/4 text-[11px] text-black dark:text-gray-50 font-fira font-semibold">{{ skillLevel }}</span>

    </section>


  </main>
</template>

<script>
export default {
    props: ["skill", "skillLevel"],
    mounted(){
        this.updateSkill()
    },
    methods: {
        updateSkill(){
            const skillLevel = this.$refs.skillLevel
            skillLevel.style.width = this.skillLevel

        }
    }

}
</script>

<style>

</style>