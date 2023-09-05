const quotes = [
    // 6개 
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "The greatest crime in the world is not developing your potential. When you do what you do best, you are helping not only yourself, but the world.",
        author: "Roger Williams",
    },
    {
        quote: "You’ve gotten a good education, but most people go through life using up a very, very small part of their potential.",
        author: "Warren Buffet",
    },
    {
        quote: "There are admiral potentialities in every human being. Believe in your strength and your youth. Learn to repeat endlessly to yourself, ‘It all depends on me.",
        author: "Andre Gide",
    },
    {
        quote: "There is no heavier burden than an unfulfilled potential.",
        author: "Charles Schulz",
    },
    {
        quote: "Continuous effort—not strength or intelligence—is the key to unlocking our potential.",
        author: "Winston Churchill",
    },
    {
        quote: "A reader lives a thousand lives before he dies... The man who never reads lives only one.",
        author: "George R.R. Martin",
    },
    {
        quote: "Books are the plane, and the train, and the road. They are the destination, and the journey. They are home.",
        author: "Anna Quindlen",
    },
    {
        quote: "A house without books is like a room without windows.",
        author: "Heinrich Mann",
    },
    {
        quote: "We read to know we are not alone.",
        author: "C.S. Lewis",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
// random(): 0~1 사이의 float를 반환
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; 

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;