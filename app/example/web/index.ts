import "reflect-metadata";

//import 'app/auth/cognito/web/module/auth-module';
import './module/example-module';
import './components/example-app';

document.body.appendChild(
    document.createElement('example-app')
);