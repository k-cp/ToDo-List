import { format } from 'date-fns'

const toDo = (() => {
    let toDoList = [];
    
    class event {
        constructor(title) {
            this.title = title;
            this.progress = 'Not started';
            this.tasks = [];
        }
    }

    class datedEvent extends event {
        constructor(title, date) {
            super(title);
            this.date = date;
        }
    }

    class nonDatedEvent extends event {
        constructor(title, period) {
            super(title);
            this.period = period;
        }
    }

    function createEventDiv(newEvent){
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');

        const eventTitle = document.createElement('h3');
        eventTitle.textContent = newEvent.title;

        const eventDate = document.createElement('div');
        eventDate.textContent = `Date: ${newEvent.date}`;

        const eventProgress = document.createElement('div');
        eventProgress.textContent = `Progress: ${newEvent.progress}`;

        const eventDescription = document.createElement('p');
        eventDescription.textContent = newEvent.tasks;

        const eventEdit = document.createElement('div')
        const editIcon = document.createElement('i');
        eventEdit.classList.add('editBtn');
        editIcon.classList.add('bx');
        editIcon.classList.add('bxs-edit-alt');
        const editText = document.createElement('p');
        editText.textContent = 'Edit';

        eventDiv.addEventListener('mouseover', function (){
            eventEdit.style.zIndex = '2';
            eventEdit.style.transform = 'scale(1.1)';
        })
        eventDiv.addEventListener('mouseout', function (){
            eventEdit.style.zIndex = '-1';
            eventEdit.style.transform = 'scale(1)';
        })

        eventEdit.addEventListener('click', function(){
            editEventDiv();
        })

        eventEdit.appendChild(editIcon);
        eventEdit.appendChild(editText);
        eventDiv.appendChild(eventTitle);
        eventDiv.appendChild(eventDate);
        eventDiv.appendChild(eventProgress);
        eventDiv.appendChild(eventDescription);
        eventDiv.appendChild(eventEdit);

        return eventDiv

    }

    function loadEventDiv(newEvent, type){

        const indexToInsert = toDoList.findIndex(obj => obj.date > newEvent.date);
        // If no specific index found, push it to the end
        if (indexToInsert === -1) {
        toDoList.push(newEvent);
        } 
        else {
        toDoList.splice(indexToInsert, 0, newEvent);
        }
        if (checkType(newEvent, type)) {
            //need to append element at the right place
            const eventContainer = document.querySelector('.toDoList');
            let displayedEvents = eventContainer.childNodes;
            let displayedEventsList = Array.from(displayedEvents);
    
            if (displayedEventsList.length !== 0) {
                for (let eventToDo of displayedEventsList) {
                    if (eventToDo.children[1].textContent.slice(6) > newEvent.date) {
                        const nthChild = eventContainer.children[displayedEventsList.indexOf(eventToDo)];
                        eventContainer.insertBefore(createEventDiv(newEvent), nthChild);
                        return
                    }
                }
                eventContainer.appendChild(createEventDiv(newEvent));
                return
            }
            else {
                eventContainer.appendChild(createEventDiv(newEvent));
                return
            }
        }
    }

    function editEventDiv(){
        const editPopup = document.createElement('div');
        
    }

    function loadEvents(type, divElement){
        if (type == 'today'){
            for (let eventToDo of toDoList) {
                if (eventToDo instanceof datedEvent && eventToDo.date == format(new Date(), 'yyyy-MM-dd')) {
                    divElement.appendChild(createEventDiv(eventToDo));
                }
            }
        }
        else if (type == 'inProgress') {
            for (let eventToDo of toDoList) {
                if (eventToDo.progress == 'Started') {
                    divElement.appendChild(createEventDiv(eventToDo));
                }
            } 
        }
        else if (type == 'upcoming') {
            for (let eventToDo of toDoList) {
                if (eventToDo.date > format(new Date(), 'yyyy-MM-dd')) {
                    divElement.appendChild(createEventDiv(eventToDo));
                }
            } 
        }
        else if (type == 'past') {
            for (let eventToDo of toDoList) {
                if (eventToDo.date < format(new Date(), 'yyyy-MM-dd')) {
                    divElement.appendChild(createEventDiv(eventToDo));
                }
            } 
        }
        else if (type == 'someday') {
            for (let eventToDo of toDoList) {
                if (eventToDo instanceof nonDatedEvent) {
                    divElement.appendChild(createEventDiv(eventToDo));
                }
            } 
        }
        else if (type == 'anytime') {
            for (let eventToDo of toDoList) {
                if (eventToDo instanceof nonDatedEvent) {
                    divElement.appendChild(createEventDiv(eventToDo));
                }
            } 
        }
        else if (type == 'done') {
            for (let eventToDo of toDoList) {
                if (eventToDo.progress == 'Done') {
                    divElement.appendChild(createEventDiv(eventToDo));
                }
            } 
        }
        

        return divElement
    }

    function deleteEvent(){
        const  ewf = 4
    }

    function checkType(event, type){
        //checks if the element should matches the current page
        if (type == 'today' && event.date == format(new Date(), 'yyyy-MM-dd')) {
            return true
        }
        else if (type == 'inProgress' && event.progress == 'In progress') {
            return true
        }
        else if (type == 'upcoming' && event.date > format(new Date(), 'yyyy-MM-dd')) {
            return true
        }
        else if (type == 'past' && event.date < format(new Date(), 'yyyy-MM-dd')) {
            return true
        }
        else if (type == 'someday' && event instanceof nonDatedEvent) {
            return true
        }
        else if (type == 'anytime' && event instanceof nonDatedEvent) {
            return true
        }
        else if (type == 'done' && event.progress == 'Done') {
            return true
        }
        return false
    }

    return {event, datedEvent, nonDatedEvent, loadEventDiv, loadEvents}

})();

export default toDo

