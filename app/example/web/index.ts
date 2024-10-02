import "reflect-metadata";
import '@spectrum-web-components/styles/all-medium-light.css';
import '@spectrum-web-components/styles/typography.css';
import '@spectrum-web-components/theme/express/theme-light.js';
import '@spectrum-web-components/theme/express/scale-medium.js';
import '@spectrum-web-components/theme/sp-theme.js';

//import 'app/auth/cognito/web/module/auth-module';
import './module/example-module';
import './components/example-app';

document.body.appendChild(
    document.createElement('example-app')
);