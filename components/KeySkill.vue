<template>
  <main class="flex flex-col items-center gap-y-1 p-2 text-primary-200 rounded m-1">

    <div class="bg-[#59e4a0] h-12 w-12">
      <img src="" :alt="title + 'Icon'" class="object-contain h-full w-full">
    </div>

    <h1 class="font-semibold">{{ title }}</h1>

    <p class="w-8/12 text-center text-xs">{{ text }}</p>
    
  </main>
</template>

<script>
export default {
  props: ["icon", "title", "text"]

}
</script>

<style>

</style>