function newToDo() {
    var todos = [];
    var newTodo = sessionStorage.getItem('todo');
    if (newTodo !== null) {
        todos = JSON.parse(newTodo);
    }
    return todos;
}

function displayList() {
    var todos = newToDo();
    var list = '<ul>';
    for (var i = 0; i < todos.length; i++) {
        list += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    list += '</ul>';
    document.getElementById('todos').innerHTML = list;
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

function addTodo() {
    var task = document.getElementById('task').value;
    var todos = newToDo();
    todos.push(task);
    sessionStorage.setItem('todo', JSON.stringify(todos));
    displayList();
    return false;
}

function remove() {
    var id = this.getAttribute('id');
    var todos = newToDo();
    todos.splice(id, 1);
    sessionStorage.setItem('todo', JSON.stringify(todos));
    displayList();
    return false;
}

document.getElementById('add').addEventListener('click', addTodo);
displayList();