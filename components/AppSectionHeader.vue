<template>
  <div class="flex items-center mt-3 mb-10">
        <span class="text-secondary text-sm text-center mr-4">{{ number }}</span>
        <h1 class="font-semibold text-2xl whitespace-nowrap">{{ title }}</h1>
        <hr class="w-full max-w-xs ml-4 border-[#59e4a0] border-1">
      </div>
</template>

<script>
export default {
    props: ["number", "title"]

}
</script>

<style>

</style>