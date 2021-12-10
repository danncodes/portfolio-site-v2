<template>
    <section class="fixed top-0 left-0 h-screen w-full z-[-1] md:hidden pointer-events-none" :class="{'backdrop-blur-xl bg-opacity-50 z-40': displayNavbar}">

        <nav class="w-full max-w-xs h-screen shadow-2xl fixed top-0 right-0 duration-500 z-40 bg-theme-primary pointer-events-auto" :class="displayNavbar ? 'translate-x-0': 'translate-x-full' ">
            <div class="h-24 flex justify-end items-center w-full pr-6 cursor-pointer" @click="toggleNavbar">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="#64ffda" v-if="displayNavbar">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>

            <ol class="h-3/6 w-full flex flex-col items-center justify-center font-fira gap-y-4 font-light">
                <li class="my-1 flex flex-col items-center">
                    <span class="text-secondary text-sm text-center">01.</span>
                    <a class="p-5 pt-0 hover:text-secondary duration-500" href="#about">About</a>
                </li>

                <li class="my-1 flex flex-col items-center">
                    <span class="text-secondary text-sm text-center">02.</span>
                    <a class="p-5 pt-0 hover:text-secondary duration-500" href="#experience">Experience</a>
                </li>

                <li class="my-1 flex flex-col items-center">
                    <span class="text-secondary text-sm text-center">03.</span>
                    <a class="p-5 pt-0 hover:text-secondary duration-500" href="#work">Work</a>
                </li>

                <li class="my-1 flex flex-col items-center">
                    <span class="text-secondary text-sm text-center">04.</span>
                    <a class="p-5 pt-0 hover:text-secondary duration-500" href="#contact">Contact</a>
                </li>

                <li class="my-4">
                    <a href="#">
                        <AppButton text="View CV" />
                    </a>
                </li>
            </ol>
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