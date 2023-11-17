import toDo from "../functions/toDo";

const inProgress = (() => {
    function createInProgress(){
        let type = 'inProgress';

        const inProgressMain = document.createElement('div');
        inProgressMain.classList.add('inProgress');
        const inProgressTitle = document.createElement('h2');
        inProgressTitle.textContent = 'In Progress';
        inProgressMain.appendChild(inProgressTitle);
        const toDoList = document.createElement('div');
        toDoList.classList.add('toDoList');
        inProgressMain.appendChild(toDo.loadEvents(type, toDoList));
    
    
        return inProgressMain
    }
    
    function loadInProgress(){
        const main = document.getElementById('main');
        main.textContent = '';
        main.appendChild(createInProgress());
    }

    return {loadInProgress}
})()


export default inProgress