const quotes=[{
quote:"hello world0",
author:"c0",
},{
    quote:"hello world1",
author:"c1",

},{
    quote:"hello world2",
author:"c2",

},{
    quote:"hello world3",
author:"c3",

},{
    quote:"hello world4",
author:"c4",

},{
    quote:"hello world5",
author:"c5",

},{
    quote:"hello world6",
author:"c6",

},{
    quote:"hello world7",
author:"c7",

},{
    quote:"hello world8",
author:"c8",

},{
    quote:"hello world9",
author:"c9",

},
];
const quote =document.querySelector("#quote span:first-child");
const author =document.querySelector("#quote span:last-child");
const todaysQuote=quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;

