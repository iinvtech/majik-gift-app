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
      'https://s3-alpha-sig.figma.com/img/0b99/3d99/ce41cec5899eda6a1a721400677cb3e8?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LL9LSxLdrLd6zdO5CA68Pg1fBGPHXu05Fs73WdtKnJZsjJFHLN8Mm8GJHAiTJG3WxdzUv1yG6tROnPT7XJm272VuT-OPzS3HidBxOV~xQ5fTZMZkGMDDmxE9Gy-NaOcG0hcAJuNZ0x977mhJbvLTwhZ94Nk-t3YmbVmpb8Y9lopc~19hOuu9JxRF4lZGBn82-xxwRxWtJfSCXqZ5W1Hd-7a2h~~YHJEvJpHypd7OalGI44yBNgoaRT4Q6bpFYxx8BpelSjv0fzMSFUWMdRjiZPLUxQRl79utLyAbCOHwVXEPR7R2wap2HfiWXkkC-VM0Jhgsrq-Ny7nfUx5lZHeA4g__',
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

const HOME_SUGGESTIONS = [
  {
    id: '1',
    title: 'Benjamin Grahams Thursday Class',
    category: 'Enjoy 2 hours of practicing.',
    image:
      'https://s3-alpha-sig.figma.com/img/0b99/3d99/ce41cec5899eda6a1a721400677cb3e8?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LL9LSxLdrLd6zdO5CA68Pg1fBGPHXu05Fs73WdtKnJZsjJFHLN8Mm8GJHAiTJG3WxdzUv1yG6tROnPT7XJm272VuT-OPzS3HidBxOV~xQ5fTZMZkGMDDmxE9Gy-NaOcG0hcAJuNZ0x977mhJbvLTwhZ94Nk-t3YmbVmpb8Y9lopc~19hOuu9JxRF4lZGBn82-xxwRxWtJfSCXqZ5W1Hd-7a2h~~YHJEvJpHypd7OalGI44yBNgoaRT4Q6bpFYxx8BpelSjv0fzMSFUWMdRjiZPLUxQRl79utLyAbCOHwVXEPR7R2wap2HfiWXkkC-VM0Jhgsrq-Ny7nfUx5lZHeA4g__',
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

const EVENTS_SUGGESTIONS = [
  {
    id: '1',
    title: 'Mega Event',
    category: 'Enjoy 2 hours of practicing.',
    image:
      'https://s3-alpha-sig.figma.com/img/a1d9/aa4f/f0bfe7a17a4c9b0651b6c10ef8a32507?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WkUOBAAtXBl4y1dTabI6ruaaRXdMRGO7EznYg7VvXz6e7usaRf3FMVKQ4esqVMtJ13PtkaVvMq4RS-vbB6YKTFB~7QxIwp~fZ9eUweBanbFqHspwMoaQoTA5LFynns66yYGOW4szI4LjbEkcBoDd8NpsAYptL-~3ddxCcuZHb6PvRWZ1edmPhmi9ivPd-~RU6pN~9jQpjqKL-1cS48K6EOq7GgW2lq7E0miAFjdGZYWPKFEcQZ1f1vLf4F85luAqWLT1lmz-U7Qsz1VKTKWlWh9NDtH1SDzk2LyKlihGgeuJB8b2MiK2aKn~7ccE9ivwsUp3CYIcEe7lEYkf7FdaXg__',
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

const chatData = [
  {
    senderId: 1,
    content: 'Hello! How are you?',
    createdAt: '2024-10-14T10:15:00Z',
    status: 'read',
  },
  {
    senderId: 2,
    content: "I'm good, thanks! What about you?",
    createdAt: '2024-10-14T10:16:00Z',
    status: 'delivered',
  },
  {
    senderId: 1,
    content: "I'm doing great! Excited about the project.",
    createdAt: '2024-10-14T10:17:00Z',
    status: 'read',
  },
];

const dummyMessages = [
  {
    id: '1',
    sender: {
      id: 'user1',
      email: 'john.doe@example.com',
    },
    message: 'Hey! How are you doing today?',
    status: 'read',
    createdAt: '2024-10-12T10:30:00Z',
  },
  {
    id: '2',
    sender: {
      id: 'user2',
      email: 'jane.smith@example.com',
    },
    message: 'I’m doing great, thanks! What about you?',
    status: 'delivered',
    createdAt: '2024-10-12T10:35:00Z',
  },
  {
    id: '3',
    sender: {
      id: 'user1',
      email: 'john.doe@example.com',
    },
    message: 'All good here! Let’s catch up later.',
    status: 'read',
    createdAt: '2024-10-12T10:40:00Z',
  },
  {
    id: '4',
    sender: {
      id: 'user2',
      email: 'jane.smith@example.com',
    },
    message: 'Sure, see you soon!',
    status: 'delivered',
    createdAt: '2024-10-12T10:45:00Z',
  },
];

const notifications = [
  {
    id: 1,
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non.',
    time: 'Today at 9:42 AM',
    isRead: false,
  },
  {
    id: 2,
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non.',
    time: 'Today at 9:42 AM',
    isRead: false,
  },
  {
    id: 3,
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non.',
    time: 'Today at 9:42 AM',
    isRead: true,
  },
  {
    id: 4,
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non.',
    time: 'Today at 9:42 AM',
    isRead: true,
  },
];

export {
  cardData,
  PRODUCT_SUGGESTIONS,
  HOME_SUGGESTIONS,
  EVENTS_SUGGESTIONS,
  chatData,
  dummyMessages,
  notifications,
};
