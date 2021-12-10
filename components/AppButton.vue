<template>
  <button :class="customStyle" class="fill relative font-fira text-black border-[#59e4a0] border rounded text-[13px] bg-[#59e4a0] px-[16px] py-[12px]">{{ text }}</button>
</template>

<script>
export default {
    props: ["text", "customStyle"]

}
</script>

<style scoped>
</style>