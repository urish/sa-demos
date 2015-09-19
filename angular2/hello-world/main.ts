import {Component, View, bootstrap} from 'angular2/angular2';

// Defines a new component <hello-world>

@Component({
    selector: 'hello-world'
})
@View({
    template: '<h1>hello {{name}} !</h1>'
})
class HelloWorldComponent {
    name: string;

    constructor() {
        this.name = 'Software Architect';
    }
}

bootstrap(HelloWorldComponent);