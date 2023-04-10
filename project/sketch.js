let counter = 0;

function up() {
   ++counter;
   document.querySelector('.counter').innerHTML = counter;
}

function down() {
   --counter;
   document.querySelector('.counter').innerHTML = counter;
   if (counter < 0) {
    counter = 0;
   }
}

function reset() {
    counter=0;
    document.querySelector('.counter').innerHTML = counter;
}