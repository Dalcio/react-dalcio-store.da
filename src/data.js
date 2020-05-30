const storeProducts = [
  {
    id: 1,
    title:
      "Gileira Branca",
    img:
      "img/product-1.png",
    price: 600,
    company:
      "GOOGLE",
    info:
      "lorem ipsum bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 2,
    title:
      "Arca Branca",
    img:
      "img/product-2.png",
    price: 300,
    company:
      "GOOGLE",
    info:
      "lorem ipsum bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 3,
    title:
      "Cadeira de Madeira Estranha",
    img:
      "img/product-3.png",
    price: 267,
    company:
      "GOOGLE",
    info:
      "lorem ipsum bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 4,
    title:
      "Cadeira Normal",
    img:
      "img/product-4.png",
    price: 45.3,
    company:
      "GOOGLE",
    info:
      "lorem ipsum bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 5,
    title:
      "Banca",
    img:
      "img/product-5.png",
    price: 97.5,
    company:
      "GOOGLE",
    info:
      "lorem ipsum bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 6,
    title:
      "Mesa com cadeiras",
    img:
      "img/product-6.png",
    price: 250,
    company:
      "GOOGLE",
    info:
      "lorem ipsum bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 7,
    title:
      "Arca Preta",
    img:
      "img/product-7.png",
    price: 300,
    company:
      "Arcalandia",
    info:
      "lorem ipsum bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 8,
    title:
      "Gileira Preta",
    img:
      "img/product-8.png",
    price: 600,
    company:
      "Gileiralandia",
    info:
      "lorem ipsum bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 9,
    title:
      "Cadeira exotica",
    img:
      "img/product-9.png",
    price: 100,
    company:
      "GOOGLE",
    info:
      "lorem ipsum bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 10,
    title:
      "Cadeirões",
    img:
      "img/product-10.png",
    price: 311,
    company:
      "GOOGLE",
    info:
      "lorem ipsum bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 11,
    title:
      "Tv Samnsung",
    img:
      "img/product-11.png",
    price: 800,
    company:
      "Samnsung",
    info:
      "lorem ipsum bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 12,
    title:
      "TV Samnsung 4K",
    img:
      "img/product-12.png",
    price: 1000,
    company:
      "Samnsung",
    info:
      "lorem ipsum bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ",
    inCart: false,
    count: 0,
    total: 0,
  },
];

const detailProduct = {
  id: 1,
  title:
    "Google Pixel - Black",
  img:
    "img/product-1.png",
  price: 10,
  company:
    "google",
  info:
    "lorem ipsum bla bla bla bla bla bla bla bla bla   bla bla bla bla bla bla bla bla bla bla bla bla  bla bla bla bla bla bla bla bla bla bla bla bla  bla bla bla bla bla bla bla bla bla bla bla bla  bla bla bla bla bla bla bla bla bla bla bla bla  bla bla bla bla bla bla bla bla bla bla bla bla  bla bla bla bla bla bla bla bla bla bla bla bla  bla bla bla bla bla bla bla bla bla bla bla bla  bla bla bla bla bla bla bla bla bla bla bla bla ",
  inCart: false,
  count: 0,
  total: 0,
};

export {
  detailProduct,
  storeProducts,
};
