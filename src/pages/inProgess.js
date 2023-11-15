

const createInProgress = function(){

    const inProgressMain = document.createElement('div');
    const inProgressTitle = document.createElement('h2');
    inProgressTitle.textContent = 'In Progress';
    inProgressMain.appendChild(inProgressTitle);
    const toDoList = document.createElement('div');
    toDoList.classList.add('toDoList');
    inProgressMain.appendChild(toDoList);


    return inProgressMain
}

const loadInProgress = function(){
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createInProgress());
}

export default loadInProgress