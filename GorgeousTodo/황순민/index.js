// localStorage에 초기 todo들 저장하기
var personal = ['Go exercise', 'Read books', 'Take a medicine', 'Clean my room'];
var personal2 = JSON.stringify(personal);
localStorage.setItem('Personal', personal2);

var study = ['Javascript', 'CSS'];
var study2 = JSON.stringify(study);
localStorage.setItem('Study', study2);

var project = ['MLRiver', 'GDSC'];
var project2 = JSON.stringify(project);
localStorage.setItem('Project', project2);

var helpme = ['CARROT'];
var helpme2 = JSON.stringify(helpme);
localStorage.setItem('Help Me', helpme2);

// DOM으로 category들에 요소들 넣어주기
window.addEventListener('DOMContentLoaded', (event) => {
    let category = document.getElementsByClassName('category');
    let under = document.getElementsByClassName('under-category');
    
    for (let i = 0; i < personal.length; i++) {
        let p = document.createElement('p');
        p.innerHTML = personal[i];
        p.className = 'category-todo';
        category[0].appendChild(p);
    }

    for (let i = 0; i < personal.length; i++) {
        let label = document.createElement('label');
        let input = document.createElement('input');
        input.type = "checkbox";
        input.value = personal[i];
        label.for = personal[i];
        label.innerHTML = personal[i];
        document.getElementsByClassName('cb')[0].appendChild(input);
        document.getElementsByClassName('cb')[0].appendChild(label);
    }

    for (let i = 0; i < study.length; i++) {
        let p = document.createElement('p');
        p.innerHTML = study[i];
        p.className = 'category-todo';
        category[1].appendChild(p);
    }

    for (let i = 0; i < study.length; i++) {
        let label = document.createElement('label');
        let input = document.createElement('input');
        input.type = "checkbox";
        input.value = study[i];
        label.for = study[i];
        label.innerHTML = study[i];
        document.getElementsByClassName('cb')[1].appendChild(input);
        document.getElementsByClassName('cb')[1].appendChild(label);
        // under[1].lastElementChild.insertBefore(label, document.getElementsByClassName('addmore')[1]);
    }

    for (let i = 0; i < project.length; i++) {
        let p = document.createElement('p');
        p.innerHTML = project[i];
        p.className = 'category-todo';
        category[2].appendChild(p);
    }

    for (let i = 0; i < project.length; i++) {
        let label = document.createElement('label');
        let input = document.createElement('input');
        input.type = "checkbox";
        input.value = project[i];
        label.for = project[i];
        label.innerHTML = project[i];
        document.getElementsByClassName('cb')[2].appendChild(input);
        document.getElementsByClassName('cb')[2].appendChild(label);
    }

    for (let i = 0; i < helpme.length; i++) {
        let p = document.createElement('p');
        p.innerHTML = helpme[i];
        p.className = 'category-todo';
        category[3].appendChild(p);
    }

    for (let i = 0; i < helpme.length; i++) {
        let label = document.createElement('label');
        let input = document.createElement('input');
        input.type = "checkbox";
        input.value = helpme[i];
        label.for = helpme[i];
        label.innerHTML = helpme[i];
        document.getElementsByClassName('cb')[3].appendChild(input);
        document.getElementsByClassName('cb')[3].appendChild(label);
    }

    document.getElementsByClassName('category')[0].addEventListener("click", firstCategory);
    
    document.body.addEventListener("click", invisible);

    function firstCategory() {
        document.querySelector('.under-category').style.top = "300px";
        document.body.value = "true";
        console.log(document.body.value);
    }

    function invisible() {
        if (document.body.value == "true") {
            document.querySelector('.under-category').style.top = "800px";
            document.body.value = "false";
            console.log(document.body.value);
        }
    }
})