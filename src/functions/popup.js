import toDo from './createToDo'


const hidePopup = function(){

    const popup = document.querySelector('.popup');
    event.preventDefault();
    popup.classList.toggle('hidden');
}

const createPopup = function (){

    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.classList.add('hidden');

    const formTitle = document.createElement('h2');
    formTitle.textContent = 'New reminder';

    const form = document.createElement('form');
    form.id = 'form';

    const title = document.createElement('input');
    title.type = 'text';
    title.required = true;
    title.name = 'title';
    title.placeholder = 'Title';

    const date = document.createElement('input');
    date.type = 'date'
    date.required = true;
    date.name = 'date';
    date.placeholder = 'Date';

    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');
    titleLabel.textContent = 'Title';

    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'date');
    dateLabel.textContent = 'Date';

    const buttons = document.createElement('div');
    buttons.classList.add('buttons');

    const submitBtn = document.createElement('input');
    submitBtn.type = 'submit';

    const cancelBtn = document.createElement('button');
    cancelBtn.onclick = hidePopup;
    cancelBtn.textContent = 'Cancel';

    buttons.appendChild(submitBtn);
    buttons.appendChild(cancelBtn);


    form.appendChild(titleLabel);
    form.appendChild(title);
    form.appendChild(dateLabel);
    form.appendChild(date);
    form.appendChild(buttons);

    form.addEventListener('submit', function (e){
        e.preventDefault();
        const formData = new FormData(e.target);

        const event = new toDo.event(formData.get('title'), formData.get('date'));

        console.log(event)

    })

    popup.appendChild(formTitle);
    popup.appendChild(form);
    
    return popup
}

const loadPopup = function(){
    const content = document.getElementById('content');

    content.appendChild(createPopup());
}

export default loadPopup;