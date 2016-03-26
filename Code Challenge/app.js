 var ToDo = function () {
     this.todosArray = [];
    ToDo.prototype.items = function () {
        this.item = localStorage.getItem('todo');
        this.todo = "";
        if (this.item !== null) {
            this.todo = JSON.parse(this.item);
        }
        return this.todo;
    };
    ToDo.prototype.addTodo = function () {
        this.items = document.getElementById('task').value;
        this.todosArray.push(this.items);
        localStorage.setItem('todo', JSON.stringify(this.todosArray));
        document.getElementById('task').value = "";
        displayList();
        return false;
    };
    ToDo.prototype.remove = function () {
        this.id = this.getAttribute('id');
        this.todosArray.splice(this.id, 1);
        localStorage.setItem('todo', JSON.stringify(this.todosArray));
        displayList();
        return false;
    };
};
var todo = new ToDo();
//var todosArray = [];

function displayList() {
    var list = '<ul>';
    for (var i = 0; i < todo.todosArray.length; i++) {
        list += '<li>' + '<button class="remove" id=" "'+ i +'" ">X</button>'+' ' +todo.todosArray[i] + '</li>';
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