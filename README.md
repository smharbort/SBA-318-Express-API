# Express API Server Application - SBA-318
### My idea is to create a quiz game API that I will be able to use in the future, with the ability to create and edit quiz question sets as a user, so I can bring this along with me in the future regardless of what coding technology or other subject I'm learning.
## Here's the site architecture:
#### / (http://localhost:3000)
#### / quizzes
#### / quizzes / html-css: redirects to html-css/:qNum and assigns a random question number out of the given question dataset
#### / quizzes / js-intro: same
#### / user
#### / user / create-quiz: rendered pug view that allows for user quiz creation question-by-question (working on POST, PATCH, DELETE functionality for users & quiz sets)
#### / user / (play-created: NOT yet supported)
## Here's what current functionality looks like as of right now:
### 1. site navigation using (some) HATEOAS links
### 2. quizzes functionality:
### QUERY ?hateoas=(anything) to begin a quiz with a placeholder question set. When you want to guess the answer, on the url you're at, QUERY ?answer=(NUMBER of answer you chose out of options given), and it will include a JSON response with a result object. If you query with the answer word itself, you will get it wrong.
### My intention with this was to create a regular site layout for clients to create & play quiz games, but, if budding developers want to interact with the API exclusively thru url paths & queries, they could do so by querying something like ?hateoas=true or ?mode=hateoas or something. Need to continue expanding site architecture to implement fully. Also need to continue looking into express-session package to allow persistent session data to be able to tally up users' quiz scores.
### 3. user / create-quiz:
### right now it's just a form rendered from a pug view. The way I have it set up, to incorporate POST, PATCH, DELETE methods for user interaction, I would check if the userId route parameter exists as a user in the users dataset, find the quiz corresponding to the "category" input value given, and add/edit questions from there. And if not, then create a new user in the dataset. If you look in the "brainstorming" folder, there's a screenshot of an example user data entry. I'm playing around with classes to expedite the creation of user objects with the quiz sets they create.
### I think the question-by-question format for user interaction would be quite tedious. I will re-structure this going forward for ease-of-use.