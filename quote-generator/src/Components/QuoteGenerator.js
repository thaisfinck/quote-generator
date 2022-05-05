import React from 'react';


export default class QuoteGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
      color: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      quote: '',
      author: '',
      color: '',
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

      },
      {
        quote: 'Don\'t be afraid to give up the good to go for the great.',
        author: 'John D. Rockefeller',

      },
      {
        quote: 'The best and most beautiful things in the world cannot be seen, nor touched, nor known, they are only memory.',
        author: 'Claude Monet',
      },
    ]

    const colors = [
      '#16a085',
      '#27ae60',
      '#2c3e50',
      '#f39c12',
      '#e74c3c',
      '#9b59b6',
      '#FB6964',
      '#342224',
      '#472E32',
      '#BDBB99',
      '#77B1A9',
      '#73A857'
    ]
   
    const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const quote = selectedQuote.quote;
    const author = selectedQuote.author;

    const selectedColor = colors[Math.floor(Math.random() * colors.length)];
    const color = selectedColor;
    
    return (
      <div className="container-fluid">
        <div style={{ height: "100vh", backgroundColor: color}} id="body">
          <div className="container card w-50 p-3 position-absolute top-50 start-50 translate-middle" id="quote-box">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <i className="fas fa-quote-left fs-1 me-2"></i><span className="fs-2" id="text" >{quote}</span>

                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="fs-5 text-end" id="author">- {author}</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button className="btn text-white" onClick={() => {navigator.clipboard.writeText(quote + ' - ' + author)}}
style={{backgroundColor: color}}> 
                  Copy
                  </button>
                </div> 
                <div className="col text-end">
                  <button className="btn text-white" style={{backgroundColor: color}} id="new-quote" onClick={this.handleSubmit}>New Quote</button>
                </div>
              </div>        
            </div>
          </div>
        </div>
      </div>
    )
  }
}

