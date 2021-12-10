<template>
  <button :class="customStyle" class="fill relative font-fira text-black border-[#f8c41d] border rounded text-[13px] bg-[#f8c41d] px-[16px] py-[12px]">{{ text }}</button>
</template>

<script>
export default {
    props: ["text", "customStyle"]

}
</script>

<style scoped>
</style>