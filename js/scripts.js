
// цифры на разделении между пятой и четвёртой секциями
// let number = document.querySelectorAll('.number, .number2, .number3, .number4'),
// // var number = document.querySelector('.number'),
// numberTop = number.getBoundingClientRect().top,
// start = +number.innerHTML, end = +number.dataset.max;

// window.addEventListener('scroll', function onScroll() {
// 	if(window.pageYOffset > numberTop - window.innerHeight / 2) {
// 		this.removeEventListener('scroll', onScroll);
// 		var interval = setInterval(function() {
// 			number.innerHTML = ++start;
// 			if(start == end) {
// 				clearInterval(interval);
// 			}
// 		}, 5);
// 	}
// });

// заполнение кругов в 5 секции
(function progress () {
  let processBar = document.querySelector(".progress__bar"),
      height = 0;
  setProgress = setInterval(progressBar, 50);
  
  function progressBar() {
    if (height >= 51) {
        clearInterval(setProgress);
        } else {
          height += 1;
          processBar.style.height = height +'%';
          //processBar.textContent = height + '%';
        }
  }

   Skill-number.innerHTML = ;
}());