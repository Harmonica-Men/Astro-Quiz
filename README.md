# CONTENTS
* [Astro-Quiz](#astro-quiz)
  * [Intro](#intro)
  * [UX - Astronomy Quiz User Experience](#ux---astronomy-quiz-user-experience)
    * [Landing Page](#landing-page)
    * [Quiz Interface](#quiz-interface)
      * [Feedback and Learning](#feedback-and-learning)
      * [Explanation and Facts](#explanation-and-facts)
    * [Completion and Results](#completion-and-results)
      * [Summary and Score](#summary-and-score)
    * [Social Sharing](#social-sharing)
    * [Additional Features](#additional-features)
  * [Leaderboard (optional)](#leaderboard-optional)
    * [Accessibility and Responsiveness](#accessibility-and-responsiveness)
    * [Accessibility Features](#accessibility-features)
  * [User Story](#user-story)
    * [Acceptance Criteria](#acceptance-criteria)
    * [Constraints](#constraints)
    * [Additional Notes](#additional-notes)
  * [Features](#features)
  * [Wireframe](#wireframe)
    * [Smartphones](#wireframe)
    * [Tablets](#wireframe)
    * [Desktops](#wireframe)
  * [Features to be implemented?](#features-to-be-implemented)
  * [Technologies Used](#technologies-used)
    * [Languages](#languages)
    * [Tools](#tools)
    * [Other Tools](#other-tools)
    * [Manual Testing](#manual-testing)
    * [Deployment](#deployment)
    * [For Deployment over the Internet](#for-deployment-over-the-internet)
  * [Credits](#credits)

# Astro-Quiz

How much do you know about the Universe?

This little quiz is designed to give you the answer to that question. The main goal is to test your knowledge about astronomical subjects.
For demonstration purposes, this quiz is limited to seven questions.
Regardless of the difficulty level of the questions, the audiences of different ages can be targeted.

## Intro
![responiveness](assets/images/wireframes/responsive.png)
<a href="#contents" style="color: lichtblue;">⬆︎ Back to Top</a>

## UX - Astronomy Quiz User Experience
### Landing Page
* Welcome Screen: Upon opening the app or website, users are greeted with a captivating cosmic-themed landing page, showcasing stunning celestial background image.
### Quiz Interface
### Feedback and Learning
### Explanation and Facts
* For incorrect answers, the quiz provides the correct answer along with a brief explanation or interesting fact related to the question, fostering learning and curiosity.
* Encouragement, positive reinforcement and encouraging messages after correct answers maintain user engagement and motivation throughout the quiz.
### Completion and Results
### Summary and Score
* Upon completing the quiz, users receive a summary of their performance, displaying the number of correct and incorrect answers, along with their final score.
### Social Sharing
* An option to share results on social media platforms encourages users to challenge friends and share their achievements.
* (Optional) Review:  Users can choose to review their answers, allowing them to revisit questions, explanations, and expand their knowledge base.
### Additional Features
* (Optional) Quiz History: A section to track previous quiz attempts and scores, enabling users to monitor their progress over time.
Bookmarking: An option to bookmark specific questions for further exploration or study outside the quiz.

<a href="#contents" style="color: lichtblue;">⬆︎ Back to Top</a>

## Leaderboard (Optional)
* A global or friend-based leaderboard to foster competition among users, adding a competitive and social aspect to the experience.
### Accessibility and Responsiveness
### Accessibility Features
* Responsive Design: Ensuring the app or website functions seamlessly across various devices, providing an optimal experience on smartphones, tablets, and desktops.

## User Story
As a(n) avid astronomy enthusiast,
I want to test my knowledge of celestial bodies and space exploration,
So I can challenge myself and learn more about the wonders of the universe.

### Acceptance Criteria
* As a user, I can access the Astronomy Quiz app from my smartphone or computer.
* Upon opening the app, I am presented with an intuitive interface to start the quiz.
* The difficulty level of the quiz is not set but level questions is.
* The quiz comprises multiple-choice questions related to astronomy, including topics like planets, stars, galaxies, and space missions.
* Each question has a time limit for answering, adding a level of challenge.
* After selecting an answer, I receive immediate feedback on whether my choice was correct or incorrect.
* For incorrect answers, the app provides the correct answer and a brief explanation or fact related to the question.
* At the end of the quiz, I receive a summary of my performance, including the number of correct and incorrect answers.
* There is an option to share my quiz results on social media platforms.
* The app keeps track of my quiz history and allows me to revisit previous quizzes or review questions I've answered incorrectly.
* There is an option to bookmark questions for further research or study.

### Constraints
* The app should be accessible across various devices (iOS, Android, web browser).
* Questions should cover a broad range of topics within astronomy and space exploration.
* The interface should be user-friendly and visually engaging to encourage participation.

### Additional Notes
* To enhance engagement, consider adding a leaderboard feature to allow users to compete with friends or globally.
* Incorporating images or multimedia content related to questions could enhance the learning experience.
* Accessibility features should be considered to ensure inclusivity for users with disabilities.

<a href="#contents" style="color: lichtblue;">⬆︎ Back to Top</a>

## Features 
* All buttons in the game-area have nice hover effects and have a good background contrast. 
* Socails links to all major media platforms.
* A counter in the game-area to see the progress of player.
* To have an instant game score of correct, wrong and skipped answers.
* A thumbs-up indicator to acknowledge the player (include fade effect)
* An alert box pops up when an answer is wrong. Give the correct answer to learn from the mistake.
* If the question is skipped, a pop-up box gives the correct answer.
* If all questions are answered, the player is given the choise to play the game again.

## Wireframe
The design is made different media device
* smartphones
  ![smartphone](assets/images/wireframes/pp2-smartphone1.png)
<a href="#contents" style="color: lichtblue;">⬆︎ Back to Top</a>

* tablet
  ![tablet](assets/images/wireframes/pp2-wireframe-tablet-1.png)
<a href="#contents" style="color: lichtblue;">⬆︎ Back to Top</a>
* desktop
  ![desktop](assets/images/wireframes/pp2-wireframe-desktop.png)
<a href="#contents" style="color: lichtblue;">⬆︎ Back to Top</a>

## Features to be implemented?
* If a JSON build input is implemented, it can potentially be added to provide more questions.
* Timer is required to level up the User Experience and higher cognitive thinking is required.
* Leaderboard, keep track of the players and there scores.
* A difficult grade should be implemented in different entery levels like easy, medium or hard. 

## Technologies Used
### Languages
- HTML
  - Page markup.
- CSS
  - Styling.
- JS
  - Javascript code for gameplay.

### Tools
- Google Fonts
  - Is this project the font _Roboto_ was choosen in [GoogleFonts](https://fonts.google.com/specimen/Roboto)
- Favicon
  - In Flaticon the Saturn favicon was used [favicon](https://www.flaticon.com/free-icon/saturn_5005667?related_id=5005667)
    
  ![Fav Saturn](assets/images/wireframes/favicon-128x128.png)

- Colors
  - The Color scheme comes from [colorhunt](https://colorhunt.co/)
  
  ![colors](assets/images/wireframes/colors-schema.png)

<a href="#contents" style="color: lichtblue;">⬆︎ Back to Top</a>

### Other Tools

- Wireframe where used be [Balsamiq](https://balsamiq.com/wireframes/)
- Favicon added be Favicons

This site was built using [GitHub Pages](https://pages.github.com/)

### Manual Testing
The overall performence test on Lighthouse (dev-tools) has a 96% score 
![Lighthouse](assets/images/wireframes/lighthouse.png)
<a href="#contents" style="color: lichtblue;">⬆︎ Back to Top</a>

As we go in detail of the Accessibility

![CSS Accessibility](assets/images/wireframes/css-validator-test-accessibility.png)
<a href="#contents" style="color: lichtblue;">⬆︎ Back to Top</a>

Validator Testing HTML: No errors were returned when passing through the official W3C validator

![HTML Validation](assets/images/wireframes/html-validator-test.png)
<a href="#contents" style="color: lichtblue;">⬆︎ Back to Top</a>

CSS: No errors were found when passing through the official (Jigsaw) validator

![CSS Validation](assets/images/wireframes/css-validator-test.png)
<a href="#contents" style="color: lichtblue;">⬆︎ Back to Top</a>

* HTML: has been validated with the W3C HTML5 Validator.

* CSS has been validated with the W3C CSS Validator and auto-prefixed with the CSS Autoprefixer.
* Links are checked with the W3C Link Checker.
* Each JavaScript file was tested on the site for errors and functionality using the console and JSHint.
* There seems to be an issue of the functions of the DOM EventListner, theoretically I could this outside the function, but I can be difficult to handle the 'click' button events individually.
* To have control over the array (list of questions) from the beginning to end, there was a need for flow control over 'currentQuestion' counter. Therefor it was necessary to set this value explicit to either 0 or -1. 
* When 'currentQuestion' value is at maximum value of the data array an exception has to introduce to the Event Lister to handle the documents Elements differently either hiding them or show them in the game-area container. 
* This same 'trick' is also implied into the buttons of the options choices, here JS is handle them as an object with for example button option 'A' and  inner text empty by initialization but when DOM elements are loaded each option button retrieve the values of the current data array. 

## Deployment
My current Github repository is locate under https://github.com/Harmonica-Men

The life version online is alread running, [Here](https://harmonica-men.github.io/Astro-Quiz/) the repo is located [here](https://github.com/Harmonica-Men/Astro-Quiz)

### For Deployment over the Internet
- make a deticated Ubuntu Linux Server (latest version can be downloaded) here - [download](https://ubuntu.com/download/server)
- go via the SSH-protocol to your local linux webserver and install the lastest Apache2 webserver [download](https://httpd.apache.org/download.cgi) or use the `sudo apt install apache2`
  command.
- Make sure that apache2 services is running on the local server! check whit command `sudo systemctl status apache2`
- go 'www' directory and copy via the SCP-protocol a copy of github repository into the your local 'www' directory.
- a detailed step by step guide: How To Download GitHud Repo, can be found [here](https://www.gitkraken.com/learn/git/github-download#how-to-download-a-github-repository)
- make sure that 'index.html' file and the corresponding directory hierachy is present in this directory 'www'
- restart the apache2 service (reload webserver) `sudo systemctl restart apache2`
- goto your browers and type the specific IP-address or domain-name of your web-server and access the web page.
- If everything goes well and routed correctly to your network, the website is now published on the internet.

## Credits
- I love maths PP2 - code institute - guidelines - Here I used the Eventlistener and mofied the code for it to work for multiple choise questions.
  - DOM Elements & Event Listener
  - Buttons and layout
- [geekforgeeks](https://www.geeksforgeeks.org/how-to-create-a-simple-javascript-quiz/) - a guide to help me get started with creating a quiz.
- [W3Schools](https://www.w3schools.com/html/)
  Sitepoint - a guide to help me get started with creating a quiz.
- [pexels](https://www.pexels.com/search/images%20free%20download/): background image and banner, free online pictures libary.
- The Science Bowl Questions and Answers ASTR-91: [PDF](https://www.csun.edu/science/ref/games/questions/97_astr.pdf)  quiz questions & answers
- [Favicon](https://www.flaticon.com/free-icons/saturn) free online favicons libary.

<a href="#contents" style="color: lichtblue;">⬆︎ Back to Top</a>