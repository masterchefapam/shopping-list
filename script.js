const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');



addItem = (e) => {
e.preventDefault();

const newItem = itemInput.value;

//validation

if(newItem === ''){
  alert('Please Dont leave it blank!');
  return;
}
//Create List
const li = document.createElement('li');
li.appendChild(document.createTextNode(newItem));
const button = createButton('remove-item btn-link text-red');

li.appendChild(button);
itemList.appendChild(li);
itemInput.value = '';
}

createButton = (classes)=>{
 const button = document.createElement('button');
 button.className = classes;
 const icon = createIcon('fa-solid fa-xmark');
 button.appendChild(icon);
 return button;
}

createIcon = (classes) => {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}



itemForm.addEventListener('submit', addItem);