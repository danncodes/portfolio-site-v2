<template>
  <header class="h-24 z-10 px-6 md:px-10 flex justify-between items-center fixed top-0 w-full backdrop-blur-sm bg-theme-primary bg-opacity-80">
    
    <!-- Placeholder Logo -->
    <div class="h-10 w-10 bg-[#64ffda] bg-opacity-30"></div>
    
    <!-- Hamburger Menu -->
    <div class="md:hidden cursor-pointer" @click="toggleNavbar" v-if="!displayNavbar">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="#64ffda">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    </div>

    <!-- Nav Items -->
    <ol class="hidden md:flex gap-1 font-fira items-center font-light">
        <li class="mx-1">
            <span class="text-secondary text-xs p-1 pr-0">01.</span>
            <a class="p-2 pl-0 text-sm text-primary-300 hover:text-secondary duration-500" href="#">About</a>
        </li>
        <li class="mx-1">
            <span class="text-secondary text-xs p-1 pr-0">02.</span>
            <a class="p-2 pl-0 text-sm text-primary-300 hover:text-secondary duration-500" href="#">Experience</a>
        </li>
        <li class="mx-1">
            <span class="text-secondary text-xs p-1 pr-0">03.</span>
            <a class="p-2 pl-0 text-sm text-primary-300 hover:text-secondary duration-500" href="#">Work</a>
        </li>
        <li class="mx-1">
            <span class="text-secondary text-xs p-1 pr-0">04.</span>
            <a class="p-2 pl-0 text-sm text-primary-300 hover:text-secondary duration-500" href="#">Contact</a>
        </li>
        <li class="ml-4">
            <a href="#">
                <AppButton />
            </a>
        </li>
    </ol>

    <MobileNav />


  </header>
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