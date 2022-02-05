import '../stylesheets/style.scss';
import Todo from './todo';
import OffCanvas from './offcanvas';

export class App {
    constructor() {
        new Todo();
        new OffCanvas();
    }
}

new App();
