export const state = () => ({
    displayNavbar: false
})

export const mutations = {
    toggleNavbar(state){
        state.displayNavbar = !state.displayNavbar
    }
}