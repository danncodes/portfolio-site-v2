<template>
  <a class="flex flex-col max-w-sm mx-auto my-8 rounded-xs duration-300 opacity-90 hover:opacity-100 hover:translate-y-2" :href="project.liveLink" target="_blank">

    <!-- Browser Bar -->
    <div class="h-6 bg-[#ddd] w-full text-[#8a8a8a] flex items-center relative">
        <!-- Browser Icons -->
        <div class="gap-x-1 h-6 ml-5 flex justify-around items-center absolute left-0">
            <div class="h-3 w-3 rounded-full bg-[#ff5f57]"></div>
            <div class="h-3 w-3 rounded-full bg-[#ffbd2e]"></div>
            <div class="h-3 w-3 rounded-full bg-[#28ca41]"></div>
        </div>
        
        <!-- Browser Tab Name -->
        <div class="w-full">
            <h2 class="text-center text-xs font-semibold">{{project.title}}</h2>
        </div>
    </div>

    <section class="w-full rounded-xs">
        <img :src="project.img" alt="" class="object-fill">
    </section>
  </a>
</template>

<script>
export default {
    props: ["project"]

}
</script>

<style scoped>

</style>