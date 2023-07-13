 

var Quotes=[
 
    {
      text:"Be yourself; everyone else is already taken",
      Author: "  Oscar Wilde" 
    },

    {
        text:"You only live once, but if you do it right, once is enough.",
        Author: " Mae West" 
      },

      {
        text:"The best way to predict the future is to invent it.",
        Author:  " Alan Kay"
      },

      {
        text:"It does not matter how slowly you go as long as you do not stop.",
        Author: " Confucius"
      },

      {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        Author:  " Winston S. Churchill"
      },

      {
        text: "Education is the most powerful weapon which you can use to change the world.",
        Author: " Nelson Mandela" 
      },

      {
        text: "Innovation distinguishes between a leader and a follower.",
        Author:   " Steve Jobs"
      },

      {
        text: "Finally, I concluded",
        Author:  " Ammar Yasser"
      },
     
];
var quoteText = document.getElementById("Quotetext");
var authorText = document.getElementById("Author");
var quoteBtn = document.getElementById("btn");
function getRandomQuote(){ 

    var randomIndex=Math.floor(Math.random()*Quotes.length );
    quoteText.textContent=Quotes[randomIndex].text;
    authorText.textContent = Quotes[randomIndex].Author;

}
btn.addEventListener("click", getRandomQuote);  
