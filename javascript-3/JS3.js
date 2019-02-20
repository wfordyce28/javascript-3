/**
 *   @author Fordyce, William (wfordyce28@gmail.com)
 *   @version 0.0.1
 *   @summary Code demonstration:  :: created:
 */

let movieName, movieRating, continueResponse, printGoodbye;
const MAX_RATING = 5, MIN_RATING = 0, MAX_TRIES = 3;

"use strict";
const PROMPT = require('readline-sync');

function main(){
    setContinueResponse();
    while (continueResponse === 1) {
        setMovieName();
        setMovieRating();
        setContinueResponse();
    }
}

main();

/**
 * @method
 * @desc Inputting the name of the movie
 * @returns {null}
 */
function setMovieName(){
    movieName = (PROMPT.question(`Please enter the name of the movie you would like to review: `))
}

/**
 * @method
 * @desc Inputting the rating of the movie
 * @returns {null}
 */
function setMovieRating(){
    movieRating = Number(PROMPT.question(`Please enter your rating for ${movieName} (0-5): `));
    if (movieRating < MIN_RATING || movieRating > MAX_RATING){
        console.log(`${movieRating} is not a valid rating please try again.`);
        movieRating = Number(PROMPT.question(`Please enter your rating for ${movieName} (0-5): `));
       if (movieRating < MIN_RATING || movieRating > MAX_RATING){
            console.log(`${movieRating} is not a valid rating please try again.`);
            movieRating = Number(PROMPT.question(`Please enter your rating for ${movieName} (0-5): `));
            if (movieRating < MIN_RATING || movieRating > MAX_RATING){
                    console.log(`${movieRating} is not a valid rating please try again.`);
                    movieRating = Number(PROMPT.question(`Please enter your rating for ${movieName} (0-5): `));}
        }

    }
    else{
        movieRating >= MIN_RATING && movieRating <= MAX_RATING
    }
}

/**
 * @method
 * @desc Asks the user if they would like to rate another movie
 * @returns {null}
 */
function setContinueResponse() {
    if (continueResponse === 1 || continueResponse === 0) {
        continueResponse = Number(PROMPT.question(`\nWould you like to rate another movie? [0=no, 1=yes]: `));
        while (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}



