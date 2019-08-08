// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then(function (response) {
    // handle success
    const d = response.data.topics;
    // console.log(d)
    topics(d);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

function topics(topics) {
  const mountPoint = document.querySelector('.topics');
  const allTopics = document.createElement('div');
  allTopics.classList.add('tab');
  allTopics.textContent = 'ALL';
  allTopics.dataset.key = 'all';
  allTopics.addEventListener('click', function() {
    console.log('something')
  })
  mountPoint.appendChild(allTopics);
  topics.forEach(element => {
    const topic = document.createElement('div');
    topic.classList.add('tab');
    topic.textContent = element;
    topic.dataset.key = element;
    topic.addEventListener('click', function(event) {
      const tabsArray = [].slice.call(document.querySelectorAll('.tab'));
      const articles = [].slice.call(document.querySelectorAll('.card'));
      // const filterTopic = event.
      const topicKey = event.originalTarget.dataset.key;
      articles.forEach(article => {
        // if(article)
        // console.log(article)
      })
    })
    mountPoint.appendChild(topic);
  });
}