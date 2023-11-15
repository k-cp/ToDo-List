

const createDone = function(){

    const doneMain = document.createElement('div');
    const doneTitle = document.createElement('h2');
    doneTitle.textContent = 'Done';
    doneMain.appendChild(doneTitle);
    const toDoList = document.createElement('div');
    toDoList.classList.add('toDoList');
    doneMain.appendChild(toDoList);


    return doneMain
}

const loadDone = function(){
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createDone());
}

export default loadDone