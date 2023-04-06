'use strict';

// console.log(document.body);

// const pippoTag = document.getElementById('pippo');

// console.log(pippoTag);



// const mainDiv = document.getElementById('main-div');      //papa

// const newP = document.createElement('p');    //figlio

// const text= document.createTextNode('Attento, Non premere è pericoloso'); // nipote

// newP.appendChild(text);         // text lo voglio mettere dentro a newP

// mainDiv.appendChild(newP);      // newP lo voglio mettere dentro a mainDiv

/////////////////////////////////////////////////////////////////////
//ToDo

//  ▬▬▬▬▬▬▬▬▬▬▬▬ LISTA ▬▬▬▬▬▬▬▬▬▬▬▬ 
function displayList(array) {

    document.getElementById('main-list').innerHTML = ''

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        console.log(element);

        const mainList = document.getElementById('main-list');
        const newLi = document.createElement('li');
        const textLi = document.createTextNode(element);
        const doneButtom = document.createElement('button');
        const buttonText = document.createTextNode('☺');
    
        doneButtom.appendChild(buttonText);
        doneButtom.addEventListener('click',(event)=>removeToDo(element));

        newLi.appendChild(textLi);          //push
        newLi.appendChild(doneButtom);
        mainList.appendChild(newLi);        //push
    }
}

const toDos = ['studiare javascript', 'esercitarmi  su code wars', 'ripetere la scacchiera', 'fizzbuzz forever']
displayList(toDos)



//  ▬▬▬▬▬▬▬▬▬▬▬▬ Aggiungi ToDo ▬▬▬▬▬▬▬▬▬▬▬▬ 

function addButtonPressed() {
    const input = document.getElementById('todo-input');
    if(input.value!=''){
    const newToDo = input.value;
    toDos.push(newToDo);
    displayList(toDos)
    input.value = ''
    }
}

//  ▬▬▬▬▬▬▬▬▬▬▬▬ Rimuovi ToDo ▬▬▬▬▬▬▬▬▬▬▬▬ 

function removeToDo(todo){
    const todoIndex = toDos.indexOf(todo);
    toDos.splice(todoIndex,1);
    displayList(toDos)

}