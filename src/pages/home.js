import loadNavBar from "./navbar";
import loadToday from "./today";
import loadInProgress from "./inProgess";
import loadUpcoming from "./upcoming";
import loadSomeday from "./someday";
import loadAnytime from "./anytime";
import loadDone from "./done";
import popup from "../functions/popup";

const createHome = function(){
    const home = document.getElementById('content');

    const sideNav = document.createElement('div');
    sideNav.id = 'sideNav';

    const relevant = document.createElement('div');
    relevant.classList.add('relevant');

    const today = document.createElement('div');
    const todayIcon = document.createElement('i');
    todayIcon.classList.add('bx');
    todayIcon.classList.add('bxs-calendar-event');
    today.appendChild(todayIcon);
    today.innerHTML += 'Today';
    today.addEventListener('click', loadToday);

    const inProgress = document.createElement('div');
    const inProgressIcon = document.createElement('i');
    inProgressIcon.classList.add('bx');
    inProgressIcon.classList.add('bxs-hourglass');
    inProgress.appendChild(inProgressIcon);
    inProgress.innerHTML += 'In Progress';
    inProgress.addEventListener('click', loadInProgress);

    const upcoming = document.createElement('div');
    const upcomingIcon = document.createElement('i');
    upcomingIcon.classList.add('bx');
    upcomingIcon.classList.add('bxs-alarm-exclamation');
    upcoming.appendChild(upcomingIcon);
    upcoming.innerHTML += 'Upcoming';
    upcoming.addEventListener('click', loadUpcoming);

    const someday = document.createElement('div');
    const somedayIcon = document.createElement('i');
    somedayIcon.classList.add('bx');
    somedayIcon.classList.add('bxs-hourglass-bottom');
    someday.appendChild(somedayIcon);
    someday.innerHTML += 'Someday';
    someday.addEventListener('click', loadSomeday);

    const anytime = document.createElement('div');
    const anytimeIcon = document.createElement('i');
    anytimeIcon.classList.add('bx');
    anytimeIcon.classList.add('bxs-timer');
    anytime.appendChild(anytimeIcon);
    anytime.innerHTML += 'Anytime'
    anytime.addEventListener('click', loadAnytime);

    const done = document.createElement('div');
    const doneIcon = document.createElement('i');
    doneIcon.classList.add('bx');
    doneIcon.classList.add('bxs-calendar-check');
    done.appendChild(doneIcon);
    done.innerHTML += 'Done';
    done.addEventListener('click', loadDone);

    relevant.appendChild(today);
    relevant.appendChild(inProgress);
    relevant.appendChild(upcoming);
    relevant.appendChild(someday);
    relevant.appendChild(anytime);
    relevant.appendChild(done);
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

    loadNavBar();
    home.appendChild(sideNav);
    home.appendChild(main);
    home.appendChild(addBtn);
}


const loadHome = function(){
    const home = document.getElementById('content');
    home.textContent = '';
    createHome();
    loadToday();
    popup.loadPopup();
}

export default loadHome