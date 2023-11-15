const createNavBar = function (){
    const navBar = document.createElement('header');
    navBar.id = 'navBar';

    const navBarLeft = document.createElement('div');
    navBarLeft.classList.add('navBarLeft');
    const menu = document.createElement('div');
    menu.classList.add('menu');
    const menuIcon = document.createElement('i');
    menuIcon.classList.add('bx');
    menuIcon.classList.add('bx-menu');
    menu.appendChild(menuIcon);

    const searchBar = document.createElement('input');
    searchBar.classList.add('searchBar');
    searchBar.type = 'text';
    searchBar.placeholder = 'Search';
    navBarLeft.appendChild(menu);
    navBarLeft.appendChild(searchBar);

    const navBarRight = document.createElement('div');
    navBarRight.classList.add('navBarRight');
    const notif = document.createElement('div');
    notif.classList.add('notif');
    const notifIcon = document.createElement('i');
    notifIcon.classList.add('bx');
    notifIcon.classList.add('bx-bell');
    notif.appendChild(notifIcon);
    const profile = document.createElement('div');
    profile.classList.add('profile');
    const profileIcon = document.createElement('i');
    profileIcon.classList.add('bx');
    profileIcon.classList.add('bxs-user-circle');
    profile.appendChild(profileIcon);
    navBarRight.appendChild(notif);
    navBarRight.appendChild(profile);

    navBar.appendChild(navBarLeft);
    navBar.appendChild(navBarRight);

    return navBar
}

const loadNavBar = function (){
    const content = document.getElementById('content');
    content.appendChild(createNavBar());
}

export default loadNavBar