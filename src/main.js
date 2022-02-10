import {createApp}             from 'vue';
import App                     from './App.vue';
import router                  from './router';
import store                   from './store';
import {camelCase, upperFirst} from 'lodash';
import ShowErrorMessages       from './components/ShowErrorMessages';
import VueFormGenerator        from './components/VueFormGenerator.vue';

import './assets/styles/scss/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);

const requiredComponents = require.context(
    './components',
    true,
    /Base[A-Z]\w+\.(vue|js)$/,
);
requiredComponents.keys().forEach(fileName => {
    const componentConfig = requiredComponents(fileName);

    const componentName = upperFirst(
        camelCase(
            fileName
                .split('/')
                .pop()
                .replace(/\.\w+$/, ''),
        ),
    );
    app.component(componentName, componentConfig.default || componentConfig);
});

app.component('ShowErrorMessages', ShowErrorMessages);
app.component('VueFormGenerator', VueFormGenerator);

app.use(store).use(router).mount('#app');
