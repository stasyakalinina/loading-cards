'use strict';

var btn = document.querySelector('.js-btn');
var cardList = document.querySelector('.developments__list');

var mockData = [
  {
    img: 'img/brunless.jpg',
    alt: 'Brunlees Court',
    feature: 'Independent living',
    title: 'Brunlees Court'
  },
  {
    img: 'img/charlotte.jpg',
    alt: 'Charlotte Court',
    feature: 'Independent living',
    title: 'Charlotte Court'
  },
  {
    img: 'img/grove.jpg',
    alt: 'Grove Court',
    feature: 'Restaurant & Support available',
    title: 'Grove Court'
  },
  {
    img: 'img/brunless.jpg',
    alt: 'Brunlees Court',
    feature: 'Independent living',
    title: 'Brunlees Court'
  },
  {
    img: 'img/charlotte.jpg',
    alt: 'Charlotte Court',
    feature: 'Independent living',
    title: 'Charlotte Court'
  },
  {
    img: 'img/grove.jpg',
    alt: 'Grove Court',
    feature: 'Restaurant & Support available',
    title: 'Grove Court'
  }
];

var renderCard = function (mockData) {
  var card = document.querySelector('#card').content.querySelector('.developments__item').cloneNode(true);
  var cardImage = card.querySelector('.developments__item-img');
  var cardFeature = card.querySelector('.developments__feature');

  cardImage.src = mockData.img;
  cardImage.alt = mockData.alt;
  cardFeature.textContent = mockData.feature;
  card.querySelector('.developments__item-title').textContent = mockData.title;

  if (mockData.feature === 'Independent living') {
    cardFeature.classList.add('developments__feature--independent');
  } else {
    cardFeature.classList.add('developments__feature--support');
  }

  return card;
};

var renderCards = function () {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < mockData.length; i++) {
    fragment.appendChild(renderCard(mockData[i]));
  }
  cardList.appendChild(fragment);
};

btn.addEventListener('click', renderCards);
