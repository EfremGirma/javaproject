const todoList = [
  {
    name: "making dinner",
    dueDate: "2022-12-20",
  },
  {
    name: "wash dishes",
    dueDate: "2022 - 12 - 30",
  },
];

rendrTodo();

function rendrTodo() {
  let todoListHTML = "";
  // this system is called generating an HTML
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    // by using destructuring and we can use multiple property
    const { name, dueDate } = todoObject;
    // const { dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
    todoList.splice(${i},1);
    rendrTodo();
    " class="delete-todo-button">Delete</button>
    `;

    todoListHTML += html;
  }

  // console.log(todoListHTML);

  document.querySelector(".js-todo-div").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  // console.log(inputElement);
  const name = inputElement.value;

  const dateInput = document.querySelector(".js-due-date");
  const dueDate = dateInput.value;
  // console.log(name);

  todoList.push({
    //   name: name,
    //   dueDate: dueDate ShortHande  proprty syntax
    name,
    dueDate,
  });

  // console.log(todoList);

  inputElement.value = "";

  rendrTodo();
}
