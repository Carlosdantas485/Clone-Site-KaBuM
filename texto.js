var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    listElement.innerHTML = '';
    
    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        
        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todos);

        linkElement.setAttribute('onclick', 'deletetodo(' + pos + ')');

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);
        
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addtodo(){
    var todoText = inputElement.value;
    
    todos.push(todoText);
    inputElement.valu = '';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addtodo;

function deletetodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    
    localStorage.setItem('list_todos', JSON.stringify(todos));
}