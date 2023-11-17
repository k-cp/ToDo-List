import toDo from "../functions/toDo";

const past = (() => {
    function createPast(){
        let type = 'past';

        const pastMain = document.createElement('div');
        pastMain.classList.add('past');
        const pastTitle = document.createElement('h2');
        pastTitle.textContent = 'Past...';
        pastMain.appendChild(pastTitle);
        const toDoList = document.createElement('div');
        toDoList.classList.add('toDoList');
        pastMain.appendChild(toDo.loadEvents(type, toDoList));

    
        return pastMain
    }
    
    function loadPast (){
        const main = document.getElementById('main');
        main.textContent = '';
        main.appendChild(createPast());
    }

    return {loadPast}
})()


export default past