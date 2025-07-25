// projects.js

const projects = [
  {
    name: "DevOps Resources Hub",
    image: "./images/DevOpsResourcesHub.png", // Add your project image to the `images` directory
    description: "An interactive platform built with React, designed to provide developers with curated resources for learning and mastering DevOps practices. Whether you're a beginner or an experienced developer looking to scale your DevOps skills, this hub features essential tutorials, blogs, and guides covering Docker, Kubernetes, CI/CD, and more. This project is fully automated using GitHub Actions and a CI/CD pipeline, ensuring continuous integration and deployment of changes directly to the live site. I created the workflow in GitHub Actions to handle testing, building, and deploying updates to GitHub Pages, and also to build a Docker image at each push or pull request, pushing the built image to Docker Hub. ",
    usedTech: "React, JSX, JavaScript, MaterialUI, Docker, Github Actions, Github Pages",
    contributorName: "Ashmit Dwivedi",
    codeLink: "https://github.com/ashmit4818/DevOps_Resources_Project",
    liveLink: "https://ashmit4818.github.io/DevOps_Resources_Project/",
},
  {
    name: "GitHub profile Finder",
    image: "./images/GIthub-Profile-Finder.png", // Add your project image to the `images` directory
    description: " simple, web app to search and display GitHub user profiles and repositories using the GitHub API. Built with vanilla JavaScript, HTML, and CSS. ",
    usedTech: "JavaScript,HTML,CSS, Github API, Github Actions, Github Pages",
    contributorName: "Noora Koufin",
    codeLink: "https://github.com/theNooradeveloper/Github-Profile-Finder.git",
    liveLink: "https://thenooradeveloper.github.io/Github-Profile-Finder/",
},
  {
    name: "NoteSpace Notes App",
    image: "./images/NoteSpace-dashboard.png", // Add your project image to the `images` directory
    description: 'NoteSpace is a web-based notes app designed for seamless productivity. Users can create, customize, and manage notes with rich text editing, sketch ideas on canvas, and organize tasks with a to-do list feature. The app includes Firebase integration for secure authentication ,real-time data storage and support for Google Sign-In.',
    usedTech: "JavaScript,HTML,CSS,Firebase,Firestore,database,Google Authentication",
    contributorName: "Noora Koufin",
    codeLink: "https://github.com/theNooradeveloper/Notespace-app.git",
    liveLink: "https://thenooradeveloper.github.io/Notespace-app/",
},
  {
    name: "IceAndSpice - A Restaurant Website",
    image: "./images/IceAndSpice.png",
    description: "IceAndSpice is a simple website for a restaurant which allows their customers to order food and make table reservations online. It allows the restaurant admin to view/accept orders & reservations, update menu as well as offers.",
    usedTech: "Python, Django, HTML, CSS, JavaScript",
    contributorName: "Sahil Gupta",
    codeLink: "https://github.com/shaanguptaa/IceAndSpice",
    liveLink: "https://iceandspice.pythonanywhere.com/",
  },
    {
    name: "AutoSense",
    image: "./images/autosense.png",
    usedTech: "HTML, CSS, Javascript",
    description: "AutoSense is an innovative project focused on enhancing road safety and optimizing autonomous driving capabilities through advanced vehicle and pedestrian detection",
    contributorName: "Sukanya Singh",
    codeLink: "https://github.com/Sukanyasingh3/AutoSense",
    liveLink: "https://autosense.vercel.app/",
  },
{
    name: "Car Rental System",
    //image: "\Gym-Web-Application.png",
    description:
    "Developed a Car Rental System emphasizing Object-Oriented Programming (OOP) principles to facilitate efficient management and rental of cars. The system leverages OOP concepts such as \textbf{encapsulation, inheritance, polymorphism, and abstraction} to ensure a modular, maintainable, and scalable solution.",
    usedTech: "OOPS , Core java",
    contributorName: "Preeti sen",
    codeLink: "https://github.com/preetisen08/Car-Rental-System.git",
    //liveLink: " https://withpreetisen08.github.io/Gym-Web-Application/",
  },
  {
    name: "Text-To-QR-Generator",
    image: ".images/TextToQrGenerator.png",
    description: "Developed a Text-to-QR Code Generator utilizing API integration, emphasizing key programming concepts to ensure efficient conversion and management of text data into QR codes. The system leverages principles such as \textbf{modularity, reusability, and API-driven architecture} to provide a seamless, scalable, and user-friendly solution for generating QR codes on demand.",
    usedTech: "HTML, CSS, JavaScript",
    contributorName: "Sagar Adhikari",
    codeLink: "https://github.com/Sagarhoraa/QR_generator.git",
    liveLink: "https://text-to-qr-code-generator.netlify.app/",
  },
  {
    name: "Gym-Web-Application",
    image: "\Gym-Web-Application.png",
    description:
    "Efficient gym web app for seamless fitness management, scheduling, tracking, and community engagement, promoting a healthier lifestyle anytime, anywhere.",
    usedTech: "HTML, CSS, JavaScript",
    contributorName: "Preeti sen",
    codeLink: "https://github.com/withpreetisen08/Gym-Web-Application.git",
    liveLink: " https://withpreetisen08.github.io/Gym-Web-Application/",
  },
  {
    name: "Demos Delivered",
    image: "./images/demosdelivered.png",
    description:
      "A web platform for aspiring producers to submit their demos to the hottest EDM labels. I used React & Next.js along with MongoDB to store music label information. The responsive styling is done with Tailwind CSS. Currently have 200 active users.",
    usedTech: "React, Next.js, HTML, TypeScript, Tailwind CSS, MongoDB",
    contributorName: "Jason Zubiate",
    codeLink: "https://github.com/jasonzubiate/Demos-Delivered",
    liveLink: "https://www.demosdelivered.live/",
  },
  {
    name: "Weather-Info",
    image: "./images/weather.png",
    description:
      "A simple JavaScript weather application that allows users to check the current weather conditions, Humidity, Wind Speed for a specific location using a weather data API.",
    usedTech: "HTML, CSS, JavaScript, OpenWeatherAPI",
    contributorName: "Vipin Kumar Yadav",
    codeLink: "https://github.com/vy211/Weather-Info",
    liveLink: "https://vy211.github.io/Weather-Info/",
  },
  {
    name: "Responsive Payment Form ",
    image: "",
    description:
      "Hey there , I created this cool responsive payment form using HTML and CSS ,  ",
    usedTech: "HTML, CSS",
    contributorName: "Vivek Paswan ",
    codeLink: "https://github.com/vivek-paswan028/Paymentform",
    liveLink: "https://paymentform-blush.vercel.app/",
  },
    {
    name: "HTL - Portfolio 😎",
    image: "./images/htl-portfolio.png",
    description: "My personal portfolio website using React Tailwind",
    usedTech: "React, Tailwind",
    contributorName: "Htet Aung Lin",
    codeLink: "https://github.com/HTLA380/Personal_Portfolio.git",
    liveLink: "https://htetaunglin-coder.netlify.app/",
  },
  {
    name: "Tarsho",
    image: "https://drive.google.com/open?id=11exI1VQ824jGGO75Fj4XJ_9nKtSuZaQX",
    description:
      "Tarsho is a groundbreaking mobile application designed to streamline the connection between independent contractors and customers seeking professional services. It simplifies the process of discovering and engaging with dependable service providers, catering to various needs such as HVAC, plumbing, and electrical work. With an intuitive design and a user-friendly interface, Tarsho aims to revolutionize interactions between customers and service professionals. Its key features include dual account creation options for consumers and service providers, comprehensive service listings with detailed information, advanced proximity-based search functionality, and a seamless user experience. The tech stack powering Tarsho encompasses React Native for mobile development, React for the web platform, Node.js and Express.js for a robust backend, MongoDB for flexible data management, and GitHub Actions for continuous integration and deployment, all aimed at delivering a reliable and efficient service ecosystem. Deployment strategies for cloud and hosting are yet to be determined, and version control is managed through Git hosted on GitHub.Tarsho is a groundbreaking mobile application designed to streamline the connection between independent contractors and customers seeking professional services. It simplifies the process of discovering and engaging with dependable service providers, catering to various needs such as HVAC, plumbing, and electrical work. With an intuitive design and a user-friendly interface, Tarsho aims to revolutionize interactions between customers and service professionals. Its key features include dual account creation options for consumers and service providers, comprehensive service listings with detailed information, advanced proximity-based search functionality, and a seamless user experience. The tech stack powering Tarsho encompasses React Native for mobile development, React for the web platform, Node.js and Express.js for a robust backend, MongoDB for flexible data management, and GitHub Actions for continuous integration and deployment, all aimed at delivering a reliable and efficient service ecosystem. Deployment strategies for cloud and hosting are yet to be determined, and version control is managed through Git hosted on GitHub.",
    usedTech: "Reactjs, Nodejs, Expressjs, Mongodb",
    contributorName: "Ahmed ",
    codeLink: "https://github.com/AhmedRaisi/Tarsho",
    liveLink: "",
  },
  {
    name: "Fardeen Ahamed Personal Portfolio",
    image: "./images/fardeenPortfolio.png",
    description:
      "Hey there ,This is my Personal Portfolio, I created this cool responsive portfolio website using Next.js and Tailwind CSS.",
    usedTech: "Next Js, tailwind CSS",
    contributorName: "Fardeen Ahamed",
    codeLink: "https://github.com/Fardeen2001/personal-portfolio",
    liveLink: "https://personal-portfolio-fardeen2001.vercel.app/",
  },
  {
    name: "AgroAid",
    image: "./images/AgroAid.png",
    description:
      "Tool to diagnose diseases in plant leaves, Using transfer learning with the pre-trained ResNet50 model.",
    usedTech: "Python, TensorFlow",
    contributorName: "Sukanya Singh",
    codeLink: "https://github.com/Sukanyasingh3/AgroAid",
    liveLink: "",
  },
  {
    name: "PyroDetect",
    image: "./images/PyroDetect.png",
    description:
      "Tool to detect fire in CCTV Images using a Computer Vision Deep CNN Classification Model.",
    usedTech: "Python, TensorFlow",
    contributorName: "Sukanya Singh",
    codeLink: "https://github.com/Sukanyasingh3/PyroDetect",
    liveLink: "",
  },
  {
    name: "Speech Emotion Recognition",
    image: "./images/SER.png",
    description:
      "Speech Emotion Recognition (SER) using model with LSTM layers, utilizing NLP techniques and deep learning to classify speech recordings into 7 emotions.",
    usedTech: "Python, LSTM",
    contributorName: "Sukanya Singh",
    codeLink: "https://github.com/Sukanyasingh3/Speech-Emotion-Recognition",
    liveLink: "",
  },
  {
    name: "Animated NavBar ",
    image: "./images/navbar.png",
    description:
      "Hey there , I created this cool animated navbar using HTML and CSS , Try it Once, you will love this.... ",
    usedTech: "HTML, CSS",
    contributorName: "Vivek Paswan ",
    codeLink: "https://github.com/vivek-paswan028/Animated-navbar",
    liveLink: "https://animated-navbar-tau.vercel.app/",
  },
  {
    name: "Product Preview Card",
    image: "./images/product-preview-card.png",
    description:
      "The first project i built when i started learning frontend web, improved overtime, it wasn't that good at first.",
    usedTech: "HTML, CSS",
    contributorName: "Olaniyan Eniola",
    codeLink: "https://github.com/OlaniyanEniola/product-preview-card",
    liveLink: "https://olaniyaneniola.github.io/product-preview-card/",
  },
  {
    name: "Online compiler",
    image: "./images/OnlineCompiler.png",
    description: "I have built a compiler for web devlopment.",
    usedTech: "HTML,CSS,JavaScript",
    contributorName: "Rohan Muttepwar",
    codeLink: "https://rohaneth.github.io/compiler/",
    liveLink: "https://rohaneth.github.io/compiler/",
  },
  {
    name: "Ashwin's Personal Portfolio",
    image: "./images/portfolioImg.png",
    description:
      "I have built a personal portfolio website to enhance my frontend skills and showcase my work. Utilizing HTML and Bootstrap, I've crafted an interactive platform to exhibit my projects and abilities. Explore my site to discover my passion for web development and design.",
    usedTech: "HTML,Bootstrap",
    contributorName: "Ashwin Dhangar",
    codeLink: "https://github.com/MrAshwin2142/portfolio/blob/master",
    liveLink: "https://ashwin-portfolioo.netlify.app/#",
  },
  {
    name: "Trae's ecommerce-website",
    image: "./images/traescreenshot.png",
    description:
      "E-commerce Next.js website built with Typescript and Tailwind CSS, with Local storage backend. meant to emulate store where user can buy favourite football jerseys",
    usedTech: "Typescript, Tailwind CSS",
    contributorName: "Trae Zeeofor",
    codeLink: "https://github.com/traez/ecommerce-website",
    liveLink: "https://ecommerce-website-traez.vercel.app/",
  },
  {
    name: "Moviezz",
    image: "./images/moviezz.png",
    description:
      "Moviezz is a web application that replicates the Netflix experience, providing real-time movie data and a user-friendly interface for seamless movie and TV show exploration",
    usedTech: "Reactjs",
    contributorName: "Ashwin Dhangar",
    codeLink: "https://github.com/MrAshwin2142/moviezz",
    liveLink: "https://tmdb-moviezz.netlify.app/",
  },
  {
    name: "Leetcode-Problem-Solver-OpenAI",
    image: "./images/leetcode.png", // Add your project image to the `images` directory
    description: "Solves any leetcode problem using OpenAI's api",
    usedTech: "Javascript",
    contributorName: "Ved Surve",
    codeLink: "https://github.com/veecodes07/Leetcode-Solver-with-OpenAI-api",
    liveLink: "",
  },
  {
    name: "Text to Emoji",
    image: "https://ashwin-portfolioo.netlify.app/image/TextToEmoji.png",
    description:
      "Web app using HTML, CSS, and JavaScript, transforming text into emoji-encoded messages. Enhanced user experience with encryption algorithms and an intuitive UI.",
    usedTech: "Javascript",
    contributorName: "Ashwin Dhangar",
    codeLink: "https://github.com/MrAshwin2142/text-to-emoji.github.io",
    liveLink: "https://mrashwin2142.github.io/text-to-emoji.github.io/",
  },
  {
    name: "Glowing Digital Clock",
    image: "./images/clock.png",
    description:
      "This project involves creating a visually engaging digital clock with a glowing effect using HTML, CSS, and JavaScript. The clock's design includes a gradient background, animated hue rotation, and blurred glowing elements for a striking visual presentation",
    usedTech: "HTML, CSS, JavaScript",
    contributorName: "Preeti Sen",
    codeLink: "https://github.com/withpreetisen08/Digital-watch",
    liveLink: "https://withpreetisen08.github.io/Digital-watch/",
  },
  {
    name: "Soldier Game",
    image: "https://ashwin-portfolioo.netlify.app/image/jsGame.png",
    description:
      "JavaScript game where a soldier avoids incoming fires, demonstrating real-time interaction and dynamic scoring with animation enhancements.",
    usedTech: "Javascript",
    contributorName: "Ashwin Dhangar",
    codeLink: "https://github.com/MrAshwin2142/soldier.github.io",
    liveLink: "https://mrashwin2142.github.io/soldier.github.io/",
  },
  {
    name: "Thinkrr - socialise and learn",
    image: "images/Dashboard.png",
    description:
      "This is flask based website where users and students can socialise and grow their career.",
    usedTech: "Flask/Python, HTML, CSS, JS",
    contributorName: "Kunal Achintya Reddy",
    codeLink: "https://github.com/globalnebula/thinkrr",
    liveLink: "",
  },
  {
    name: "Next-Word-Predictor",
    image: "images/Next-Word-Predictor.png",
    description:
      "Python model trained in Keras to predict next word in a sentence.",
    usedTech: "Python",
    contributorName: "Luke Li",
    codeLink: "https://github.com/yhlli/Next-Word-Predictor",
    liveLink: "",
  },
  {
    name: "Safest Path",
    image: "images/safest.jpg",
    description:
      "Website that lets the user go from one point to other by adding its name to the file. They have option to travel by walk or by drive.",
    usedTech: "HTML, CSS, JavaScript",
    contributorName: "Taranjeet Singh Bedi",
    codeLink: "https://github.com/TartejBrothers/Safest-Path",
    liveLink: "https://safestpathmap.web.app/",
  },
  {
    name: "Alumni Nexus",
    image: "images/AlumniNexus.jpg",
    description:
      "A website for connecting alumni of a college. It saves records on cloud database, and can be accessed for better connections.  ",
    usedTech: "HTML, CSS, JavaScript, DJango, PostgreSQL",
    contributorName: "Taranjeet Singh Bedi",
    codeLink: "https://github.com/TartejBrothers/Alumni-Nexus",
    liveLink: "https://alumni-nexus.vercel.app/",
  },
  {
    name: "History Games",
    image: "images/historyGames.png",
    description: "A drag and drop app to learn about France's History",
    usedTech: "React JS and the beautiful dnd library",
    contributorName: "Ulysse Valdenaire",
    codeLink: "https://github.com/UltraViolet33/history-games",
    liveLink: "https://ultraviolet33.github.io/history-games",
  },
  {
    name: "Super Market Billing System",
    image: "./images/BillingSystem.jpg",
    description:
      "Developed a C++ Supermarket Billing System with file handling for efficient product management and data storage, streamlining the billing process",
    usedTech: "C++",
    contributorName: "Ashwin Dhangar",
    codeLink: "https://github.com/MrAshwin2142/Super-Market-Bill-System",
    liveLink:
      "https://www.linkedin.com/posts/ashwin-dhangar-btech24_cpp-miniproject-project-activity-6979374060145139712-N_EY?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "Digital Calculator",
    image: "./images/calculator.png",
    description:
      "An elegant and responsive web-based calculator with a modern interface designed using HTML, CSS, and JavaScript for basic arithmetic calculations.",
    usedTech: "HTML, CSS, JavaScript",
    contributorName: "Preeti Sen",
    codeLink: "https://github.com/withpreetisen08/Calculator2",
    liveLink: "https://withpreetisen08.github.io/Calculator2/",
  },
  {
    name: "SpeechBoy",
    image: "./images/SpeechBoy.png",
    description:
      "SpeechBoy is a text to speech transaltion application providing us with a variety of options to customize the voice",
    usedTech: "Python",
    contributorName: "Bhanuj Sharma",
    codeLink: "https://github.com/BhanujISNOTACODER/SpeechBoy",
    liveLink: "",
  },
  {
    name: "Thermopy",
    image: "images/Thermopy.png", // Add your project image to the `images` directory
    description:
      "A simple program that displays the current temperature in a chosen city using a thermometer display",
    usedTech: "Python, Tkinter",
    contributorName: "Kieran Triggs",
    codeLink: "https://github.com/ktriggsdev/ThermoPy",
    liveLink: "",
  },
  {
    name: "Agenda",
    image: "images/Agenda.png",
    description:
      "Take control of your time and tasks with Agenda, where you can easily structure your day or event schedules in just a few clicks.",
    usedTech: "HTML, CSS, Bootstrap and JavaScript",
    contributorName: "Patrick Ancajas",
    codeLink: "https://github.com/JohnPatrickAncajas/Agenda",
    liveLink: "https://johnpatrickancajas.github.io/Agenda/",
  },
  {
    name: "treptow.dev Portfolio Website",
    image: "./images/acktreptowportfolio.jpg",
    description:
      "My (Alex Treptow) portfolio website. Fully responsive for all screens and contains a light/dark mode switcher.",
    usedTech: "HTML, CSS, JavaScript, Vite, Vercel and Hostinger.",
    contributorName: "Alex Treptow",
    codeLink: "https://github.com/acktreptow/portfolio",
    liveLink: "https://treptow.dev",
  },
  {
    name: "PlayStation Productions",
    image: "./images/ps-productions.png",
    description: "A homepage for PlayStations TV and movie division",
    usedTech: "React, Boostrap and GitHub Pages",
    contributorName: "Alex Treptow",
    codeLink: "https://github.com/acktreptow/ps-productions",
    liveLink: "https://acktreptow.github.io/ps-productions/",
  },
  {
    name: "React Bitcoin Component",
    image: "./images/react-bitcoin-component.jpg",
    description:
      "A simple React Component to get latest prices in USD, EUR and/or GBP from Coindesk API, available via NPM.",
    usedTech: "React, NPM",
    contributorName: "Abel Rogers",
    codeLink: "https://github.com/animasoul/bitcoin-price-component/",
    liveLink: "https://layerfi.meta.mt/",
  },
  {
    name: "Calculator",
    image: "./images/calculator.png", 
    description: "A Simple Web Calculator for performing calculations with responsive design",
    usedTech: "HTML, CSS, Javascript",
    contributorName: "Sutanjoy Pal",
    codeLink: "https://github.com/SutanjoyPal/Calculator",
    liveLink: " https://sutanjoypal.github.io/Calculator/",
  },
  {
    name: "The Wall of Projects(React)",
    image: "./images/thewallofprojects(react).png",
    description:
      "This is The webpage wall of projects just a design I thought to throw out there.",
    usedTech: "React, Tailwind",
    contributorName: "Kubasu Ivan Sakwa",
    codeLink: "https://github.com/KubasuIvanSakwa/The-Wall-of-Projects-React-",
    liveLink: "https://the-wall-of-projects-react.netlify.app",
  },
  {
    name: "Timestamp",
    image: "images/Timestamp.png",
    description:
      "Timestamp is where every second, minute, hour, day, month, and year are elegantly displayed. As you watch the clock tick, find inspiration in quotes that change with the hour and day.",
    usedTech: "HTML, CSS, Bootstrap and JavaScript",
    contributorName: "Patrick Ancajas",
    codeLink: "https://github.com/JohnPatrickAncajas/Timestamp",
    liveLink: "https://johnpatrickancajas.github.io/Timestamp/",
  },
  {
    name: "COMPASS",
    image: "images/COMPASS.png",
    description: "The web page for TUP - COMPASS club.",
    usedTech: "HTML, CSS and JavaScript",
    contributorName: "Patrick Ancajas",
    codeLink: "https://github.com/JohnPatrickAncajas/COMPASS",
    liveLink: "https://johnpatrickancajas.github.io/COMPASS/",
  },
  {
    name: "Pokecards",
    image: "./images/pokecards.png", // Add your project image to the `images` directory
    description:
      "A memory card game built solely using Pokemon cards, select the same card again in a round and lose the game.",
    usedTech: "React.js, Tailwind CSS",
    contributorName: "Ruchika Muddinagiri",
    codeLink: "https://github.com/ruchikamuddinagiri/memory-tiles",
    liveLink: "https://pokemon-memory-tiles.netlify.app/",
  },
  {
    name: "E-COMMARCE",
    image: "./images/ecommers.png", // Add your project image to the `images` directory
    description: "This is E-commarce website to connect Amazon website ",
    usedTech: "HTML and CSS",
    contributorName: "ER. ANJALI SAHU",
    codeLink: "https://theanjalisahu23.github.io/E-commarce.github.io/",
    liveLink: "https://theanjalisahu23.github.io/E-commarce.github.io/",
  },
  {
    name: "DeepAm Creation",
    image: "images/deepam.png",
    description:
      "DeepAm Creations: Your go-to online shop for beautiful flower pots. Shop anytime, anywhere, and elevate your gardening experience.",
    usedTech: "Javascript",
    contributorName: "Akash Yadav",
    codeLink: "https://github.com/Withakash/Deepam-Creation/tree/main",
    liveLink: "https://withakash.github.io/Deepam-Creation/",
  },
  {
    name: "Social Media Handle's",
    image: "images/socialmedia.png",
    description: "One Place to handle all social media accounts link",
    usedTech: "HTML/CSS",
    contributorName: "Akash Yadav",
    codeLink: "https://github.com/Withakash/Social-media",
    liveLink: "https://withakash.github.io/Social-media/",
  },
  {
    name: "Aaryan's Portfolio website",
    image: "images/portfoliosite.png",
    description:
      "This is my personal portfolio website where I uploads my projects as well as some blogs.",
    usedTech: "NextJs/Sanity",
    contributorName: "Aaryan Patel",
    codeLink: "https://github.com/Aaryan6/portfolio-website-live",
    liveLink: "https://developeraaryan.me",
  },
  {
    name: "AyurvedaGPT",
    image: "images/ayurvedagpt.png",
    description:
      "This is an AI chatbot trained on Ayurveda knowledge just like the ChatGPT.",
    usedTech: "NextJs/Langchain/Vercel",
    contributorName: "Aaryan Patel",
    codeLink: "https://github.com/Aaryan6/AyurvedaGPT-AIBot",
    liveLink: "https://ayurvedagpt.vercel.app/",
  },

  {
    name: "Shoyebaktar Portfolio",
    image: "https://img.lovepik.com/photo/45015/7631.jpg_wh860.jpg",
    description: "This is Personal Portfolio Webpage.",
    usedTech: "HTML and CSS",
    contributorName: "Shoyebaktar Shirol",
    codeLink: "https://github.com/Shoyebaktar-shirol/Personal-Portfolio.git",
    liveLink: "https://shoyebaktar-shirol.github.io/Personal-Portfolio/",
  },
  {
    name: "Log_ver_2",
    image:
      "https://th.bing.com/th/id/OIP.o1sheU57dJ5yz7xBrK30bQHaHa?rs=1&pid=ImgDetMain",
    description:
      "A windows based application for diary entry with login and signup features, made using Tkinter.",
    usedTech: "Python",
    contributorName: "Chaanakyaa Milkuri",
    codeLink:
      "https://github.com/chaanakyaaM/Projects/tree/52e5945e02be503f7ff6459d9c44e99f86922f46/Log_ver_2",
    liveLink:
      "https://github.com/chaanakyaaM/Projects/tree/52e5945e02be503f7ff6459d9c44e99f86922f46/Log_ver_2",
  },
  {
    name: "Poke!Book - Poetry notebook",
    image: "./images/pokebook.png",
    description:
      "Distraction-free private digital notebook for writing poetry and lyrics.",
    usedTech: "SvelteKit, Capacitor",
    contributorName: "Pokeghost",
    codeLink: "https://github.com/pokegh0st/pokebook",
    liveLink: "https://book.pokeghost.org/",
  },
  {
    name: "Memory Game",
    image: "./images/memoryGame.png",
    description: "This is a simple Memory Game Web Application.",
    usedTech: "Javascript, HTML, CSS",
    contributorName: "lchauha",
    codeLink: "https://github.com/lchauha/CPSC-8710-Memory-game",
    liveLink: "https://motazabdou.github.io/MS2-MemoryGame/",
},
  {
    name: "ShopMag - E-Commerce",
    image: "./images/ShopMag.png",
    description: "A Full stack e-commerce application.",
    usedTech: "Reactjs/Nodejs-ExpressJs/MongoDb",
    contributorName: "Mahdi Selmani",
    codeLink: "https://github.com/MahdiSelmani/ecommerce",
    liveLink: "",
  },

  {
    name: "Jingle",
    image: "./images/jingle.png",
    description:
      "A simple voice assistant to automate your daily tasks a replica of Alexa.",
    usedTech: "Python",
    contributorName: "Suvashish Shrestha",
    codeLink: "https://github.com/suvashish26/Jingle",
    liveLink: "",
  },

  {
    name: "trimrr",
    image: "./images/trimrr.png",
    description: "A modern URL shortener with QR codes and click analytics.",
    usedTech: "ReactJS,Supabase, Tailwind CSS, Shadcn UI",
    contributorName: "Rahul",
    codeLink: "https://github.com/rajanarahul93/trimrr",
    liveLink: "https://trimrr-amber.vercel.app/",
  },
  {
    name: "tinder Clone",
    image: "./images/tinder.jpg",
    description: "Full stack tinder clone application",
    usedTech: "Nodejs / Reactjs",
    contributorName: "Saoussen Bouraoui",
    codeLink: "https://github.com/BouraouiSaoussen/tinder-clone",
    liveLink: "",
  },
  {
    name: "Quote Generator ",
    image: "./images/Quote-Gen.png",
    description:
      "Hey there , I created this cool and simple quote generator",
    usedTech: "HTML, CSS , JavaScript",
    contributorName: "Hiren Sharma ",
    codeLink: "https://github.com/hiirrxnn/Quote_Gen",
    liveLink: "",
  },
  {
    name: "Offline Password Manager",
    image: "./images/offline-password-manager.png", // Add your project image to the `images` directory
    description: "Offline Password Manager",
    usedTech: "Python",
    contributorName: "Utkarsh Singh",
    codeLink: "https://github.com/vib795/Password-Manager",
    liveLink: "",
  },
  {
    name: "Selective Network Bridge",
    image: "./images/BiBridge.png",
    description: "Linux Python script to invisibly bridge 2 networks based on IP params",
    usedTech: "Python: Scapy, NetFilterQueue",
    contributorName: "Laython Childers",
    codeLink: "https://github.com/LaythonChilders/Selective-Bridge",
    liveLink: "",
  },
  {
    name: "Simon Says Game Web Version",
    image: "./images/SimonSaysGame.png",
    description: "Simon Says is an interactive game project that challenges players to repeat a sequence of colors or sounds to test their memory and reflexes.",
    sedTech: "HTML,CSS, JavaScript",
    cntributorName: "Rajat Mishra",
    codeLink: "https://github.com/mishraRj/Simon_Says_Game_miniProject.git",
    liveLink: "",
  },
  {
    name: "counter",
    image: "./images/counter.png", // Add your project image to the `images` directory
    description: "counts and stores the number you counted ",
    usedTech: "html css and javascript ",
    contributorName: "Yug bathla",
    codeLink: "https://github.com/yugbathla30/counter",
    liveLink: "https://sweet-moxie-7185f8.netlify.app/",
},
{
  name: "loginpage",
  image: "./images/login.jpg", // Add your project image to the `images` directory
  description: "Simple login/signup page ",
  usedTech: "html css and javascript ",
  contributorName: "Zoya Khatry",
  codeLink: "https://github.com/Zoyakhatry1/login_page",
  liveLink: "https://gorgeous-lebkuchen-818691.netlify.app/",
},
{
  name: "Robowar Registration Platform",
  image: "./images/robowar.png",
  description: "Developed a comprehensive registration platform for the Robowar competition, featuring user-friendly interfaces, secure data handling, and real-time updates.",
  usedTech: "React, Tailwind CSS, JavaScript, MongoDB, Formik",
  contributorName: "Tushar Kumar Shah", 
  codeLink: "https://github.com/Hackoverflow-Society/robowars",
  liveLink: "https://robowars.vercel.app/",
},
  // Manually add more projects here
  // Please avoid putting your projects at the very beginning or the end of the file. Instead, insert them in the middle.
  // {
  //   name: "Your Project Name",
  //   image: "./images/YourProjectImage.jpg", // Add your project image to the `images` directory
  //   description: "A brief description of your project.",
  //   usedTech: "Technologies or programming languages used.",
  //   contributorName: "Your Name",
  //   codeLink: "Link to your project's source code (GitHub, GitLab, etc.)",
  //   liveLink: "Link to the live version of your project (if available)",
  // },
];

//   export default projects;
