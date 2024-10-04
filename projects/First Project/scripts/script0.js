'use strict';

let mainImgEl = document.querySelector('img.main_img')
let h1El = document.querySelector('h1.heading')
let changeUserBtn = document.querySelector('button.change_user')

mainImgEl.addEventListener('click', () => {
  let img = mainImgEl.getAttribute('src');

  changeImg(img)

})

function changeImg(src) {
  if (src === './images/people.jpg') {
    setTimeout(500);
    mainImgEl.setAttribute('src', './images/people1.jpg')
  } else {
    setTimeout(500)
    mainImgEl.setAttribute('src', './images/people.jpg');
  }
}


function setUserName() {
  let userName = prompt('Enter your name?')

  if (!userName) {
    setUserName()
  } else {
    localStorage.setItem('userName', userName)
    h1El.textContent = `Coding is cool, ${userName}`
  }
}

if (!localStorage.getItem('userName')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('userName');
  h1El.textContent = `Coding is cool, ${storedName}`;
}

changeUserBtn.onclick = function() {
  setUserName();
}


// getUserName()
