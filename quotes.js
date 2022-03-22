const quotes =[
    {quote:"Happiness is the only thing that multiplies when you share it.", author:"Albert Schweitzer", colors:"green"},
    {quote:"When we are open to new possibilities, we find them. Be open and skeptical of everything.", author:"Todd Kashdan",color:"blue"},
    {quote:"Hard work keeps the wrinkles out of the mind and spirit.", author:"Helena Rubinstein", color: "black"},
    {quote:`Every day may not be good... but there’s something good in every day.`, author:"Alice Morse Earle", color: "red"},
    {quote:"The way I see it, if you want the rainbow, you gotta put up with the rain.", author:"Dolly Parton", color:"Purple"},
    {quote:"Live life to the fullest and focus on the positive.", author:"Matt Cameron", color:"#00FA9A"},
    {quote:`It’s not whether you get knocked down, it’s whether you get up.`, author:"Helena Rubinstein", color:"#800080"}
]

let currentColor;
let currentQuote;

function randomQuote() {
    const randomQuote = Math.floor(Math.random() * quotes.length);
    if (randomQuote === currentQuote) {
      randomQuote();
      return;
    }
    currentQuote = randomQuote;
    const quote = quotes[randomQuote];
    const quoteText = document.getElementById('quote');
    const author = document.getElementById('authorOfQuote');
    const color = quotes[randomQuote].color;
    quoteText.innerText = quote.quote;
    author.innerText = quote.author;
    const body = document.querySelector("body");
    body.style.backgroundColor = color;
    body.style.color = color;
    const btn = document.getElementById("btn-nextQuote");
    btn.style.backgroundColor = color;
    quoteText.style.color = color;
    author.style.color = color;

  }


  const updateQuote = document.getElementById('btn-nextQuote');
  updateQuote.addEventListener('click', () => {
   randomQuote();
})
randomQuote();