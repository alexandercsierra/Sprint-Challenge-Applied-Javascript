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

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        let allTopics = response.data.articles;
        let topics = Object.values(allTopics);
        topics.forEach(topic => 
            topic.forEach(article => {
                let cardParent = document.querySelector(".cards-container");
                cardParent.appendChild(createCard(article));
            }));
    })
    .catch(err => console.log(error))


function createCard(art) {
    let card = document.createElement("div");
    card.classList.add("card");

    let headline = document.createElement("div");
    headline.classList.add("headline");
    headline.textContent = art.headline;

    let author = document.createElement("div");
    author.classList.add("author");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    let img = document.createElement("img");
    img.src = art.authorPhoto;

    let span = document.createElement("span");
    span.textContent = "By: " + art.authorName;

    imgContainer.appendChild(img);
    author.appendChild(imgContainer);
    author.appendChild(span);
    card.appendChild(headline);
    card.appendChild(author);

    return card;

}


// cardParent.appendChild(createCard());


// obj.data.articles => obj with keys bootstrap, etc
//each topic is an array of objects (they each contain several articles)
//obj.data.articles => loop through to get access to each array

