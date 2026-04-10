var todoList = []
let draggedTodoId = null;

let currentFilter = "";
let selectedPriority = "";
let dueDateFrom = "";
let dueDateTo = "";

let createdFrom = "";
let createdTo = "";

let updatedFrom = "";
let updatedTo = "";

let currentSort = "";

let currentView = "list";

// function setView(view){
//     currentView = view;
//     renderTodoList();
// }
function setView(view){
    currentView = view;

    document.querySelectorAll(".view-btn").forEach(btn => btn.classList.remove("active"));

    if(view === "grid"){
        document.querySelectorAll(".view-btn")[0].classList.add("active");
    } 
    else if(view === "list"){
        document.querySelectorAll(".view-btn")[1].classList.add("active");
    } 
    else {
        document.querySelectorAll(".view-btn")[2].classList.add("active");
    }

    renderTodoList();
}
function setSort(value){
    currentSort = value;
    renderTodoList();
}

// Default todo
todoList.push({
    ID:1,
    title:"Buy Groceries",
    description:"Description comes here...",
    completionStatus:false,
    createdDate: Date.now(),
    updatedDate: Date.now(),
    dueDate:"",
    priority:"High",
    todoStatus:"Todo"
})

var editing_todo_id = -1

function addTodoFunction()
{
    let inputText = document.getElementById("todoInputID").value
    let todoDescID = document.getElementById("todoDescID").value
    let todoStatusID = document.getElementById("todoStatusID").value
    let todoCompletionID = document.getElementById("todoCompletionID").checked
    let todoPriorityID = document.getElementById("todoPriorityID").value
    let todoDueDateID = document.getElementById("todoDueDateID").value

    if(inputText)
    {
        todoList.push({
            ID: todoList.length + 1,
            title:inputText,
            description:todoDescID,
            completionStatus:todoCompletionID,
            createdDate: Date.now(),
            updatedDate: Date.now(),
            dueDate:todoDueDateID,
            priority:todoPriorityID,
            todoStatus:todoStatusID
        })

        renderTodoList()

        document.getElementById("addTodoDialog").close()
        document.getElementById("todoInputID").value = ""
        document.getElementById("todoDescID").value = ""
        document.getElementById("todoCompletionID").checked = false
        document.getElementById("todoDueDateID").value = ""
    }
    else
    {
        alert("Todo title cannot be blank!")
    }
}

function showDialog()
{
    document.getElementById("addTodoDialog").showModal()
}

function toggleCompletion(id){
    let todo = todoList.find(t=>t.ID ===id)

    todo.completionStatus = !todo.completionStatus
    todo.updatedDate = Date.now()  


    todoList = todoList.map(t=>{
        if(t.ID==id) return todo
        return t
    })

    renderTodoList()
}
function renderSwimlane(list){
    let todoListID = document.getElementById("todoListID");
    todoListID.innerHTML = "";

    let lanes = {
        "Todo": [],
        "In-Progress": [],
        "In-Review": [],
        "Done": []
    };

    list.forEach(todo => {
        if(lanes[todo.todoStatus]){
            lanes[todo.todoStatus].push(todo);
        }
    });

    let html = `<div class="swimlane-container">`;

    for(let lane in lanes){
        html += `
<div class="lane"
     ondragover="allowDrop(event)"
     ondrop="drop(event, '${lane}')">
    <h3>${lane}</h3>
`;

        lanes[lane].forEach(todo => {
            html += `
            <div class="todo-card"
                draggable="true"
     ondragstart="drag(event, ${todo.ID})">
                <input type="checkbox" ${todo.completionStatus ? "checked" : ""} 
                    onclick="toggleCompletion(${todo.ID})">

                <b>${todo.title}</b>
                <div class="todo-desc">${todo.description || "No description"}</div>
            </div>
            `;
        });

        html += `</div>`;
    }

    html += `</div>`;

    todoListID.innerHTML = html;
}

