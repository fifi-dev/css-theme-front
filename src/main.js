import './assets/main.css';
import './assets/cssTheme.css'
import './index.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import messages from './locales';
import { createI18n } from 'vue-i18n';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faLink, faLinkedinIn, faGithub);

// Configuration de vue-i18n
const i18n = createI18n({
    locale: 'fr', // Langue par défaut
    fallbackLocale: 'en',
    messages,
});

const app = createApp(App);

app.use(createPinia());
app.use(i18n);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);

app.mount('#app');
