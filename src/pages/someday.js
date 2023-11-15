

const createSomeday = function(){

    const somedayMain = document.createElement('div');
    const somedayTitle = document.createElement('h2');
    somedayTitle.textContent = 'Someday';
    somedayMain.appendChild(somedayTitle);
    const toDoList = document.createElement('div');
    toDoList.classList.add('toDoList');
    somedayMain.appendChild(toDoList);


    return somedayMain
}

const loadSomeday = function(){
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createSomeday());
}

export default loadSomeday