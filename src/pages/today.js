import toDo from "../functions/toDo";

const today = (() => {
    function createToday(){
        let type = 'today';

        const todayMain = document.createElement('div');
        todayMain.classList.add('today');
        const todayTitle = document.createElement('h2');
        todayTitle.textContent = 'Today';
        todayMain.appendChild(todayTitle);
        const toDoList = document.createElement('div');
        toDoList.classList.add('toDoList');
        todayMain.appendChild(toDo.loadEvents(type, toDoList));

    
        return todayMain
    }
    
    function loadToday (){
        const main = document.getElementById('main');
        main.textContent = '';
        main.appendChild(createToday());
    }

    return {loadToday}
})()


export default today