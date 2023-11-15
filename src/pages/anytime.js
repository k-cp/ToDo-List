

const createAnytime = function(){

    const anytimeMain = document.createElement('div');
    const anytimeTitle = document.createElement('h2');
    anytimeTitle.textContent = 'Anytime';
    anytimeMain.appendChild(anytimeTitle);
    const toDoList = document.createElement('div');
    toDoList.classList.add('toDoList');
    anytimeMain.appendChild(toDoList);


    return anytimeMain
}

const loadAnytime = function(){
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createAnytime());
}

export default loadAnytime