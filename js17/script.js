// const title = document.querySelector('.title');
// title.style.color = 'red';

// const btn = document.querySelector('.button');
// btn.style.backgroundColor = 'skyblue';
// btn.style.color = 'white';
// btn.style.padding = '10px 20px';
// btn.style.borderRadius = '20px';


const allLinks = document.querySelectorAll('ul a');
allLinks.forEach (link => {
    const href = link.getAttribute('href');
    if (href.startsWith('http') || href.startsWith('ftp') ){
        link.style.color = 'orange'
    }
        
});

const firstLinkList = allLinks[0];
const lastLinkList = allLinks[allLinks.length -1];

firstLinkList.classList.add('first-linklist')
lastLinkList.classList.add('last-linklist')

const title = document.querySelector('h1');
title.textContent = 'Hi'
title.classList.add('had-title')