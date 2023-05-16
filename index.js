// Code your solutions in this file

const card = ["Guadalupe", "Ollie", "Aki"];
const eventName = "surprise";

function writeCards(card, eventName) {
    const thankYouMessages = []
        for (let n = 0; n < card.length; n++) {
            const message = `Thank you, ${card[n]}, for the wonderful ${eventName} gift!`;
            thankYouMessages.push(message);
            console.log(message);       
    }
    return thankYouMessages;
}

writeCards(card, eventName)

function countDown() {
    for (let i = 10; i >= 0; i--) {
      console.log(i);
    }
}

  countDown()