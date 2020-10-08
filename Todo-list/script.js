var todoinput=document.getElementById('input');
var todobtn=document.getElementById('btnsubmit');
var todolist=document.getElementById('lists')

document.addEventListener("DOMContentLoaded", getto);
todobtn.addEventListener('click', addto);
todolist.addEventListener('click',delto)


function addto(e){
    e.preventDefault();
    //div
    let div=document.createElement('div');
    div.classList.add('divr')
    //li
    let li=document.createElement('li');
    li.innerText=todoinput.value;
    saveTo(todoinput.value);
    div.appendChild(li);
    //btn
    let btn=document.createElement('button');
    
    btn.innerHTML=`del`;
    btn.classList.add('btnremove')
    div.appendChild(btn);
    // main 
    todolist.appendChild(div);
    todoinput.value="";
}

function  delto(e){
    e.preventDefault();

    const item=e.target;
    if(item.classList[0]==="btnremove"){
        const items=item.parentElement;
        removeto(items);
        items.remove();
    } 
}

function saveTo(todo){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function getto(){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(idx => {
        let div=document.createElement('div');
        div.classList.add('divr')
        //li
        let li=document.createElement('li');
        li.innerText=idx;
        todoinput.value="";  
        div.appendChild(li);
        //btn
        let btn=document.createElement('button');
        
        btn.innerHTML=`del`;
        btn.classList.add('btnremove')
        div.appendChild(btn);
        // main 
        todolist.appendChild(div);
              
    });
}

function removeto(todo){
let todos;
if(localStorage.getItem('todos')===null){
    todos=[];
} else {
    todos=JSON.parse(localStorage.getItem('todos'));
}
let item=todo.children[0].innerText;
console.log(item)
todos.splice(todos.indexOf(item),1);
localStorage.setItem('todos',JSON.stringify(todos));
}
