import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { urlConfigResolver, isMicroApp } from "./util/microUtil";

const logInfo = () => {
  console.log(urlConfigResolver(), isMicroApp);
};

logInfo();
const app = createApp(App);
app.mount("#app");
