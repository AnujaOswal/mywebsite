const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://AnujaOswal.github.io/cleanfolio',
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
    name: 'Whatsapp Chating Clone',
    description:
      'This React App is RealTime Chating WhatsApp like clone many authorized user can chat with each other and share their emotions with their timestamp. All users are verified and this is done by firebase tool itself by adding google authentication and the realtime database is also store in firebase database whenever the user enters the chat room what he/she write at what time to whom all store in firebase db.',
    stack: ['ReactJs', 'CSS', 'firebase'],
    sourceCode: 'https://github.com/AnujaOswal/WhatsappReactClone',
    livePreview: 'https://whatsappweb-ao.netlify.app/',
  },
  {
    name: 'Netflix Video Streaming Clone',
    description:
      'This Video Streaming Clone is made of ReactJs Framework and to add more style css ,google fonts is used and for google ,Fb authentication purpose firebase tool is used. This App shows you the related shows, episodes, movies their description ratings, authors, trailers but to authorized subscribed user.',
    stack: ['ReactJs', 'CSS', 'Firebase'],
    sourceCode: 'https://github.com/AnujaOswal/NetFlix-CLONE',
    livePreview: 'https://netflix-video-streaming-clone.netlify.app/',
  },
  {
    name: 'Cryptocurrency Finance Price Tracker',
    description:
      'This React App keeps track of records of Cryptocurrency and display currency as per the user goes on searching. This App fully focuses on reactJs funcationalites to add more styles into boostrap and css is used',
    stack: ['CSS', 'Bootstrap', 'ReactJs'],
    sourceCode:
      'https://github.com/AnujaOswal/Cryptocurrency-Finance-Price-Tracker-React-App-',
    livePreview: 'https://cryptocurrency-pricetracker-app.netlify.app',
  },
  // {
  //   name: 'Project 4',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
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
  'Redux',
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
