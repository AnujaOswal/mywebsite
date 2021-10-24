const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://anujaoswal.github.io/mywebsite/',
  title: 'AO.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Anuja Oswal',
  role: 'Aspring Developer ',
  description: 'curious learner',
  resume:
    'https://drive.google.com/file/d/1fME6s_xgURYVkmFc1X09Yj6SNbnnXXmM/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/anuja-oswal-783476128',
    github: 'https://github.com/AnujaOswal',
  },
}

const education = {
  school:
    'Vidya Pratishthan Kamalnayan Bajaj Institute of Engineering & Technology',
  studyspecialization: 'Bachelor Of Enginnering in Computer',
  yearduration: '2020',
  score: '7.01',
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Recipe app',
    description:
      'This is an recipe app based on MERN stack where you create or edit your own recipe and find any recipes',
    stack: ['MongoDB', 'Express', 'React', 'NodeJS'],
    sourceCode: 'https://github.com/AnujaOswal/MERNRCT',
    livePreview: 'https://mern-recipe-app-2021.herokuapp.com/',
  },
  {
    name: 'Expense tracker app',
    description:
      'This is an expense tracker app based on MERN stack where your daily expense get track.',
    stack: ['MongoDB', 'Express', 'React', 'NodeJS'],
    sourceCode: 'https://github.com/AnujaOswal/expense-tracker-app',
    livePreview: 'https://github.com',
  },
  {
    name: 'Cryptocurrency Finance Price Tracker',
    description:
      'This React App keeps track of records of Cryptocurrency and display currency as per the user goes on searching.',
    stack: ['CSS', 'Bootstrap', 'ReactJs'],
    sourceCode:
      'https://github.com/AnujaOswal/Cryptocurrency-Finance-Price-Tracker-React-App-',
    livePreview: 'https://cryptocurrency-pricetracker-app.netlify.app',
  },
  {
    name: 'Whatsapp Chating Clone',
    description:
      'This React App is RealTime Chating WhatsApp like clone many authorized user can chat with each other and share their emotions with their timestamp.',
    stack: ['ReactJs', 'CSS', 'firebase'],
    sourceCode: 'https://github.com/AnujaOswal/WhatsappReactClone',
    livePreview: 'https://whatsappweb-ao.netlify.app/',
  },
  {
    name: 'Netflix Video Streaming Clone',
    description:
      'This Video Streaming Clone is made of ReactJs Framework. This App shows you the related shows, episodes, movies their description ratings, authors, trailers but to authorized subscribed user.',
    stack: ['ReactJs', 'CSS', 'Firebase'],
    sourceCode: 'https://github.com/AnujaOswal/NetFlix-CLONE',
    livePreview: 'https://netflix-video-streaming-clone.netlify.app/',
  },
  // {
  //   name: 'Project 5',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
  // {
  //   name: 'Project 6',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Bootstrap',
  'React',
  'Material UI',
  'MongoDB',
  'MySql',
  'NodeJs',
  'Git',
  'Java',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'anujaoswal7@gmail.com',
  desc: 'My Inbox is always open. Whether you have a question or just want to say hello. I will try my best to get back to you! Feel free to mail me about any relevant job updates.',
}

export { header, about, projects, skills, contact, education }
