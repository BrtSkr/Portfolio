import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 library.add(faPhone, faGithub, faLinkedin);
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
