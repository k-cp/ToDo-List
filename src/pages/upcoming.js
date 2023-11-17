import toDo from "../functions/toDo";

const upcoming = (() => {
    function createUpcoming(){
        let type = 'upcoming';

        const upcomingMain = document.createElement('div');
        upcomingMain.classList.add('upcoming');
        const upcomingTitle = document.createElement('h2');
        upcomingTitle.textContent = 'Upcoming';
        upcomingMain.appendChild(upcomingTitle);
        const toDoList = document.createElement('div');
        toDoList.classList.add('toDoList');
        upcomingMain.appendChild(toDo.loadEvents(type, toDoList));
    
    
        return upcomingMain
    }
    
    function loadUpcoming(){
        const main = document.getElementById('main');
        main.textContent = '';
        main.appendChild(createUpcoming());
    }

    return {loadUpcoming}
})()


export default upcoming