function renderTodoList()
{
    let todoListID = document.getElementById("todoListID")
    todoListID.innerHTML = ""

    let filteredList = [...todoList];

    // STATUS
    if(currentFilter === "complete"){
        filteredList = filteredList.filter(t => t.completionStatus === true);
    }
    else if(currentFilter === "incomplete"){
        filteredList = filteredList.filter(t => t.completionStatus === false);
    }

    // PRIORITY
    if(selectedPriority){
        filteredList = filteredList.filter(t => t.priority === selectedPriority);
    }

    // DUE DATE
    if(dueDateFrom && dueDateTo){
        filteredList = filteredList.filter(t => {
            if(!t.dueDate) return false;
            let d = new Date(t.dueDate);
            return d >= new Date(dueDateFrom) && d <= new Date(dueDateTo);
        });
    }

            // CREATED
        if(createdFrom){
            filteredList = filteredList.filter(t => {
                return new Date(t.createdDate) >= new Date(createdFrom);
            });
        }

        if(createdTo){
            filteredList = filteredList.filter(t => {
                return new Date(t.createdDate) <= new Date(createdTo);
            });
        }

        // UPDATED
        if(updatedFrom){
        filteredList = filteredList.filter(t => {
        return new Date(t.updatedDate) >= new Date(updatedFrom);
        });
        }

        if(updatedTo){
        filteredList = filteredList.filter(t => {
        return new Date(t.updatedDate) <= new Date(updatedTo);
        });
        }
        //sorting function...
        function bubbleSort(array, compareFn) {
            let n = array.length;
            for (let i = 0; i < n - 1; i++) {
                for (let j = 0; j < n - i - 1; j++) {
                    if (compareFn(array[j], array[j + 1]) > 0) {
                        // Swap
                        let temp = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = temp;
                    }
                }
            }
        }
        
// SORTING using bubble sort
if(currentSort){
    const priorityMap = { "High": 3, "Medium": 2, "Low": 1 };
    if(currentSort === "newest"){
        bubbleSort(filteredList, (a,b) => b.createdDate - a.createdDate);
    }
    else if(currentSort === "oldest"){
        bubbleSort(filteredList, (a,b) => a.createdDate - b.createdDate);
    }
    else if(currentSort === "priorityHigh"){
        bubbleSort(filteredList, (a,b) => (priorityMap[b.priority] || 0) - (priorityMap[a.priority] || 0));
    }
    else if(currentSort === "priorityLow"){
        bubbleSort(filteredList, (a,b) => (priorityMap[a.priority] || 0) - (priorityMap[b.priority] || 0));
    }
    else if(currentSort === "dueSoon"){
        bubbleSort(filteredList, (a,b) => {
            let da = a.dueDate ? new Date(a.dueDate) : new Date(8640000000000000);
            let db = b.dueDate ? new Date(b.dueDate) : new Date(8640000000000000);
            return da - db;
        });
    }
    else if(currentSort === "dueLater"){
        bubbleSort(filteredList, (a,b) => {
            let da = a.dueDate ? new Date(a.dueDate) : new Date(0);
            let db = b.dueDate ? new Date(b.dueDate) : new Date(0);
            return db - da;
        });
    }
}

 let isGrid = currentView === "grid";

todoListID.classList.remove("grid-view");

if(isGrid){
    todoListID.classList.add("grid-view");
}   

if(currentView === "swimlane"){
    renderSwimlane(filteredList);
    return;
}

for(let i=0; i<filteredList.length; i++)
{
    let todo = filteredList[i]

    let completedClass = todo.completionStatus ? "completed" : "";

    todoListID.innerHTML += `
    <li class="${isGrid ? 'todo-card' : ''}">
        <div class="todo-header">
            <input type="checkbox" ${todo.completionStatus ? "checked" : ""} 
                onclick="toggleCompletion(${todo.ID})">

            <div onclick="openEditDialogById(${todo.ID})" style="cursor:pointer;">
                <b class="${completedClass}">${todo.title}</b>
                <div class="todo-desc ${completedClass}">
                    ${todo.description || "No description"}
                </div>
            </div>
        </div>
    </li>`;
}
}

