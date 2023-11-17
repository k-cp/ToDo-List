import toDo from './toDo'

const popup = (() => {

    function hidePopup(){
        const popup = document.querySelector('.popup');
        event.preventDefault();
        popup.classList.toggle('hidden');
        this.parentNode.parentNode.reset();
    }
    
    function createPopup(){
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
        title.id = 'title';
    
        const date = document.createElement('input');
        date.type = 'date'
        date.required = true;
        date.name = 'date';
        date.placeholder = 'Date';
        date.id = 'date';

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
            const popup = document.querySelector('.popup');
    
            if (formData.get('date')) {
                let newEvent = new toDo.datedEvent(formData.get('title'), formData.get('date'));
                toDo.loadEventDiv(newEvent,this.parentNode.parentNode.childNodes[2].childNodes[0].classList[0]);
            }
            else {
                let newEvent = new toDo.nonDatedEvent(formData.get('title'), formData.get('date'));
                toDo.loadEventDiv(newEvent);
            }

            popup.classList.toggle('hidden');
            this.reset();


        })
    
        popup.appendChild(formTitle);
        popup.appendChild(form);
        
        return popup
    }
    
    function loadPopup(){
        const content = document.getElementById('content');
    
        content.appendChild(createPopup());
    }

    return {hidePopup, loadPopup}
})()

export default popup;