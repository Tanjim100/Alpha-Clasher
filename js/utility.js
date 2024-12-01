function hideElementById(elementId)
{
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}


function showElementById(elementId)
{
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}


function getRandomAlphabet()
{
    // create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    // console.log(index);

    const alphabet = alphabets[index];
    return alphabet;
}

function setBackgroundColor(elementId)
{
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}


function removebackgroundColor(elementId)
{
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

// function getElementTextById(elementId)
// {
//     const element = document.getElementById(elementId);
//     const text = element.innerText;
//     return text;
// }

function getTextElementValueById(elementId)
{
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const value = parseInt(elementText);
    return value;
}


function setTextElementValueById(elementId, value)
{
    const element = document.getElementById(elementId);
    element.innerText = value
}