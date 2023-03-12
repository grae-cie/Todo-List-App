let todos = []
const addBtn = document.getElementById("add-btn")
const clearAll = document.getElementById("clear-all")
const todoContent = document.getElementById("todo-content")
const newTodo =  document.getElementById("new-todo")
const todoLocalStorage = JSON.parse(localStorage.getItem("todos"))
if(todoLocalStorage){
  todos = todoLocalStorage
  render()
}

addBtn.addEventListener("click", function(){
  if(!(newTodo.value === "")){
    todos.push(newTodo.value)
    newTodo.value = ""
    localStorage.setItem("todos", JSON.stringify(todos) )
    render()
  }
})

function render(){
  todoContent.innerHTML = ""
  todos.forEach(function(newTodo){
  let element = document.createElement("div")
  let deleteBtn = document.createElement("button")
  deleteBtn.innerText = "Delete"
  element.innerText = newTodo 
  todoContent.appendChild(element)
  element.appendChild(deleteBtn)
  deleteBtn.addEventListener("click", function(){
    localStorage.clear()
    element.innerHTML = ""
  })

  })
}

clearAll.addEventListener("click", function(){
  localStorage.clear()
  todos = []
  render()
})



