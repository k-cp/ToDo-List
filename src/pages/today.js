

const createToday = function(){

    const todayMain = document.createElement('div');
    const todayTitle = document.createElement('h2');
    todayTitle.textContent = 'Today';
    todayMain.appendChild(todayTitle);
    const toDoList = document.createElement('div');
    toDoList.classList.add('toDoList');
    todayMain.appendChild(toDoList);

    return todayMain
}

const loadToday = function(){
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createToday());
}

export default loadToday