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


function carousel(data) {
  var imageIndex = 0;
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');

  const leftButton = document.createElement('div');
  leftButton.classList.add('left-button');
  leftButton.textContent = '<';
  leftButton.addEventListener('click', function(imageIndex){
      console.log(imageIndex);
  });
  carousel.appendChild(leftButton);

  const i = images(data.data);
  i.forEach(item => carousel.appendChild(item));

  const rightButton = document.createElement('div');
  rightButton.classList.add('right-button');
  rightButton.textContent = '>';
  rightButton.addEventListener('click', function(imageIndex) {
      console.log(1);
  });
  carousel.appendChild(rightButton);

  return carousel;  
}

function images(images) {
  const imageList = [];
  images.forEach(element => {
    const i = document.createElement('img');
    i.src = '../assets/carousel/' + element;
    if(imageList.length === 0) {
        i.style.display = 'block';
    }
    imageList.push(i);
  });
  return imageList;
}
