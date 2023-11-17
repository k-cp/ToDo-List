
const somdeday = (() => {
    function createSomeday (){

        const somedayMain = document.createElement('div');
        somedayMain.classList.add('someday');
        const somedayTitle = document.createElement('h2');
        somedayTitle.textContent = 'Someday';
        somedayMain.appendChild(somedayTitle);
        const toDoList = document.createElement('div');
        toDoList.classList.add('toDoList');
        somedayMain.appendChild(toDoList);
    
    
        return somedayMain
    }
    
    function loadSomeday(){
        const main = document.getElementById('main');
        main.textContent = '';
        main.appendChild(createSomeday());
    }

    return {loadSomeday}
})()



export default somdeday