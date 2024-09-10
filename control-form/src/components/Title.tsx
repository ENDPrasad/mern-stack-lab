import PropTypes, { InferProps } from 'prop-types'

function Title({data}:InferProps<typeof Title.propTypes>) {
    return (
      <div>
        
        <h2>Welcome <span className='user-name'>
        {data.name || 'Anonymous'}
            </span>!!</h2>
      </div>
    );
  }

  Title.propTypes = {
    data: {
        name: PropTypes.string,
        gender: PropTypes.string
    }
  }
  
  export default Title;