// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        {
          text: "The only way to do great work is to love what you do.",
          author: "Steve Jobs",
        },
        {
          text: "The best time to plant a tree was 20 years ago. The second best time is now.",
          author: "Chinese Proverb",
        },
        {
          text: "Life is what happens when you're busy making other plans.",
          author: "John Lennon",
        },
      ],
      currentQuoteIndex: 0,
    };
  }

  getRandomQuote = () => {
    const { quotes, currentQuoteIndex } = this.state;
    const newIndex = Math.floor(Math.random()*quotes.length);
    if(newIndex !== currentQuoteIndex) {
      this.setState({
        currentQuoteIndex :newIndex
      })
    } else {
      this.getRandomQuote()
    }
  }
  render() {
    const { quotes, currentQuoteIndex } = this.state;
    const currentQuote = quotes[currentQuoteIndex];
    return (
      <div id="quote-box">
        <div id="text">
          {currentQuote.text}
        </div>
        <div id="author">
          - {currentQuote.author}
        </div>
        <button id="new-quote" onClick={this.getRandomQuote}>
          New Quote
        </button>
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text="${currentQuote.text}" - ${currentQuote.author}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet Quote
        </a>
      </div>
    );
  }

}

export default App;
