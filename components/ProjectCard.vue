<template>
  <main class="relative">
    <section class="w-full h-[410px] p-6 rounded-sm absolute top-0 left-0">
    <div class="p-1 flex flex-col justify-around h-full">
        <div class="">
            <h4 class="font-fira text-secondary text-sm">Featured Project</h4>
            <h3 class="font-medium text-2xl md:text-3xl lg:text-4xl duration-200 mb-3">Movie App</h3>
        </div>
        <div>
            <p class="text-sm sm:text-base"> minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
        </div>

        <div>
            <ul class="flex my-4 gap-x-2">
                <li class="mr-2 font-normal text-xs italic">Vue</li>
                <li class="mr-2 font-normal text-xs italic">Nuxt</li>
                <li class="mr-2 font-normal text-xs italic">Tailwind</li>
                <li class="mr-2 font-normal text-xs italic">API</li>
            </ul>

            <div class="flex gap-x-2">
                <img src="../static/github-icon.svg" alt="Github Icon" class="h-5 w-5 object-cover stroke-white">
                <img src="../static/external-link.svg" alt="External Link" class="h-5 w-5 object-cover stroke-white">
            </div>
        </div>
    </div>
    </section>


    <section class="test w-full h-[410px] p-6 rounded-sm absolute top-0 left-0">
  </section>
</main>
</template>

<script>
export default {

}
</script>

<style scoped>

.test {
    background-image: url(../static/movieApp.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #59e4a0;
    background-blend-mode: multiply;
    opacity: 0.1;
}
</style>