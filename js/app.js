var listArr = [];
function List(task, date) {
  this.task = task;
  this.date = date;
  listArr.push(this);
}
var submission = document.getElementById('submission');
var form = document.getElementById('myform');
submission.addEventListener('click', submitForm);
function submitForm(event) {
  event.preventDefault();
  var task = document.getElementById('task').value;
  var date = document.getElementById('datewanted').value;
//   console.log(task, date);
  var newTask = new List(task,date);
  console.log(newTask);
  console.log(listArr);
  form.reset();
  setFormData();
  showList();

}
function setFormData() {
  localStorage.setItem('formData', JSON.stringify(listArr));
}
setFormData();

function getFormData(){
    if (localStorage) {
        localStorage.getItem(JSON.parse('formData'));

    }
}
getFormData();


function showList(){
    var rightDiv=document.getElementById('rightdiv');
    var newList=document.createElement('ul');
    rightDiv.appendChild(newList);
    var newListItem=document.createElement('li');
    newList.appendChild(newListItem);
}
