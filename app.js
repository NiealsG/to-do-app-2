function onReady()  {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    toDos.push({
       title: newToDoText.value,
       complete: false
     });
     newToDoText.value = '';
  }
  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
    });
  }

  addToDoForm.addEventListener('submit', event => {
   event.preventDefault();
   createNewToDo();
 });

 renderTheUI();
 }

window.onload = function() {
  onReady();
};
