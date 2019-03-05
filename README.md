# Pig Dice
#### This website allows two players to play the game of pig dice , 5th March, 2019
#### By **Phil Kipkemboi**
## Description
In this website, two players play Pig dice in which they take turns to roll a dice and the total of the rolls taken. The first one to 100 wins. If a player rolls a one in their turn they loose the accumulated points in the turn. If they choose to save the score it is saved to their total score.
## Setup/Installation Requirements
* Install git
* Open terminal
* Navigate to preferred directory
* Use command below to clone the repo.
* $git clone https://github.com/verisence/pig-dice
* The repo is then cloned to your local computer.
## Known Bugs
No known bugs at the moment.
## BDD
| Input                | Behavior                                | Output                                             |
|----------------------|-----------------------------------------|----------------------------------------------------|
| Code from index.html | Loads the landing page                  | Shows the instructions and the name inputs         |
| Start Game button    | Loads the dice roll page                | Displays the roll dice page to the user            |
| Roll button          | Generates a random number for dice roll | Displays the rolled number and the sum of the turn |
| Hold Button          | Saves the score                         | Displays final score till the game is won          |
## User Stories
* As a user, I want to roll the dice when it's my turn to play in the game.
* As a user, I want to see the score I get for each roll of the dice I make in the game.
* As a user, I want to see my cumulative score for each round I play in the game. For example, if I roll the scores 2-6-3 consecutively, I should see my end score as 11.
* As a user, I want the option to hold my score when I'm satisfied with the points I've gained in a round of playing. The game should, therefore, add my held score to my most recent cumulative score.
* As a user, I want to be alerted when my dice rolls on number 1. This will help me know that I can't roll the dice until the alternate player takes their round.
* As a user, I need a way to know which player has won the game, which means they have scored 100 points before the alternate player.
## Technologies Used
* HTML
* JavaScript
* CSS
## Support and contact details
Feel free to reach me through kipkemboiphil@gmail.com
### License
MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
