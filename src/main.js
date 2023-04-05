import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin, faReact, faVuejs, faSass, faJs, faCss3, faHtml5, faBootstrap,} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
 library.add(faPhone, faGithub, faLinkedin, faReact, faVuejs, faSass, faJs, faCss3, faHtml5, faBootstrap, faCode, faEnvelope);
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
