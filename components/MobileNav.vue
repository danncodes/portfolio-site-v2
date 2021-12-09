<template>
    <section class="fixed top-0 left-0 h-screen w-full z-[-1]" :class="{'backdrop-blur-xl bg-opacity-50 z-40': displayNavbar}">

        <nav class="w-full max-w-xs h-screen shadow-sm fixed top-0 right-0 duration-500 z-40 bg-[#112240]" :class="displayNavbar ? 'translate-x-0': 'translate-x-full' ">
            <header class="h-24 flex justify-end items-center w-full pr-6 cursor-pointer" v-if="displayNavbar" @click="toggleNavbar">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="#64ffda">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </header>
        </nav>
    </section>
    
</template>

<script>
export default {
    computed: {
        displayNavbar(){
            return this.$store.state.displayNavbar
        }
    },
    methods: {
        toggleNavbar(){
            this.$store.commit("toggleNavbar")
        }
    }

}
</script>

<style>

</style>