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
  var imageIndex = 0;
  //carousel parent element
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');
  //images
  const i = images(data.data);
  i.map(item => carousel.appendChild(item));
  setInterval(function() {
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
    }, 3000, imageIndex);
  //left arrow button
  const leftButton = document.createElement('div');
  leftButton.classList.add('left-button');
  leftButton.textContent = '<';
  //left event listener
  leftButton.addEventListener('click', function (event) {
    //converting nodeList to Array
    const domEl = Array.prototype.slice.call(document.querySelectorAll(".carousel img"));
    //image display logic
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

  //right event listner
  const rightButton = document.createElement('div');
  rightButton.classList.add('right-button');
  rightButton.textContent = '>';
  //right button event listener
  rightButton.addEventListener('click', function () {
    //converting nodeList to Array
    const domEl = Array.prototype.slice.call(document.querySelectorAll(".carousel img"));
    //image display logic
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
  //image element creator
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
  };
  return carousel;
}


