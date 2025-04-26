const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const value = input.value.trim();
  if (value) {
    addTodo(value);
    input.value = '';
  }
});

function addTodo(text) {
  const li = document.createElement('li');
  li.textContent = text;

  const btn = document.createElement('button');
  btn.textContent = 'Delete';
  btn.onclick = function() {
    list.removeChild(li);
  };

  li.appendChild(btn);
  list.appendChild(li);
}
