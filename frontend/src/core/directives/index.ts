import store from "@/store";

const initDirectives = (app) => {
    app.directive('spin', {
        mounted(el) {
            el.addEventListener('click', () => store.dispatch('indicatorSpin', el))
        },
        unmounted(el) {
            el.removeEventListener('click', () => store.dispatch('indicatorSpin', el))
        }
    });
}

export default initDirectives;