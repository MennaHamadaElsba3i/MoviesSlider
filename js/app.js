const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, index) => {
     console.log(index, arrow);
     const movieList = movieLists[index];
     let curentTranslate = 0;

     arrow.addEventListener('click', () => {
          const move = 300; //every click will movw the list 30px to left
          if (Math.abs(curentTranslate) < movieList.scrollWidth - movieList.clientWidth) {
               curentTranslate -= move;
               movieList.style.transform = `translateX(${curentTranslate}px)`;
          }
          else {
               curentTranslate = 0;
               movieList.style.transform = `translateX(0)`;
          }
     });
});


const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
     ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
     items.forEach((item) => {
          item.classList.toggle("active");
     });
     ball.classList.toggle("active");
});





















//
// لكل سهم في الصفحة
// arrows.forEach((arrow, index) => {
//      const movieList = movieLists[index];
//      let currentTranslate = 0; // البداية صفر

//      arrow.addEventListener("click", () => {
//           // حجم الحركة في كل مرة
//           const move = 300;

//           // لو لسه فيه مساحة يتحرك
//           if (Math.abs(currentTranslate) < movieList.scrollWidth - movieList.clientWidth) {
//                currentTranslate -= move;
//                movieList.style.transform = `translateX(${currentTranslate}px)`;
//           } else {
//                // لو وصل للنهاية يرجع من الأول
//                currentTranslate = 0;
//                movieList.style.transform = `translateX(0)`;
//           }
//      });
// });
