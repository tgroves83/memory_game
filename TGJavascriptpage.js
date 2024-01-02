//Assign variable card to each div named .card
const card = document.querySelectorAll('.card');

//create new variables for lockedcards and if the cards have flipped and a set of 2 cards
let lockedCards = false;
let hasCardFlipped = false;
let card1, card2;

//When a card is clicked, activate function flipcard()
card.forEach(card => card.addEventListener('click', flipCard));

//Assign each card image to array called cardArray to be called upon later
const cardArray = ["card1.jpg", "card2.jpg", "card3.jpg", "card4.jpg", "card5.jpg", "card6.jpg", "card7.jpg",
"card8.jpg", "card9.jpg", "card10.jpg", "card11.jpg", "card12.jpg", "card13.jpg", "card14.jpg", "card15.jpg", "card16.jpg",
"card17.jpg", "card18.jpg"];

function shuffle (cardArray) {

    let arrImagesReordered = new Array(36);

    for (let [idx, e] of cardArray.entries()) {

        for (let i = 0; i < 2;) {

            let x = randomize();

            if (arrImagesReordered[x] == undefined) {
                arrImagesReordered[x] = e;
                i++;
            }
        }
    }

    return arrImagesReordered;
}

//function to add back the random image onto the back of the card (could not get this to work)
function randomize()
{
    let RandomNum, min = 0, max = 35;

        RandomNum = Math.floor(Math.random() * (max - min + 1)) + min;
		
		return RandomNum;	
}

//function that has information of what to do when card is flipped
function flipCard()
{
    if (lockedCards) return;
    if (this === card1) return;//assign 'this' to the first card to check if it has been clicked

    this.classList.add('flipCard');

    if (!hasCardFlipped)
    {
        hasCardFlipped = true;
        card1 = this;//card 1 has been flipped
        return;
    }
      
    hasCardFlipped = false; 
    card2 = this;// card 2 has been flipped
    checkCards();//activate the function to check if the cards are matched or not

}

//function to check if cards are matched
function checkCards()
{
    if(card1.dataset.image === card2.dataset.image)//uses dataset.image name to check if card1 and card2 match
    {
        card1.removeEventListener('click', flipCard);
        card2.removeEventListener('click', flipCard);
        card1 = card2 = "";//set cards 1 and 2 to null
        lockedCards = false;//unlock board freezing
    }
    else
    {
        lockedCards = true;
        //if cards don't match, set a timeout to unflip the cards
        setTimeout(() => 
        {
            card1.classList.remove('flipCard');
            card2.classList.remove('flipCard');
            card1 = card2 = "";//set cards 1 and 2 to null
            lockedCards = false;//unlock board freezing
        }, 2000);
    }
}

<table cellspacing = "3em">
    <tr>
        <th rowspan = "3">a</th>
        <th colspan = "2">b</th>
        <th rowspan = "3">e</th>
    </tr>
    <tr>
        <th rowspan = "2">c</th>
        <th>d</th>
    </tr>
    <tr>
        <th>f</th>
    </tr>
</table>