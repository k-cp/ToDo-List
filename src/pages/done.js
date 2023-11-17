
const done = (() => {
    function createDone(){

        const doneMain = document.createElement('div');
        doneMain.classList.add('done');
        const doneTitle = document.createElement('h2');
        doneTitle.textContent = 'Done';
        doneMain.appendChild(doneTitle);
        const toDoList = document.createElement('div');
        toDoList.classList.add('toDoList');
        doneMain.appendChild(toDoList);
    
    
        return doneMain
    }
    
    function loadDone(){
        const main = document.getElementById('main');
        main.textContent = '';
        main.appendChild(createDone());
    }

    return {loadDone}
})()


export default done