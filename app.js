
// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");


// Event Listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);
// Functions

function addTodo(event){
	// Prevent form from submitting
	event.preventDefault();
	// todo Div
	const todoDiv = document.createElement('div');
	todoDiv.classList.add("todo");
	// create Li
	const newTodo = document.createElement('li');
	newTodo.innerText = todoInput.value;
	newTodo.classList.add('todo-item');
	todoDiv.appendChild(newTodo);
	// Check mark button
	const completedButton = document.createElement('button');
	completedButton.innerHTML = '<i class="fa fa-check"></i>';
	completedButton.classList.add("complete-btn");
	todoDiv.appendChild(completedButton);
	// Check trass button
	const trashButton = document.createElement('button');
	trashButton.innerHTML = '<i class="fa fa-trash"></i>';
	trashButton.classList.add("trash-btn");
	todoDiv.appendChild(trashButton);
	// Append to list
	todoList.appendChild(todoDiv);
	// clear input value
	todoInput.value = "";
}

function deleteCheck(e){
	const item = e.target;
	// Delet todo
	if(item.classList[0] === "trash-btn"){
		// animation
		const todo = item.parentElement;
		todo.classList.add("fall");
		todo.addEventListener('transitionend', function(){
			todo.remove();
		});
		
	}
	// CHEACK MARK
	if(item.classList[0] === "complete-btn"){
		const todo = item.parentElement;
		todo.classList.toggle("completed");
	}
}



function filterTodo(e) {
	
	const todos = todoList.childNodes;
	
	console.log(todoList);
	todos.forEach(function(todo){
		switch(e.target.value) {
			
			case "completed":
				if (todo.classList.contains('completed')) {
					todo.style.display = 'flex';
				}else{
					todo.style.display = "none";
				}
					break;
			case "uncompleted":
				if (!todo.classList.contains("completed")) {
					todo.style.display = "flex";
				}else{
					todo.style.display = "none";
				}
					break;
			default:
				todo.style.display = 'flex';
		}
	});
}
