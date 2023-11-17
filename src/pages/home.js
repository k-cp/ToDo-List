import navBar from "./navbar";
import today from "./today";
import inProgess from "./inProgess";
import upcoming from "./upcoming";
import past from "./past";
import someday from "./someday";
import anytime from "./anytime";
import done from "./done";
import popup from "../functions/popup";

const home = (() => {
    function createHome(){
        const home = document.getElementById('content');
    
        const sideNav = document.createElement('div');
        sideNav.id = 'sideNav';
    
        const relevant = document.createElement('div');
        relevant.classList.add('relevant');
    
        const todayDiv = document.createElement('div');
        const todayIcon = document.createElement('i');
        todayIcon.classList.add('bx');
        todayIcon.classList.add('bxs-calendar-event');
        todayDiv.appendChild(todayIcon);
        todayDiv.innerHTML += 'Today';
        todayDiv.addEventListener('click', today.loadToday);
    
        const inProgressDiv = document.createElement('div');
        const inProgressIcon = document.createElement('i');
        inProgressIcon.classList.add('bx');
        inProgressIcon.classList.add('bxs-hourglass');
        inProgressDiv.appendChild(inProgressIcon);
        inProgressDiv.innerHTML += 'In Progress';
        inProgressDiv.addEventListener('click', inProgess.loadInProgress);
    
        const upcomingDiv = document.createElement('div');
        const upcomingIcon = document.createElement('i');
        upcomingIcon.classList.add('bx');
        upcomingIcon.classList.add('bxs-alarm-exclamation');
        upcomingDiv.appendChild(upcomingIcon);
        upcomingDiv.innerHTML += 'Upcoming';
        upcomingDiv.addEventListener('click', upcoming.loadUpcoming);

        const pastDiv = document.createElement('div');
        const pastIcon = document.createElement('i');
        pastIcon.classList.add('bx');
        pastIcon.classList.add('bxs-calendar-exclamation');
        pastDiv.appendChild(pastIcon);
        pastDiv.innerHTML += 'Past...';
        pastDiv.addEventListener('click', past.loadPast);
    
        const somedayDiv = document.createElement('div');
        const somedayIcon = document.createElement('i');
        somedayIcon.classList.add('bx');
        somedayIcon.classList.add('bxs-hourglass-bottom');
        somedayDiv.appendChild(somedayIcon);
        somedayDiv.innerHTML += 'Someday';
        somedayDiv.addEventListener('click', someday.loadSomeday);
    
        const anytimeDiv = document.createElement('div');
        const anytimeIcon = document.createElement('i');
        anytimeIcon.classList.add('bx');
        anytimeIcon.classList.add('bxs-timer');
        anytimeDiv.appendChild(anytimeIcon);
        anytimeDiv.innerHTML += 'Anytime'
        anytimeDiv.addEventListener('click', anytime.loadAnytime);
    
        const doneDiv = document.createElement('div');
        const doneIcon = document.createElement('i');
        doneIcon.classList.add('bx');
        doneIcon.classList.add('bxs-calendar-check');
        doneDiv.appendChild(doneIcon);
        doneDiv.innerHTML += 'Done';
        doneDiv.addEventListener('click', done.loadDone);
    
        relevant.appendChild(todayDiv);
        relevant.appendChild(inProgressDiv);
        relevant.appendChild(upcomingDiv);
        relevant.appendChild(pastDiv);
        relevant.appendChild(somedayDiv);
        relevant.appendChild(anytimeDiv);
        relevant.appendChild(doneDiv);
        sideNav.appendChild(relevant);
    
        const main = document.createElement('div');
        main.id = 'main';
    
        const addBtn = document.createElement('input');
        addBtn.classList.add('addBtn');
        addBtn.type = 'button';
        addBtn.value = '+';
    
    
        const  openPopup = function(){
            const popup = document.querySelector('.popup');
            if (popup.classList.contains('hidden')) {
                popup.classList.toggle('hidden')
            }
        }
    
        addBtn.onclick = openPopup;
    
        navBar.loadNavBar();
        home.appendChild(sideNav);
        home.appendChild(main);
        home.appendChild(addBtn);
    }
    
    
    function loadHome(){
        const home = document.getElementById('content');
        home.textContent = '';
        createHome();
        today.loadToday();
        popup.loadPopup();
    }

    return {loadHome}
})()


export default home