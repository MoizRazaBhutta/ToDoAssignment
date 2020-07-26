var listitem=document.getElementById('list')

function addTodo(){
    var todo=document.getElementById('todo-item')
    
    //Create li tag with text node
    var li=document.createElement('li')
    var liT=document.createTextNode(todo.value)
    li.setAttribute('class','listitem')
    li.appendChild(liT)
    

    //Create delete button
    var delBtn=document.createElement('button')
    var delText=document.createTextNode("DELETE")
    delBtn.setAttribute('class','btn')
    delBtn.setAttribute('onclick','deleteItem(this)')
    delBtn.appendChild(delText)
    li.appendChild(delBtn)

    //Create Edit Button
    var editBtn=document.createElement('button')
    var editT=document.createTextNode('EDIT')
    editBtn.appendChild(editT)
    editBtn.setAttribute('class','btn')
    editBtn.setAttribute('onclick','editItem(this);')
    li.appendChild(editBtn)
    
    list.appendChild(li)
    todo.value=''
}

function deleteItem(e){
    e.parentNode.remove()
}

function deleteAll(){
    list.innerHTML = ''
}

function editItem(f){
    // console.log(f.parentNode.childNodes[0])
    var val=f.parentNode.firstChild.nodeValue
    var editValue=prompt('Enter Edit Value',val)
    f.parentNode.firstChild.nodeValue=editValue
}