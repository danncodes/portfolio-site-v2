<template>
  <main id="contact" class="min-h-screen duration-200 pt-24 p-6 md:p-12 lg:px-20 xl:px-40 relative">
      <AppSectionHeader title="Contact" />
    <section class="flex flex-col w-full">

        <div class="max-w-xs mx-auto text-primary-200 px-2 my-12">
            <h3 class="font-semibold text-center mb-2">Let's Talk</h3>
            <p class="text-sm text-center">Wanna get in touch or talk about a project? Feel free to contact me via email at <a class="font-fira text-secondary" href="mailto:d.mensah@outlook.com?subject=Hey I checked out your portfolio">d.mensah@outlook.com</a> or complete the contact form below</p>
        </div>

        <form class="max-w-xs h-96 w-full mx-auto rounded-sm p-2 text-black" @submit.prevent="formSubmitted">
            <input type="text" class="p-2 w-full my-2 rounded-sm bg-gray-50 placeholder-[#b0b1bc] outline-none duration-300 focus:ring-2 focus:ring-[#59e4a0]" placeholder="Name" required>
            <input type="email" class="p-2 w-full my-2 rounded-sm bg-gray-50 placeholder-[#b0b1bc] outline-none duration-300 focus:ring-2 focus:ring-[#59e4a0]" placeholder="Email" required>
            <textarea name="" id="contactForm" class="w-full rounded-sm p-2 bg-gray-50 placeholder-[#b0b1bc] outline-none duration-300 focus:ring-2 focus:ring-[#59e4a0]" rows="10" placeholder="Your Message ..."></textarea>
            <div class="w-full flex justify-center">
                <AppButton text="Submit" class="w-full"/>
            </div>
        </form>
    </section>
    <BackgroundRing customClasses="h-24 sm:h-48 md:h-64 lg:h-96 left-0 bottom-96 rotate-180"/>
    <BackgroundRing customClasses="h-24 sm:h-48 md:h-64 lg:h-96 right-0 bottom-0"/>
  </main>
</template>

<script>
export default {
    methods: {
        formSubmitted(){
            console.log("Form Submitted")
        }
    }

}
</script>

<style>

</style>