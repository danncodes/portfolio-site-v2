<template>
  <button :class="customStyle" class="fill relative font-fira text-[#f8c41d] border-[#f8c41d] border rounded text-[13px] bg-transparent px-[16px] py-[12px]">{{ text }}</button>
</template>

<script>
export default {
    props: ["text", "customStyle"]

}
</script>

<style scoped>

.fill:before {
  content: "";
  position: absolute;
  background: #f8c51d3a;
  bottom: 0;
  left: 0;
  right: 0;
  top: 100%;
  z-index: -1;
  -webkit-transition: top 0.09s ease-in;
  transition: top 0.09s ease-in;
}

.fill:hover:before {
  top: 0;
}

</style>