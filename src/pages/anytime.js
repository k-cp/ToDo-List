
const anytime = (() => {
    function createAnytime(){

        const anytimeMain = document.createElement('div');
        anytimeMain.classList.add('anytime');
        const anytimeTitle = document.createElement('h2');
        anytimeTitle.textContent = 'Anytime';
        anytimeMain.appendChild(anytimeTitle);
        const toDoList = document.createElement('div');
        toDoList.classList.add('toDoList');
        anytimeMain.appendChild(toDoList);
    
    
        return anytimeMain
    }
    
    function loadAnytime (){
        const main = document.getElementById('main');
        main.textContent = '';
        main.appendChild(createAnytime());
    }

    return {loadAnytime}
})()



export default anytime