function openEditDialogById(id)
{
    let index = todoList.findIndex(t => t.ID === id)
    openEditDialog(index)
}

function openEditDialog(index)
{
    let todo = todoList[index]

    document.getElementById("editTodoTitleID").value = todo.title
    document.getElementById("editTodoDescID").value = todo.description
    document.getElementById("editTodoCompletionID").checked = todo.completionStatus
    document.getElementById("editTodoStatusID").value = todo.todoStatus
    document.getElementById("editTodoPriorityID").value = todo.priority
    document.getElementById("editTodoDueDateID").value = todo.dueDate

    editing_todo_id = todo.ID

    document.getElementById("editTodoDialog").showModal()
}

function updateTodo()
{
    let todo = todoList.find(t => t.ID==editing_todo_id )

    todo.title = document.getElementById("editTodoTitleID").value
    todo.description = document.getElementById("editTodoDescID").value
    todo.completionStatus = document.getElementById("editTodoCompletionID").checked
    todo.todoStatus = document.getElementById("editTodoStatusID").value
    todo.priority = document.getElementById("editTodoPriorityID").value
    todo.dueDate = document.getElementById("editTodoDueDateID").value
    todo.updatedDate = Date.now()

    todoList = todoList.map(t=>{
        if(t.ID == editing_todo_id) return todo
        return t
    })

    document.getElementById("editTodoDialog").close()
    editing_todo_id=-1

    renderTodoList()
}

window.onload = function() {
    renderTodoList()
}

function deleteTodo()
{
    let todo = todoList.find(t => t.ID == editing_todo_id)

    if(!todo) return

    document.getElementById("deleteTodoText").innerText =
        `Are you sure you want to delete "${todo.title}"?`

    document.getElementById("deleteConfirmDialog").showModal()
}

function confirmDelete()
{
    todoList = todoList.filter(t => t.ID != editing_todo_id)

    renderTodoList()

    document.getElementById("deleteConfirmDialog").close()
    document.getElementById("editTodoDialog").close()

    editing_todo_id = -1
}

function cancelDelete()
{
    document.getElementById("deleteConfirmDialog").close()
}

function closeAddDialog()
{
    document.getElementById("addTodoDialog").close()
}

function closeEditDialog()
{
    document.getElementById("editTodoDialog").close()
}

function setFilter(type) {
    currentFilter = type;
    updateFilterUI();
    renderTodoList();
}

// function updateFilterUI() {
//     document.getElementById("filter_incomplete").style.fontWeight = "normal";
//     document.getElementById("filter_complete").style.fontWeight = "normal";
//     document.getElementById("filter_all").style.fontWeight = "normal";

//     document.getElementById("filter_" + currentFilter).style.fontWeight = "bold";
// }
function updateFilterUI() {
    document.getElementById("filter_incomplete").classList.remove("active");
    document.getElementById("filter_complete").classList.remove("active");
    document.getElementById("filter_all").classList.remove("active");

    document.getElementById("filter_" + currentFilter).classList.add("active");
}

function setPriorityFilter(value){
    selectedPriority = value;
    renderTodoList();
}

function setDueDateRange(from, to){
    dueDateFrom = from;
    dueDateTo = to;
    renderTodoList();
}

function setCreatedDateRange(from, to){
    createdFrom = from;
    createdTo = to;
    renderTodoList();
}

function setUpdatedDateRange(from, to){
    updatedFrom = from;
    updatedTo = to;
    renderTodoList();
}
function drag(event, id){
    draggedTodoId = id;
}
function allowDrop(event){
    event.preventDefault(); // ye hona zaroori hai
}
function drop(event, status){
    event.preventDefault();

    let todo = todoList.find(t => t.ID == draggedTodoId);

    if(todo){
        todo.todoStatus = status;      // ✅ status change
        todo.updatedDate = Date.now(); // optional
    }

    renderTodoList(); // ✅ UI update
}