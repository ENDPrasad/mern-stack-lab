import '../reusable.css'
import PropType, {InferProps} from 'prop-types'


function Quote({quote}:InferProps<typeof Quote.propType>) {
  return (
    <div className="quote-section">
      <div className='quote-now'>
        <blockquote>{quote.quote}</blockquote>
      </div>
      <div className='author-now'>
        <em>- {quote.author}</em>
      </div>
      <div className='left-quote'>"</div>
      <div className='right-quote'>"</div>
    </div>
  );
}

Quote.propType = {
    quote: {
        quote: PropType.string,
        author: PropType.string
    }
}

export default Quote;
