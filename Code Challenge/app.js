var ToDo = function () {
    this.items = function () {
        this.item = sessionStorage.getItem('todo');
        this.todo = "";
        if (this.item !== null) {
            this.todo = JSON.parse(this.item);
        }
        return this.todo;
    };
    this.addTodo = function () {
        this.items = document.getElementById('task').value;
        todosArray.push(this.items);
        sessionStorage.setItem('todo', JSON.stringify(todosArray));
        displayList();
        return false;
    }
    this.remove = function () {
        this.id = this.getAttribute('id');
        todosArray.splice(this.id, 1);
        sessionStorage.setItem('todo', JSON.stringify(todosArray));
        displayList();
        return false;
    }
};
var todosArray = [];

function displayList() {
    var todo = new ToDo();
    var list = '<ul>';
    for (var i = 0; i < todosArray.length; i++) {
        list += '<li>' + todosArray[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    list += '</ul>';
    document.getElementById('todos').innerHTML = list;
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', todo.remove);
    };
}
    var addButton = new ToDo();
    document.getElementById('add').addEventListener('click', addButton.addTodo);
    displayList();