 ToDo = function () {
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
        document.getElementById('task').value = "";
        displayList();
        return false;
    };
    this.remove = function () {
        this.id = this.getAttribute('id');
        todosArray.splice(this.id, 1);
        sessionStorage.setItem('todo', JSON.stringify(todosArray));
        displayList();
        return false;
    };
};
var todo = new ToDo();
var todosArray = [];

function displayList() {
    var list = '<ul>';
    for (var i = 0; i < todosArray.length; i++) {
        list += '<li>' + '<button class="remove" id=" "'+ i +'" ">X</button>'+'  ' +todosArray[i] + '</li>';
    };
    list += '</ul>';
    document.getElementById('todos').innerHTML = list;
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', todo.remove);
    };
};
document.getElementById('add').addEventListener('click', todo.addTodo);
document.getElementById('task').onkeypress = function (e) {
    if (!e) e = window.event;
    if (e.keyCode == '13') {
        todo.addTodo();
        return false;
    };
};
displayList();