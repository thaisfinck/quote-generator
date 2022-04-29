import React from 'react'

export default class QuoteGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      quote: '',
      author: '',
    });
  }

  render() {
  
    const quotes = [
      {
        quote: 'I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.',
        author: 'Marilyn Monroe',
      },
      {
        quote: 'Get busy living or get busy dying.',
        author: 'Stephen King',
      },
       {
        quote: 'The way to get started is to quit talking and begin doing.',
        author: 'Walt Disney',
      },
      {
        quote: 'The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.',
        author: 'Winston Churchill',
      }
    ]
    const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const quote = selectedQuote.quote;
    const author = selectedQuote.author;
    
    return (
      <div className="container-fluid">
        <div className="container card w-50 p-3 position-absolute top-50 start-50 translate-middle" id="quote-box">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <i class="fas fa-quote-left fs-1 me-2"></i><span className="fs-2" id="text" >{quote}</span>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="fs-5 text-end" id="author">- {author}</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
              <a href="twitter.com/intent/tweet" id="tweet-quote">
                <button className="btn btn-info">
                <i className="fab fa-twitter fs-4 text-white"></i>
                </button>
              </a>
              </div>
              <div className="col text-end">
                <button className="btn btn-info text-white" id="new-quote" onClick={this.handleSubmit}>New</button>
              </div>
            </div>        
          </div>
        </div>
      </div>
    )
  }
}

