import Vue from 'vue'
import App from './App'

new Vue({
    // el: '#app',      // ou usar .$mount("#app")
    render: h => h(App)
    // ou...
    // render(createElement) {
    //     return createElement(App)
    // }
}).$mount("#app")