// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heart = document.querySelector('.like-glyph');
const modal = document.querySelector('.modal');
const modalMessage = document.querySelector('.modal-message');

heart.addEventListener('click', () => {
  mimicServerCall()
    .then(() => {
      heart.classList.toggle('activated-heart');
      if (heart.innerHTML === EMPTY_HEART) {
        heart.innerHTML = FULL_HEART;
      } else {
        heart.innerHTML = EMPTY_HEART;
      }
    })
    .catch((error) => {
      modalMessage.innerText = error;
      modal.classList.remove('hidden');
      setTimeout(() => {
      modal.classList.add('hidden');
    }, 3000);
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
