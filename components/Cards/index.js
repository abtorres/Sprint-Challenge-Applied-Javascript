// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(function (response) {
    // handle success
    const articles = response.data;
    // console.log(articles)
    article(articles);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

function article(articles) {
  const a = articles.articles;
  for (var key in a) {
    a[key].forEach(element => {
      // console.log(key)
      // element.data.key = 
      // console.log(element)
      const card = document.createElement('div');
      card.classList.add('card');
      card.dataset.key = key;

      const headline = document.createElement('div');
      headline.classList.add('headline');
      headline.textContent = element.headline;
      card.appendChild(headline);

      const author = document.createElement('div');
      author.classList.add('author');
      author.textContent = element.authorName;
      card.appendChild(author);

      const imageContainer = document.createElement('div');
      imageContainer.classList.add('img-container');
      author.appendChild(imageContainer);

      const authorImage = document.createElement('img');
      authorImage.src = element.authorPhoto;
      imageContainer.appendChild(authorImage);

      const authorName = document.createElement('span');
      authorName.textContent = element.authorName;
      author.appendChild(authorName);

      const mountPoint = document.querySelector('.cards-container');
      mountPoint.appendChild(card);
    });
  }
}