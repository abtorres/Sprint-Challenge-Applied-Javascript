class Carousel {
    constructor(carousel){
        this.curNum = 0
        this.carousel = carousel
        this.rightButton = document.querySelector('.right-button')
        this.leftButton = document.querySelector('.left-button')

        this.images = document.querySelectorAll('.carousel img')
        
        this.images.forEach(image => image.style.display = 'none')
        this.images[this.curNum].style.display = 'block'
        this.images[this.curNum].classList.add('carfade')

        this.rightButton.addEventListener('click', this.goRight.bind(this))
        this.leftButton.addEventListener('click', this.goLeft.bind(this))
        
    }

    goLeft() {
        //make it go left
        if(this.curNum !== 0){
            this.curNum -= 1
        }else{
            this.curNum = this.images.length-1
        }
        this.images.forEach(image => image.style.display = 'none')
        this.images.forEach(image => image.classList.remove('carfade'))
        this.images[this.curNum].classList.add('carfade')
        this.images[this.curNum].style.display = 'block'
    } 

    goRight() {
        //make it go right
        if(this.curNum !== this.images.length-1){
            this.curNum += 1
        }else  {
            this.curNum = 0    
        } 

        this.images.forEach(image => image.style.display = 'none')
        this.images.forEach(image => image.classList.remove('carfade'))
        this.images[this.curNum].style.display = 'block'
        this.images[this.curNum].classList.add('carfade')
    }
}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel)

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/