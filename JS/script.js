let metaUTF8 = document.createElement('meta');
metaUTF8.setAttribute('charset', 'UTF-8');
document.head.appendChild(metaUTF8);

let metaEquiv = document.createElement('meta');
metaEquiv.setAttribute('http-equiv', 'X-UA-Compatible');
metaEquiv.setAttribute('content', 'IE=edge');
document.head.appendChild(metaEquiv);

let metaView = document.createElement('meta');
metaView.setAttribute('name', 'viewport');
metaView.setAttribute('content', 'width=device-width, initial-scale=1.0');
document.head.appendChild(metaView);

let metaAuthor = document.createElement('meta');
metaAuthor.setAttribute('name', 'Маша Пархомович');
document.head.appendChild(metaAuthor);

let title = document.createElement('title');
title.innerHTML = 'Document';
document.head.appendChild(title);

let style = document.createElement('link');
style.setAttribute('rel', 'stylesheet');
style.setAttribute('href', './CSS/style.css');
document.head.appendChild(style);

let fonts1 = document.createElement('link');
fonts1.setAttribute('rel', 'preconnect');
fonts1.setAttribute('href', 'https://fonts.googleapis.com');
document.head.appendChild(fonts1);

let fonts2 = document.createElement('link');
fonts2.setAttribute('rel', 'preconnect');
fonts2.setAttribute('href', 'https://fonts.gstatic.com');
fonts2.setAttribute('crossorigin', '');
document.head.appendChild(fonts2);

let fonts3 = document.createElement('link');
fonts3.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat:wght@700&family=Open+Sans&display=swap" rel="stylesheet');
document.head.appendChild(fonts3);

let section = document.createElement('section');
section.classList.add('section');
document.body.appendChild(section);

let divContainer = document.createElement('div');
divContainer.classList.add('container');
section.appendChild(divContainer);

let h1 = document.createElement('h1');
h1.classList.add('title');
h1.innerHTML = 'Choose Your Option';
section.appendChild(h1);

let pMain = document.createElement('p');
pMain.classList.add('desc');
pMain.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
section.appendChild(pMain);

let divList = document.createElement('div');
divList.classList.add('list');
section.appendChild(divList);

let divItemFirst = document.createElement('div');
divItemFirst.classList.add('item__first');
divList.appendChild(divItemFirst);

let divItemSecond = document.createElement('div');
divItemSecond.classList.add('item__second');
divList.appendChild(divItemSecond);

let h3First = document.createElement('h3');
h3First.classList.add('desc__main');
h3First.innerHTML = 'FREELANCER';
divItemFirst.appendChild(h3First);

let h2First = document.createElement('h2');
h2First.classList.add('title');
h2First.innerHTML = 'Initially designed to';
divItemFirst.appendChild(h2First);

let pFirst = document.createElement('p');
pFirst.classList.add('desc');
pFirst.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
divItemFirst.appendChild(pFirst);

let buttonFirst = document.createElement('button');
buttonFirst.classList.add('desc__main');
buttonFirst.classList.add('button');
buttonFirst.classList.add('button-black');
buttonFirst.innerHTML = 'START HERE';
divItemFirst.appendChild(buttonFirst);

let h3Second = document.createElement('h3');
h3Second.classList.add('desc__main');
h3Second.classList.add('desc__main-yellow');
h3Second.innerHTML = 'STUDIO';
divItemSecond.appendChild(h3Second);

let h2Second = document.createElement('h2');
h2Second.classList.add('title');
h2Second.classList.add('white');
h2Second.innerHTML = 'Initially designed to';
divItemSecond.appendChild(h2Second);

let pSecond = document.createElement('p');
pSecond.classList.add('desc');
pSecond.classList.add('white');
pSecond.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
divItemSecond.appendChild(pSecond);

let buttonSecond = document.createElement('button');
buttonSecond.classList.add('desc__main');
buttonSecond.classList.add('button');
buttonSecond.classList.add('white');
buttonSecond.innerHTML = 'START HERE';
divItemSecond.appendChild(buttonSecond);