const quotes = [
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "-Walt Disney-",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "-John Lennon-",
  },
  {
    quote:
      "The world is a book and those who do not travel read only one page.",
    author: "-Saint Augustine-",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "-Helen Keller-",
  },
  {
    quote: "To Travel is to Live",
    author: "-Hans Christian Andersen-",
  },
  {
    quote: "Only a life lived for others is a life worthwhile.",
    author: "-Albert Einstein-",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "-Mae West-",
  },
  {
    quote: "Never go on trips with anyone you do ntot love.",
    author: "-Hemming Way-",
  },
  {
    quote: "We wander for distraction, but we travel for fulfilment.",
    author: "-Hilaire Belloc-",
  },
  {
    quote: "Travel expands the mind and fills the gap.",
    author: "-Sheda Savage-",
  },
  {
    quote:
      "Without continuous personal development, you are now all that you will ever become and hell starts when the person you are meets the person you could have been.",
    author: "-Eli cohen-",
  },
  {
    quote:
      "Working hard for something we don't care about is called stressed, working hard for something we love is called passion.",
    author: "-Simon Sinek-",
  },
  {
    quote:
      "Don't let the fear of losing be greater than the excitement of winning.",
    author: "-Robert Kiyosaki-",
  },
  {
    quote:
      "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
    author: "-Dale Carnegie-",
  },
  {
    quote: "Action is the foundational key to all success.",
    author: "-Pablo Picasso-",
  },
  {
    quote:
      "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack of will.",
    author: "-Vince Lombardi-",
  },
  {
    quote:
      "It is your determination and persistence that will make you a successful person.",
    author: "-Kenneth J Hutchins-",
  },
  {
    quote:
      "You can waste your life drawing lines. Or you can live your life crossing them.",
    author: "-Shonda Rhimes-",
  },
  {
    quote: "Be poor, humble and driven. Don't be afraid to shift or pivot.",
    author: "-Alex Rodriguez-",
  },
];

const quote = document.querySelector("#quote  span:first-child");
const author = document.querySelector("#quote  span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
