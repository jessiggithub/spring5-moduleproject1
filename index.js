// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card
const allLinks = document.getElementsByTagName('a');
const allCards = document.getElementsByClassName('card');
const logoTitleOld = document.getElementById('logoTitle');
// A- finding across the entire DOM
const header = document.querySelector('header');
const logoTitle = document.querySelector('#logoTitle');
const firstCard = document.querySelector('.card');
// B- finding within one particular element
const imageFirstCard = firstCard.querySelector('img');
const titleFirstCard = firstCard.querySelector('h2');
const subtitleFirstCard = firstCard.querySelector('h3');
const textFirstCard = firstCard.querySelector('p');
// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling;
const link2FirstCard = link1FirstCard.nextElementSibling;


// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
// B- Loop over the links and console.log their text content
// C- Turn the collection of links into a real array
// D- Use .filter to find the anchor tag with the textContent of "Home"
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => console.log(link.textContent));
const navLinksArray = Array.from(navLinks);
const homeLink = navLinksArray.filter(link => link.textContent === 'Home');

// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
//  B- Have the students research online the difference between textContent and innerText
titleFirstCard.textContent = 'Dog title';
subtitleFirstCard.textContent = 'Dog subtitle';
textFirstCard.textContent = 'Dog-related text';
// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
//  B- Using .setAttribute to change a few attributes
logoTitle.id = 'newLogoTitle';
imageFirstCard.src = https://th.bing.com/th/id/OIP.WMVKsbjyIsUlod10zRwArgHaF6?w=214&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7;
link1FirstCard.setAttribute('href', 'https://search.yahoo.com/yhs/search;_ylt=AwrhdvrG7jtmFvchTNwPxQt.;_ylc=X1MDMjExNDcwMDU1OQRfcgMyBGZyA3locy1mYy05MARmcjIDc2ItdG9wBGdwcmlkA1h0cmh2NFNZUm8uQmM4aE9ld2g4WUEEbl9yc2x0AzAEbl9zdWdnAzEwBG9yaWdpbgNzZWFyY2gueWFob28uY29tBHBvcwMwBHBxc3RyAwRwcXN0cmwDMARxc3RybAMyMARxdWVyeQNpbWFnZW5lcyUyMGRlJTIwcGVycml0b3MEdF9zdG1wAzE3MTUyMDM4NDM-?p=imagenes+de+perritos&fr2=sb-top&hspart=fc&hsimp=yhs-90&param1=7&param2=eJwti80KgzAQhF9ljwqiG42x0WufoFfxEGOqIdGIP1j69F2hLMw3Ozs72qFtuteTIXLJZJt0C%2B2MeOcETZDyPtiVbC4Qa1aR8AeJHEiU1qzu0ahasILyqqL2aALVz53sqcjN4Wu9V1mZIkSXXYZw7bAcwDDFBigQvIGP4DGodfXmMr2zR1YWVVoIiNx0zD4Bb52B0WgXYtDTFmaTsZyneA%2Fs6q02%2B3%2F5AdkcP84%3D&type=fc_AA30D90E577_s69_g_e_d_n1_c999')

// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
//  B- By manipulating inline styles on the element
firstCard.classList.add('new-card-style');
firstCard.style.color = 'blue';

// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const blogLink = document.createElement('a');
blogLink.textContent = 'Blog';
document.querySelector('nav').appendChild(blogLink);

// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
const cardCopy = firstCard.cloneNode(true);
document.querySelector('.card-group').appendChild(cardCopy)

// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]
const removedCard = document.querySelector('.card-group').removeChild(textFirstCard);
document.querySelector('.card-group').appendChild(removedCard);

// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
firstCard.insertAdjacentHTML('beforeend', '<p>New content</p>');