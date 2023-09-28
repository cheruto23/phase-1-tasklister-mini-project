document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    toDohandler(e.target.elements['new-task-description'].value);
    form.reset();
  });
});


function toDohandler(todo){
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', deleteHandler);
  btn.textContent = 'X';
  p.textContent = `${todo}`;
  p.appendChild(btn);

  document.querySelector('#list').appendChild(p);
}

function deleteHandler(e){
  e.target.parentNode.remove();
}
