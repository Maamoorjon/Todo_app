import "./styles.css";

document.querySelector('.add-button').addEventListener('click', onClickAdd);

function onClickAdd() {
  const inputText = document.querySelector('.add-text').value;
  document.querySelector('.add-text').value = '';

  addToIncompleteList(inputText);
}


function deleteFromIncompleteList(target) {
  document.querySelector('.incomplete-list').removeChild(target);
}


function addToIncompleteList(text) {
  const li = document.createElement('li');
  li.className = 'list-row';

  const p = document.createElement('p');
  p.innerText = text;

  const completeButton = document.createElement('button');
  completeButton.innerText = '完了';
  completeButton.addEventListener('click', function() {

    deleteFromIncompleteList(completeButton.parentNode);

    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    addTarget.textContent = null;

    const p = document.createElement('p');
    p.innerText = text;

    const backButton = document.createElement('button');
    backButton.innerText = '戻す';
    backButton.addEventListener('click', function() {
      const deleteTarget = backButton.parentNode;
      document.querySelector('.complete-list').removeChild(deleteTarget);

      const text = backButton.parentNode.firstElementChild.innerText;
      addToIncompleteList(text);
    });

    addTarget.appendChild(p);
    addTarget.appendChild(backButton);
    document.querySelector('.complete-list').appendChild(addTarget);
  });

  const deleteButton = document.createElement('button');
  deleteButton.innerText = '削除';
  deleteButton.addEventListener('click', function() {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  document.querySelector('.incomplete-list').appendChild(li);
}



