function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = taskText;

  const doneBtn = document.createElement('button');
  doneBtn.textContent = '✔';
  doneBtn.title = 'Mark as Done';
  doneBtn.onclick = () => li.classList.toggle('completed');

  const editBtn = document.createElement('button');
  editBtn.textContent = '✏';
  editBtn.title = 'Edit Task';
  editBtn.onclick = () => {
    const newText = prompt('Edit your task:', span.textContent);
    if (newText !== null && newText.trim() !== '') {
      span.textContent = newText.trim();
    }
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑';
  deleteBtn.title = 'Delete Task';
  deleteBtn.onclick = () => li.remove();

  li.appendChild(span);
  li.appendChild(doneBtn);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  document.getElementById('taskList').appendChild(li);
  taskInput.value = '';
}
