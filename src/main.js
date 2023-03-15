import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.js";
import ProgressiveImage from "progressive-image/dist/vue";

const app = createApp(App);

app.use(router);
app.use(bootstrap);
app.use(ProgressiveImage, {
  removePreview: true,
});

app.mount("#app");
