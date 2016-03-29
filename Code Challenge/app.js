var ToDo = function () {
    this.todosArray = [];
};

ToDo.prototype.items = function () {
    this.item = sessionStorage.getItem('todo');
    this.todo = "";
    if (this.item !== null) {
        this.todo = JSON.parse(this.item);
    }
    return this.todo;
};

ToDo.prototype.addTodo = function (item) {
    this.todosArray.push(item);
    sessionStorage.setItem('todo', JSON.stringify(this.todosArray));
    displayList();
    return false;
};

ToDo.prototype.remove = function (position) {
    this.todosArray.splice(position, 1);
    sessionStorage.setItem('todo', JSON.stringify(this.todosArray));
    displayList();
    return false;
};

var todo = new ToDo();

function displayList() {
    var list = '<ul>';
    for (var i = 0; i < todo.todosArray.length; i++) {
        var item = todo.todosArray[i];
        list += '<li>' + '<button class="remove" id=" ' + i + '">X</button>' + ' ' + item + '</li>';
    };
    list += '</ul>';
    document.getElementById('todos').innerHTML = list;
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            var id = this.getAttribute('id');
//            console.log(id);
            todo.remove(id);
            console.log(id);
//            return false;
        });
    };
};

document.getElementById('add').addEventListener('click', function () {
    var item = document.getElementById('task').value;
    todo.addTodo(item);
    console.log(item);
    document.getElementById('task').value = "";
    return false;
});

document.getElementById('task').onkeypress = function (e) {
    var item = document.getElementById('task').value;
    if (!e) e = window.event;
    if (e.keyCode == '13') {
        todo.addTodo(item);
        document.getElementById('task').value = "";
        return false;
    };
};

displayList();