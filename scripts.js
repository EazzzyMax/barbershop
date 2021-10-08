scrollPosition = 0;

function positionToNormal() {
   scrollPosition %= 3;
   if (scrollPosition < 0) {
      scrollPosition += 3;
   }
   console.log('[eq');
   return scrollPosition;
}

function scrollToLeft() {
   scrollPosition -= 1;
   scrollPosition = positionToNormal(scrollPosition);
   doScroll();
}

function scrollToRight() {
   scrollPosition += 1;
   scrollPosition = positionToNormal(scrollPosition);
   doScroll();
}

function doScroll() {
   for (let i = 0; i < 3; i++) {
      document.getElementById(`review${i}`).classList.add('hidden');
   }

   document.getElementById(`review${scrollPosition}`).classList.remove('hidden');
}
