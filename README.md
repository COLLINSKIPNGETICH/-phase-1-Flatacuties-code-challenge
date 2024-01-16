# -phase-1-Flatacuties-code-challenge
 this is an app for voting for the cutest animal!  i used local API for our app, Flatacuties

Setup
Run this command to get the backend started:

json-server --watch db.json
Test your server by visiting this route in the browser:

http://localhost:3000/characters

Then, open the 
index.html
 file on your browser to run the application.

Write your code in the 
src/index.js
 file. The base URL for your API will be http://localhost:3000.

Deliverables
As a user, I can:

See all characters names in a div with the id of "character-bar". Create a span tag with the character's name and add it the div#character-bar once you have retrieved the character data from the server. You will need to make a GET request to the following endpoint to retrieve the character data:

GET /characters

Example Response:
[
 {
   "id": 1,
   "name": "Mr. Cute",
   "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
   "votes": 0
 },
 {
   "id": 2,
   "name": "Mr. Monkey",
   "image": "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",
   "votes": 0
 },
 ...
]
When the character in the div#character-bar is clicked, display the character's details in the div#detailed-info. You can either use the character information from your first request, or make a new request to this endpoint to get the character's details:

GET /characters/:id

Example Response:
{
 "id": 1,
 "name": "Mr. Cute",
 "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
 "votes": 0
}
When the form#votes-form is submitted, add the number of votes from the input field to the character displayed in the div#detailed-info.