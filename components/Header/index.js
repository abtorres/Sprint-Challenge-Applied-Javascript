// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    const header = document.createElement('div');
    header.classList.add('header');

    const date = document.createElement('span');
    date.classList.add('date');
    date.textContent = dateFormat();
    header.appendChild(date);

    const title = document.createElement('h1');
    title.textContent = 'Lambda Times';
    header.appendChild(title);

    const temp = document.createElement('span');
    temp.classList.add('temp');
    temp.textContent = '98°';
    header.appendChild(temp);

    return header;
}

//format date to show m/d/y
function dateFormat() {
    const currDate = new Date();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[currDate.getMonth()];
    const day = currDate.getDate();
    const year = currDate.getFullYear();
    const d = month + ' ' + day + ", " + year;

    return d;
}

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());