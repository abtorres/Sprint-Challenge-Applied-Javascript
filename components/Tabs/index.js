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
  mountPoint.appendChild(allTopics);
  topics.forEach(element => {
    const topic = document.createElement('div');
    topic.classList.add('tab');
    topic.textContent = element;
    topic.dataset.key = element;
    mountPoint.appendChild(topic);
  });
}