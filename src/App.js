import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
    <div>
      <h3>I love { name }</h3>
      <h4>{rating}/5.0</h4>
      <img src = {picture} alt = {name} />
    </div>
    );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://i.namu.wiki/i/UAzeSkKWDRIJNYUrQG1RrL2C9ECISHFhRckqeFZLwS0ZzKMy7PnXBYtugFaCRvdC0mFMbJijWZvCQrPJgTXLT7pWyiGHnTXv2ZqWafeT1LxSQ1EMR-BvvshdIbXOiXiJTqe6E0nvGfhABjBNovy7-A.webp',
    rating: 4.8
  },
  {
    id: 2,
    name: 'Samgyoupsal',
    image: 'https://i.namu.wiki/i/PL5ecMR4LWq5R86AWqsPecp91uVgdfLbwWs9iH9sWP7x--W64TxSgIH4qBcAoxn1i0ONoDBFIeDFzoCgdZReqC6NMPqtl2CWP8We5HiO6y_4TnV5aJ88-Z7hG4IIkRSN0PfG3PdEwjrTjZTAm9QweA.webp',
    rating: 5.0
  },
  {
    id: 3,
    name: 'Bibimpap',
    image: 'https://i.namu.wiki/i/u6UPF6o_SSPwQxoGSSyjVj2W837qjoA1k-HyfOPCUXl5vX1F6UKtfgL-8FFJ8xuoXR3P_YOKdrKXG3WxYSy2UTH2kCOYAk39ho-1L9g2IauL-JqcOEVwGTu0Dh94QMgGbjUHLcfR6DgJuHGfm7Bm7A.jpg',
    rating: 4.9
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://i.namu.wiki/i/1OOpVrOoQx0gD8j4zN1sk0ixd1jdqJsykJJLDCOTVGIEbzZfDIDWQUQ5D2M8F4o8CbD2Nd8CCrETNCOgUa4BCgnNv7jcsRitHXQ2a1e2ap6voHitmcZHcl06isyS9SIsCm3Q-BS9Y7-Srmz0W0ouzA.webp',
    rating: 5.0
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://i.namu.wiki/i/SxXhwcIVTwl7N09x5KmiNBaaintp8lJGQGokj7ToRkOUGqOuL4KGCBANkGWvqQ0u-viMIMILYcsRU4Cp5PdIcNg0zbyOAy3ulRtweDDVxeOmUfWAF_cAasWt2KGc3Og2cjIoQy9DYiGomOHcXXzpQQ.webp',
    rating: 4.5
  }
];

function renderFood(dish) {
  return <Food name = {dish.name} picture = {dish.image} key = {dish.id} rating = {dish.rating}/>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map(renderFood)}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

export default App;
