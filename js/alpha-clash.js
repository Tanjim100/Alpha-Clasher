// function play()
// {
//     // console.log('Play starts now');

//     // hide the home screen
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // show the playground
//     playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }


function handleKeyboardKeyUpEvent(event)
{
    const playerPressed = event.key;

    // Escape or Esc is pressed
    if(playerPressed == 'Escape')
    {
        gameOver();
    }

    // key player is expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    console.log(event.key, currentAlphabet);

// check right or wrong key pressed
    if(playerPressed == expectedAlphabet)
    {
        console.log('you got a point!');


        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);


        // // update score:
        // // 1.get the current score 
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        // // 2. increase the score by 1
        // const newScore = currentScore + 1;


        // // 3. show the updated score 
        // currentScoreElement.innerText = newScore;




        removebackgroundColor(expectedAlphabet);
        continueGame();
    }
    else
    {
        console.log('you lost a life.');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);


        // // update lfe:
        // // 1.get the current life 
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // // 2. increase the score by 1
        // const newLife = currentLife - 1;


        // // 3. show the updated score 
        // currentLifeElement.innerText = newLife;

        if(updatedLife == 0)
        {
            gameOver();
        }
    }
    
}


// press the key 
document.addEventListener('keyup', handleKeyboardKeyUpEvent);


function continueGame()
{
    // step-1: generate a random alphabet
    const alphabet = getRandomAlphabet();
    // console.log(alphabet);

    // step-2: set the random alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;


    // step-3: set background color of the alphabet
    setBackgroundColor(alphabet)
}



function play()
{
    // show only the play ground, others will be hidden
    hideElementById('home-screen');
    showElementById('play-ground');
    hideElementById('final-score');


    // set the initial score
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame();
}


function gameOver()
{
    hideElementById('play-ground');
    showElementById('final-score');


    // get the final score 
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('game-end', lastScore);


    // clear the last selected alphabet highlights
    const lastAlpha = document.getElementById('current-alphabet');
    // console.log('last alphabet: ', lastAlpha.innerText);
    removebackgroundColor(lastAlpha.innerText);
}




// testing another push