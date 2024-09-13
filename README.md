# webdevcourse
Some homework from my webdev course.
I've followed this course https://www.udemy.com/course/the-complete-web-development-bootcamp/?couponCode=ST17MT91224B. Thanks Angela!

# dev
Course suggested to use this solution in order to compare user inputs:
1. Create a new function called checkAnswer(), it should take one input with the name currentLevel

2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.

e.g. If the user has pressed red, green, red, yellow, the index of the last answer is 3.

3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".

You can now use these log statements along with logging the values of userClickedPattern and gamePattern in the Chrome Developer Tools console to check whether if your code is performing as you would expect and debug your code as needed. Once you're done, feel free to remove these log statements.

But I wanted to compare the arrays, so I turned them in to string and compared it, seemed like a better option, took more time but worth it.
So, main difference is in the function checkAnswer() and of course I have changed others and added gameOver and startOver functions.
