<template>
  <main class="flex flex-col max-w-lg mx-auto my-8">

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

    <section class="project w-full">
        <img :src="project.img" alt="" class="object-fill">
    </section>
  </main>
</template>

<script>
export default {
    props: ["project"]

}
</script>

<style scoped>

</style>