const quotes = [
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "한형준",
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "한형준",
    },
    {
      quote:
        "The world is a book and those who do not travel read only one page.",
      author: "한형준",
    },
    {
      quote: "Life is either a daring adventure or nothing at all.",
      author: "한형준",
    },
    {
      quote: "To Travel is to Live",
      author: "한형준",
    },
    {
      quote: "Only a life lived for others is a life worthwhile.",
      author: "한형준",
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "한형준",
    },
    {
      quote: "Never go on trips with anyone you do ntot love.",
      author: "한형준",
    },
    {
      quote: "We wander for distraction, but we travel for fulfilment.",
      author: "한형준",
    },
    {
      quote: "Travel expands the mind and fills the gap.",
      author: "한형준",
    },
  ];
  
  const quote = document.querySelector("#quote span:first-child")
  const author = document.querySelector("#quote span:last-child")
//   first child - quote div의 첫번째(first child) 요소를 가져오라



const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
// randomess를 이용해 무작위로 명언을 가져와보자
// Math.random() -> 0과 1 사이에 무작위 수를 추출함
// Math.random()*10 -> 0과 10 사이에 무작위 수를 추출함 1*10 = 10
// 하지만 뒤에 소수점까지 나오므로 소수점을 제외해서 숫자를 추출해보자
// round(a) = 반올림 ceil = 올림 floor = 내림
Math.floor(Math.random()*10)
// 1부터 10까지 무작위 수가 나옴
// 1부터 11까지 하려면 math.random*11을 해줘야 함
// 리스트의 길이를 구하려면 리스트.length를 하면 됨

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;