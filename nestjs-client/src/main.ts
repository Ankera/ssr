import { createApp } from 'vue';
import App from './App.vue';
import './bootstrap.css';
import { setupStore } from './store/index';
import { setupRouter } from './router/index';

import 'bootstrap/dist/js/bootstrap';

function bootstrap() {
  const app = createApp(App);

  // router
  setupRouter(app);

  // store
  setupStore(app);

  app.mount('#app');
}

bootstrap();
