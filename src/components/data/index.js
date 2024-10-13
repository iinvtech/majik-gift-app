const cardData = [
  {
    id: 1,
    name: 'Antique Bowl',
    category: 'Singing Bowl',
    price: 330.0,
    originalPrice: 550.0,
    rating: 4.9,
    image: 'antique-bowl.png',
    isOnSale: true,
  },
  {
    id: 2,
    name: 'Deep Aqua',
    category: 'Mary Dress DB-01',
    price: 330.0,
    rating: 4.9,
    image: 'deep-aqua.png',
    isOnSale: false,
  },
  {
    id: 3,
    name: 'Antique Bowl',
    category: 'Singing Bowl',
    price: 330.0,
    rating: 4.9,
    image: 'antique-bowl.png',
    isOnSale: false,
  },
  {
    id: 4,
    name: 'Deep Aqua',
    category: 'Mary Dress DB-01',
    price: 330.0,
    rating: 4.9,
    image: 'deep-aqua.png',
    isOnSale: false,
  },
];

const PRODUCT_SUGGESTIONS = [
  {
    id: '1',
    title: 'Antique Bowl',
    category: 'Singing Bowl',
    image:
      'https://s3-alpha-sig.figma.com/img/4591/8e7c/3d83301ad33d6ad48685bc7ad2a91283?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AzwACm9MM-giVm93vim-B6VjXgtPQfG0bTc9fsxI2vOgIQsiGbV4Gjlj4UTzPdYZVP6U3lfv~i~1diuIE-w6zZPPwuwunL4CwkUyu1HYYqJjM0r5LEOpyrQLs-q6UeAt-692JKekhFltVaKhq7-x3D5t6lbPEEoyQUvqYG5QxCwUeW-f4JeXwFraAtcB47aF4FTdenoAYJUKUPP57jhUMkm79xmTFYbF0KLxgzFOYdzPu1Pyn7WMxYm7QgbXeil1e1tqdSJTi5SjxAuei4YoGeHkm5ZI6zoIOwMxhUug6Ejtx5ye~tQdvElIp9BxtRSssR-o3hPwDFY9rE6HQFnyFQ__',
  },
  {
    id: '2',
    title: 'Deep Aqua',
    category: 'Dress',
    image:
      'https://s3-alpha-sig.figma.com/img/4591/8e7c/3d83301ad33d6ad48685bc7ad2a91283?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AzwACm9MM-giVm93vim-B6VjXgtPQfG0bTc9fsxI2vOgIQsiGbV4Gjlj4UTzPdYZVP6U3lfv~i~1diuIE-w6zZPPwuwunL4CwkUyu1HYYqJjM0r5LEOpyrQLs-q6UeAt-692JKekhFltVaKhq7-x3D5t6lbPEEoyQUvqYG5QxCwUeW-f4JeXwFraAtcB47aF4FTdenoAYJUKUPP57jhUMkm79xmTFYbF0KLxgzFOYdzPu1Pyn7WMxYm7QgbXeil1e1tqdSJTi5SjxAuei4YoGeHkm5ZI6zoIOwMxhUug6Ejtx5ye~tQdvElIp9BxtRSssR-o3hPwDFY9rE6HQFnyFQ__',
  },
  {
    id: '3',
    title: 'Modern Lamp',
    category: 'Home Decor',
    image:
      'https://s3-alpha-sig.figma.com/img/4591/8e7c/3d83301ad33d6ad48685bc7ad2a91283?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AzwACm9MM-giVm93vim-B6VjXgtPQfG0bTc9fsxI2vOgIQsiGbV4Gjlj4UTzPdYZVP6U3lfv~i~1diuIE-w6zZPPwuwunL4CwkUyu1HYYqJjM0r5LEOpyrQLs-q6UeAt-692JKekhFltVaKhq7-x3D5t6lbPEEoyQUvqYG5QxCwUeW-f4JeXwFraAtcB47aF4FTdenoAYJUKUPP57jhUMkm79xmTFYbF0KLxgzFOYdzPu1Pyn7WMxYm7QgbXeil1e1tqdSJTi5SjxAuei4YoGeHkm5ZI6zoIOwMxhUug6Ejtx5ye~tQdvElIp9BxtRSssR-o3hPwDFY9rE6HQFnyFQ__',
  },
];

export {cardData, PRODUCT_SUGGESTIONS};
