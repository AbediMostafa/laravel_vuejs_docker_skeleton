import {createApp} from "vue";
import App from "./App.vue";

/*
TIP: To get started with clean router change path to @/router/clean.ts.
 */
import router from "./router";
import store from "./store";
import pinia from "./pinia_store";

import ElementPlus from "element-plus";
import i18n from "@/core/plugins/i18n";

//imports for app initialization
import ApiService from "@/core/services/ApiService";
import {initApexCharts} from "@/core/plugins/apexcharts";
import {initInlineSvg} from "@/core/plugins/inline-svg";
import {initVeeValidate} from "@/core/plugins/vee-validate";
import initDirectives from "@/core/directives";

import "@/core/plugins/prismjs";

const app = createApp(App);

app.use(pinia);
app.use(store);
app.use(router);
app.use(ElementPlus);

ApiService.init(app);
initDirectives(app)
initApexCharts(app);
initInlineSvg(app);
initVeeValidate();

app.use(i18n);

app.mount("#app");
