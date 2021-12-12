<template>
  <div class="h-full min-w-[128px] p-1 mx-2 duration-300">
        <img :src="require('../static/' + skill.icon)" :alt="skill.id" class="object-contain w-full h-full">
    </div>
</template>

<script>
export default {
    props: ["skill"],
}
</script>

<style>

</style>