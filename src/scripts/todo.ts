import { BACKDROP_CLASSES } from './constants';

export default class Todo {
    constructor() {
        const todoTitle: HTMLTitleElement = document.querySelector('.todo-title');
        const todoForm: HTMLFormElement = document.querySelector('form[name="todo-form"]');
        const myOffCanvas: HTMLElement = document.querySelector('.off-canvas');
        const bodyElement: HTMLBodyElement = document.getElementsByTagName('body')[0];
        const footerNumberSpan: HTMLSpanElement = document.querySelector('.footer .footer-title span.number');
        const footerTitleSpan: HTMLSpanElement = document.querySelector('.footer .footer-title span.text');
        let todoList: {
            id: number;
            color: string;
            title: string;
            description: string;
        }[] = [];

        if (todoList.length === 0) {
            todoTitle.innerHTML = 'No todo\'s.'; // eslint-disable-line
        }

        const listener = (e: Event): void => {
            e.preventDefault();
            const title = e.target['title'].value;
            const color = e.target['color'].value;
            const description = e.target['description'].value;

            if (!title && !description) {
                e.target['title'].classList.add('is-invalid');
                e.target['description'].classList.add('is-invalid');
                return;
            }

            e.target['title'].classList.remove('is-invalid');
            e.target['description'].classList.remove('is-invalid');
            todoTitle.innerHTML = 'My todo\'s.'; // eslint-disable-line
            const todoListElement = document.querySelector('.list') as HTMLUListElement;
            const todoData = {
                id: Math.floor(Math.random() * 101),
                color,
                title,
                description,
            };
            todoList.push(todoData);
            footerNumberSpan.innerHTML = `${todoList.length}`;
            footerTitleSpan.innerHTML = 'todo.';

            if (todoList.length >= 2) {
              footerTitleSpan.innerHTML = "todo\'s."; // eslint-disable-line
            }

            const li = document.createElement('li');
            const divItemElement = document.createElement('div');
            const divDescElement = document.createElement('div');
            const itemContentElement = document.createElement('div');
            const itemButtonsElement = document.createElement('div');
            const circleElement = document.createElement('span');
            const todoTitleElement = document.createElement('span');
            const deleteButtonElement = document.createElement('button');
            li.classList.add('list-item');
            li.id = `${todoData.id}`;
            divItemElement.classList.add('item');
            divDescElement.classList.add('description');
            itemContentElement.classList.add('content');
            itemButtonsElement.classList.add('buttons');
            circleElement.classList.add('circle');
            todoTitleElement.classList.add('ms-4');
            ['btn', 'btn-danger', 'btn-delete-todo'].forEach((btnClass) => {
                deleteButtonElement.classList.add(btnClass);
            });
            deleteButtonElement.innerHTML = '<i class="fas fa-trash-alt pe-none"></i>';
            todoTitleElement.innerHTML = title;
            divDescElement.innerHTML = description;

            circleElement.style.setProperty('--background-color', color);
            todoListElement.appendChild(li);
            li.appendChild(divItemElement);
            li.appendChild(divDescElement);
            divItemElement.appendChild(itemContentElement);
            divItemElement.appendChild(itemButtonsElement);
            itemContentElement.appendChild(circleElement);
            itemContentElement.appendChild(todoTitleElement);
            itemButtonsElement.appendChild(deleteButtonElement);
            todoTitleElement.setAttribute('contenteditable', '');
            divDescElement.setAttribute('contenteditable', '');
            e.target['color'].value = '';
            e.target['title'].value = '';
            e.target['description'].value = '';

            myOffCanvas.classList.remove('is-active');
            BACKDROP_CLASSES.forEach((className) => {
                bodyElement.classList.remove(className);
            });
        };

        const bodyListener = (e: any) => {
            if (e.target.classList.contains('btn-delete-todo')) {
                const liItem = e.target.closest('.list-item');
                todoList = todoList.filter((item) => item.id !== parseInt(liItem.id, 10));
                liItem.remove();
                footerNumberSpan.innerHTML = `${todoList.length}`;

                if (todoList.length === 1) {
                  footerTitleSpan.innerHTML = "todo."; // eslint-disable-line
                }

                if (todoList.length === 0) {
                    todoTitle.innerHTML = 'No todo\'s.'; // eslint-disable-line
                    footerTitleSpan.innerHTML = '';
                    footerNumberSpan.innerHTML = '';
                }
            }
        };

        todoForm.addEventListener('submit', listener);
        const todoListElement = document.querySelector('.list') as HTMLUListElement;
        todoListElement.addEventListener('click', bodyListener);
    }
}
