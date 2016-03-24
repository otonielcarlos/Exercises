var GetItem = function () {
    this.item = sessionStorage.getItem('todo');
    this.todo = "";
    if (this.item !== null) {
        this.todo = JSON.parse(this.item);
    }
    return this.todo;
}
var ToDo = function () {
    this.item = GetItem();
}

function addTodo() {
    var todo = new ToDo();
    todo.item = document.getElementById('task').value;
    todoArray.push(todo.item);
    sessionStorage.setItem('todo', JSON.stringify(todoArray));
    displayList();
    return false;
}

//function remove() {
//    var todo = new ToDo();
//    var id = todo.id;
//    todo.todos.splice(id, 1);
//    sessionStorage.setItem('todo', JSON.stringify(todo.todos));
//    displayList();
//    return false;
//}
var todoArray = [];
function displayList() {
    var todo = new ToDo();
    var list = '<ul>';
    for (var i = 0; i < todoArray.length; i++) {
        list += '<li>' + todoArray[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    list += '</ul>';
    document.getElementById('todos').innerHTML = list;
//    var buttons = document.getElementsByClassName('remove');
//    for (var i = 0; i < buttons.length; i++) {
//        buttons[i].addEventListener('click', remove);
//    };
}

document.getElementById('add').addEventListener('click', addTodo);
displayList();