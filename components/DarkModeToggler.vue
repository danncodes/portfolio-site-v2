<template>
  
</template>

<script>
export default {
    methods: {
        toggleDarkMode(){
            const html = document.querySelector('html')
            if(html.classList.contains('dark')){
                html.classList.remove('dark')
            } else {
                html.classList.add('dark')
            }

        }
    }

}
</script>

<style>

</style>