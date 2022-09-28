'use strict';
const moviesEl = document.getElementById('movies');
const screenDetailsEl = document.querySelector('.screen-details');

const countEl = document.getElementById('count');
const totalEl = document.getElementById('total');
console.log(moviesEl);
console.log(screenDetailsEl);
console.log(countEl);
console.log(totalEl);

let ticketPrice = Number(moviesEl.value);
let seatCount = 0;
let totalPrice = 0;
const populateUI = function(){
  countEl.innerText = seatCount;
  totalEl.innerText = seatCount * ticketPrice;
};

moviesEl.addEventListener('change',function(){
  ticketPrice = Number(moviesEl.value);
  populateUI();
  
});
screenDetailsEl.addEventListener('click',function(e) {
if(e.target.classList.contains('seat')){
  if(!e.target.classList.contains('occupied')){

  
  e.target.classList.toggle('selected');
const selectedSeatsEl = document.querySelectorAll('.row .seat.selected');
seatCount=selectedSeatsEl.length;
populateUI();
}
}
}
);
