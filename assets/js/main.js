/*
** Author: Abdallah Mohammed
** Theme: Badr City
** Version: 1.0.0
*/

/*-----------
Scroll Header
 -----------*/
/*
 var headerShadow = document.getElementById('header-fixed');

window.onscroll = function () {

    if ( document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ) {
        headerShadow.classList.add('shadow-sm');
    } else {
        headerShadow.classList.remove('shadow-sm');
    }
}
*/

/*-----------
Change <a> To Span If Attr
-----------*/
/*
const linkItems = document.querySelectorAll('.a-nav-link');

const countLink = linkItems.length;

console.log(linkItems);

for (let i = 0; i < countLink; i++) {

  let getAtt = linkItems[i].getAttribute('href');

  console.log(getAtt.href);

  if (linkItems.href === "#") {
    
    console.log("yes");

  } else {
    console.log("no");
  }
}
*/
document.addEventListener('DOMContentLoaded', () => {
  
  const links = Array.from(document.getElementsByClassName('a-nav-link'));

  links.forEach((link) => {
    
    const att = link.getAttribute('data-toggle');

    if (att === 'bd-dropdown') {
      // الطريقة الأولى
      link.removeAttribute('href');

      // الطريقة الثانية
      /*
      const span = document.createElement('span');
      span.innerText = link.innerText;
      span.setAttribute('data-toggle', 'bd-dropdown');
      link.parentNode.replaceChild(span, link);
      */
    }
    
  });
});

/*-----------
Icon Hamburger Menu
 -----------*/
var iconHam = document.getElementById('hamburger'),
    menuShow = document.getElementById('menu-nav');

iconHam.onclick = function () {
    iconHam.classList.toggle('open');
    menuShow.classList.toggle('show');
}


/*-----------
Slideshow Head Site
-----------*/
 // Get Posts Slide
 let postSlide = Array.from(document.getElementsByClassName('post-slide')),
     // Slides Count
     slidesCount = postSlide.length,
     // Set Start Slide
     startSlide = 0,
     // Get Dots
     dots = document.getElementById('dots');


// Craet List Items Based on Slide Count
for (let i = 1; i <= slidesCount; i++) {

  // Creat Items Span
  let creatSpan = document.createElement('span');

  // Set Custom Attribute
  creatSpan.setAttribute('data-index', i);

  // Add Class List
  creatSpan.setAttribute('class', 'items');

  // Set Append Child Ul
  dots.appendChild(creatSpan);
}

// Get Dots items
let items = Array.from(document.getElementsByClassName('items'));

// Loop Through All Bullets Items
for (let d = 0; d < items.length; d++) {

    items[d].onclick = function () {

        startSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
    }
}

// Auto Slide Posts
function autoSlide() {

  for (i = 0; i < slidesCount; i++) {
    // Remove All Active
    removeAllActive();
  }

  startSlide++;
  if (startSlide > slidesCount) {
    startSlide = 1;
  }
  // Set Active Class on Current Slide
  postSlide[startSlide - 1].classList.add('active');

  // Set Active class on Current Pagination Item
  items[startSlide - 1].classList.add('active');
  setTimeout(autoSlide, 3000);
}

let hasCalss = document.body.classList.contains('home');

if (hasCalss == true) {

  window.onload = setTimeout(autoSlide, 2000);

} else {}

// Create The Checker Function
function theChecker() {

  // Remove All Active
  removeAllActive();

  // Set Active Class on Current Slide
  postSlide[startSlide - 1].classList.add('active');

  // Set Active class on Current Pagination Item
  items[startSlide - 1].classList.add('active');
}

// Remove All Active Class From Images and Pagination Bullets
function removeAllActive() {

    // Loop Through Images
    postSlide.forEach(function (post) {
        post.classList.remove('active');
    });

    // Loop Through Pagination Bullets
    items.forEach(function (bullet) {

        bullet.classList.remove('active');

    });

}


/*-----------
Slideshow Items Name Category
-----------*/
// Get Button Previous
let btnPrev = document.getElementById('btn-prev'),
    // Get Button Next
    btnNext = document.getElementById('btn-next'),
    // Get Items
    itemsNameCat = Array.from(document.getElementsByClassName('items-name-cat')),
    // Items Count
    itemsCount = itemsNameCat.length,
    // Items Start
    itemsStart = 0;

