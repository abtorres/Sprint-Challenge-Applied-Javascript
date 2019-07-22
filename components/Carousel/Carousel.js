/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

//data needed is handled
axios.get('http://127.0.0.1:5500/assets/carousel/')
  .then(function (response) {
    // handle success
    const target = document.querySelector('.carousel-container');
    target.appendChild(carousel(response));
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })


//function for carousel creation
function carousel(data) {
  //current image displayed
  let imageIndex = 0;

  const carousel = document.createElement('div');
  carousel.classList.add('carousel');

  const leftButton = document.createElement('div');
  leftButton.classList.add('left-button');
  leftButton.textContent = '<';

  const i = images(data.data);
  i.map(item => carousel.appendChild(item));

  leftButton.addEventListener('click', function () {
    const domEl = Array.prototype.slice.call(document.querySelectorAll(".carousel img"));
    if (imageIndex === 0) {
      imageIndex = domEl.length - 1;
    } else {
      imageIndex -= 1;
    }
    domEl.forEach(image => image.style.display = 'none');
    domEl.forEach(image => image.classList.remove('carfade'));
    domEl[imageIndex].style.display = 'block';
    domEl[imageIndex].classList.add('carfade');
  });

  carousel.appendChild(leftButton);

  const rightButton = document.createElement('div');
  rightButton.classList.add('right-button');
  rightButton.textContent = '>';
  rightButton.addEventListener('click', function () {
    const domEl = Array.prototype.slice.call(document.querySelectorAll(".carousel img"));
    if (imageIndex === domEl.length - 1) {
      imageIndex = 0;
    } else {
      imageIndex += 1;
    }
    domEl.forEach(image => image.style.display = 'none');
    domEl.forEach(image => image.classList.remove('carfade'));
    domEl[imageIndex].classList.add('carfade')
    domEl[imageIndex].style.display = 'block';

  });

  carousel.appendChild(rightButton);

  return carousel;
}

function images(images) {
  const imageList = [];
  images.forEach(element => {
    const i = document.createElement('img');
    i.src = '../assets/carousel/' + element;
    if (imageList.length === 0) {
      i.style.display = 'block';
      i.classList.add('carfade');
    }
    imageList.push(i);
  });
  return imageList;
}

// goLeft() {
//     //make it go left
//     if(this.curNum !== 0){
//         this.curNum -= 1
//     }else{
//         this.curNum = this.images.length-1
//     }
//     this.images.forEach(image => image.style.display = 'none')
//     this.images.forEach(image => image.classList.remove('carfade'))
//     this.images[this.curNum].classList.add('carfade')
//     this.images[this.curNum].style.display = 'block'
// } 