

const createUpcoming = function(){

    const upcomingMain = document.createElement('div');
    const upcomingTitle = document.createElement('h2');
    upcomingTitle.textContent = 'Upcoming';
    upcomingMain.appendChild(upcomingTitle);
    const toDoList = document.createElement('div');
    toDoList.classList.add('toDoList');
    upcomingMain.appendChild(toDoList);


    return upcomingMain
}

const loadUpcoming = function(){
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createUpcoming());
}

export default loadUpcoming