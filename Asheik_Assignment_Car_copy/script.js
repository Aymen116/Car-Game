 document.addEventListener('DOMContentLoaded', function() {


     document.addEventListener('keydown', function(e) {
         if (e.key == 'ArrowLeft') {
             MoveLeft()
         }
         if (e.key == 'ArrowRight') {
             MoveRight()
         }
     })

     function MoveLeft() {
         car = document.querySelector('#car')
         leftPos = parseInt(window.getComputedStyle(car).getPropertyValue('left'))
         leftPos -= 100;
         if (leftPos >= 0) {
             console.log(car)
             car.style.left = leftPos + 'px';
         }

     }



     function MoveRight() {
         car = document.querySelector('#car')
         rightPos = parseInt(window.getComputedStyle(car).getPropertyValue('left'))
         rightPos += 100;
         if (rightPos < 300) {

             car.style.left = rightPos + 'px';
         }

     }
     road = document.querySelector('#road')
     npc = document.querySelector('#npc')
     document.addEventListener('animationiteration', function() {
         randomNumber = Math.floor(Math.random() * 3) * 100
         npc.style.left = randomNumber + 'px';
     })
     score = 0;
     checkDead = setInterval(function() {
         score++
         carLeft = parseInt(window.getComputedStyle(car).getPropertyValue('left'))
         npcLeft = parseInt(window.getComputedStyle(npc).getPropertyValue('left'))
         npctop = parseInt(window.getComputedStyle(npc).getPropertyValue('top'))
         document.querySelector('#score').innerHTML = 'Score: ' + score
         if (carLeft == npcLeft && npctop >= 400) {
             alert('You Scored ' + score)
             npc.style.animation = 'none';
             road.style.animation = 'none';
             npc.style.top = npctop + 'px'
             console.log(npctop)
             clearTimeout(checkDead)
         }
     }, 100)



 })