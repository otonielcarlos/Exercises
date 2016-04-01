// In here we create whatever we are going to type and add it to the list
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


// This function will display every element that has been typed
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

// This code will trigger the addToDo function on the "Add The List" button when clicked

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

// This code will trigger the addToDo function when 'Enter' hit
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

// This code will trigger the deleteAll function on the "Delete All" button when selected with 'Tab' and 'Enter' hit.

document.getElementById('delete').addEventListener('click', function () {

    todo.deleteAll();
    return false;
});

// This code will trigger the deleteAll function on the "Delete All" button when clicked

document.getElementById('delete').onkeypress = function (e) {
    var item = document.getElementById('delete').value;
    if (!e) e = window.event;
    if (e.keyCode == '13') {
        todo.deleteAll();
    }
    return false;
};

// This code will trigger the deleteAll function when 'Escape' hit

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