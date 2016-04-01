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

ToDo.prototype.deleteAll = function () {
    this.todosArray.length = 0;
    displayList();
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
        list += '<li> ' + '<button class="remove" id=" ' + i + '">X</button>' + '   ' + item + '</li>';
    };
    list += '</ul>';
    document.getElementById('todos').innerHTML = list;
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            var id = this.getAttribute('id');
            todo.remove(id);
        });
    };

};

document.getElementById('add').addEventListener('click', function () {
    var item = document.getElementById('task').value;
    if (item.length === 0) {
        HTMLButtonElement.disable = true;
        alert("You need to type something cool");
    } else {
        todo.addTodo(item);
        console.log(todo.todosArray);
    }
    document.getElementById('task').value = "";
    return false;
});

document.getElementById('task').onkeypress = function (e) {
    var item = document.getElementById('task').value;
    if (!e) e = window.event;
    if (e.keyCode == '13') {
        if (item.length === 0) {
            HTMLButtonElement.disable = true;
            alert("You need to type something cool");

        } else {
            todo.addTodo(item);
            console.log(todo.todosArray);
        }
        document.getElementById('task').value = "";
        return false;
    };
};

document.getElementById('delete').addEventListener('click', function () {

    todo.deleteAll();
    return false;
});


document.getElementById('delete').onkeypress = function (e) {
    var item = document.getElementById('delete').value;
    if (!e) e = window.event;
    if (e.keyCode == '13') {
           todo.deleteAll();
        }
        return false;
    };

window.addEventListener("keydown", keysPressed, false);
var keys = [];

function keysPressed(e) {
    keys[e.keyCode] = true;
    if (keys[27]) {
        todo.deleteAll();        
        e.preventDefault();
            keys[e.keyCode] = false;

        return false;

    }

}


displayList();