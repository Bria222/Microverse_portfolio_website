// Image dimension ratios => 1.75
const projects = [
  {
    title: 'Prime Shows HD',
    note: 'Prime Shows streaming software used to track and watch online movies and tv series.',
    image: '/projects/hdshows.png',
    imgDims: { width: '2496 ', height: '1427' },
    description: 'Microverse Second Capstone Project: This educational project is to build our own web application based on an external API. We selected an API that provides data about a topic that we like and built the web app around it. The web app will have 2 or 3 user interfaces (depending on the size of our team',
    stack: ['Next.js', 'Redux', 'Express', 'MongoDB'],
    links: {
      github: 'https://github.com/Bria222/movie-TVmaze-API/',
      live: 'https://prime-shows.netlify.app/',
    },
  },
  {
    title: 'Motorbike Booking',
    note: 'A full-stack Motorbike Booking website inspired by the Uber website',
    image: '/projects/mock-motobike.png',
    imgDims: { width: '1380', height: '788.5' },
    description: 'Motorbike Booking is an application enables a user to view available motorbikes and reserve a specific one, as well as allows an admin to create, delete and add new categories of motorbikes..',
    stack: ['React', 'Redux', 'JavaScript', 'Ruby', 'API', 'Ruby on rails'],
    links: {
      github: 'https://github.com/Bria222/Motorbike-Booking-capstone',
      live: 'https://motorbike-booking.netlify.app/',
    },
  },
  {
    title: 'Cimeza Africa',
    note: 'A digital Marketing Agency website that gives you all the information you need about digital marketing solutions',
    image: '/projects/cimeza.png',
    imgDims: {
      width: '2377',
      height: '1358',
    },
    description: 'cimeza africa project is to build a mobile  and web application for a digital marketing agency using React and Redux..',
    stack: ['React', 'Redux', 'TypeScript'],
    links: {
      github: 'https://github.com/Bria222/Bree-collection',
      live: 'https://cimeza-africa.com',
    }
  },
  {
    title: 'Bookstore CMS',
    note: 'A bookstore CMS application that displays books information the bookstore API',
    image: '/projects/mock_bookstore.png',
    imgDims: {
      width: '2337',
      height: '1335',
    },
    description: 'Microverse Module 03 Project: This educational project is similar to the "Awesome Books" website. It is a MVP version of it that allows you to display a list of books, add a book and remove a selected book.',
    stack: ['React', 'Redux', 'Router', 'JavaScript', 'Jest', 'Sass'],
    links: {
      github: 'https://github.com/Bria222/awesome-books-app',
      live: 'https://app-bookstore-cms.netlify.app/',
    },
  },
  // {
  //   title: 'Wallet Detective',
  //   note: 'A full-stack application where you can manage your budget',
  //   image: '/projects/wallet-inspector.webp',
  //   imgDims: { width: '2742', height: '1576' },
  //   description: 'A full-stack application where you can manage your budget: you have a list of payments associated with a category, so you can see how much money you spent and on what',
  //   stack: ['Rails', 'Ruby', 'Javascript'],
  //   links: {
  //     github: 'https://github.com/okoyecharles/rails-budget-app',
  //     live: 'https://sleepy-hamlet-84522.herokuapp.com/',
  //   },
  // },
  {
    title: 'Math Magicians',
    note: 'A website focused on performing methemathical problems',
    image: '/projects/mock_math.png',
    imgDims: {
      width: '2337',
      height: '1335',
    },
    description: 'Microverse Module 03 Project: "Math Magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make a simple calculations and read a random math-related quote.',
    stack: ['React','JavaScript', 'Jest', 'Sass'],
    links: {
      github: 'https://github.com/Bria222/React-Math-magicians',
      live: 'https://bree-math-magician.netlify.app/',
    },
  },
  {
    title: 'Todo List',
    note: 'A Todo list website that saves user\'s tasks in Local Storage',
    image: '/projects/todo-list.webp',
    imgDims: {
      width: '2345',
      height: '1340',
    },
    description: 'A Todo list website created with HTML, Sass and JavaScript that saves user\'s tasks in Local Storage. This app also allows swapping/reordering of tasks implemented utilizing the Javascript Drag & Drop API',
    stack: ['Webpack', 'JavaScript', 'Linters', 'Sass'],
    links: {
      github: 'https://github.com/Bria222/Sneak-peek-To-do-list',
      live: 'https://bria222.github.io/Sneak-peek-To-do-list/',
    },
  },
  {
    title: 'Events 254 Conference 2023',
    note: 'A website where you can view and book online events',
    image: '/projects/events254.png',
    imgDims: {
      width: '2751 ',
      height: '1572',
    },
    description: 'Microverse First Capstone Project: This is an educational project to make a website for a web conference event with home page and about page.',
    stack: ['React', 'TypeScript', 'Sass'],
    links: {
      github: 'https://github.com/Bria222/Capstone.git',
      live: 'https://bria222.github.io/Capstone/'
    }
  },
  {
    title: 'Space Traveler Hub',
    note: 'A web application that provides commercial and scientific space travel services',
    image: '/projects/space-traveler-hub.webp',
    imgDims: {
      width: '2835',
      height: '1620'
    },
    description: 'A web application for a company that provides commercial and scientific space travel services, utilizing information from the SpaceX API.',
    stack: ['React', 'Redux', 'SpaceX API'],
    links: {
      github: 'https://github.com/Bria222/space-travelers-hub.git',
      live: 'https://app-space-travelers-hub.netlify.app/'
    }
  },
  {
    title: 'Leaderboard',
    note: 'This is an educational project to create a website which displays scores submitted by different players.',
    image: '/projects/mock_ldb.png',
    imgDims: {
      width: '2300',
      height: '1314'
    },
    description: 'This is an educational project to create a website which displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API Service.',
    stack: ['JavaScript', 'HTML5'],
    links: {
      github: 'https://github.com/Bria222/Leaderboard',
      live: 'https://mavericks-db.github.io/leaderboard/dist/index.html'
    }
  },
  {
    title: 'Crypto Currency Web App',
    note: 'The application allow users to get full information related to the crypto.',
    image: '/projects/crypto.png',
    imgDims: {
      width: '2880',
      height: '1645'
    },
    description: '"Digital Currency" is about working with the real live data from the Blockchain API. It\'s a web application for a company that provides informations such as trending coins, coins\' price,and crypto transaction. The application allow users to get full information related to the crypto.',
    stack: ['React', 'Redux', 'Sass'],
    links: {
      github: 'https://github.com/Bria222/crypto_currency.',
      live: 'https://brian-nyachae-capstone-project.netlify.app/'
    }
  },
];

export type projectType = typeof projects[0];

export default projects
