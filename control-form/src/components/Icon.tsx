import PropTypes, { InferProps } from 'prop-types'

function Icon({gender}:InferProps<typeof Icon.propTypes>) {
    return (
      <div className='icon'>
        {gender === '' && <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="#4263eb"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="16" cy="12" r="6"></circle> <path  d="M7,27c0-4.971,4.029-9,9-9s9,4.029,9,9"></path> </g></svg>}
       {gender === 'Female' && <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M20 9C20 13.0803 16.9453 16.4471 12.9981 16.9383C12.9994 16.9587 13 16.9793 13 17V19H14C14.5523 19 15 19.4477 15 20C15 20.5523 14.5523 21 14 21H13V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V21H10C9.44772 21 9 20.5523 9 20C9 19.4477 9.44772 19 10 19H11V17C11 16.9793 11.0006 16.9587 11.0019 16.9383C7.05466 16.4471 4 13.0803 4 9C4 4.58172 7.58172 1 12 1C16.4183 1 20 4.58172 20 9ZM6.00365 9C6.00365 12.3117 8.68831 14.9963 12 14.9963C15.3117 14.9963 17.9963 12.3117 17.9963 9C17.9963 5.68831 15.3117 3.00365 12 3.00365C8.68831 3.00365 6.00365 5.68831 6.00365 9Z" fill="#4263eb"></path> </g></svg>}
       {gender === 'Male' && <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15 3C15 2.44772 15.4477 2 16 2H20C21.1046 2 22 2.89543 22 4V8C22 8.55229 21.5523 9 21 9C20.4477 9 20 8.55228 20 8V5.41288L15.4671 9.94579C15.4171 9.99582 15.363 10.0394 15.3061 10.0767C16.3674 11.4342 17 13.1432 17 15C17 19.4183 13.4183 23 9 23C4.58172 23 1 19.4183 1 15C1 10.5817 4.58172 7 9 7C10.8559 7 12.5642 7.63197 13.9214 8.69246C13.9587 8.63539 14.0024 8.58128 14.0525 8.53118L18.5836 4H16C15.4477 4 15 3.55228 15 3ZM9 20.9963C5.68831 20.9963 3.00365 18.3117 3.00365 15C3.00365 11.6883 5.68831 9.00365 9 9.00365C12.3117 9.00365 14.9963 11.6883 14.9963 15C14.9963 18.3117 12.3117 20.9963 9 20.9963Z" fill="#4263eb"></path> </g></svg>}
        {gender === 'Other' && <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.5 14.6667C14.8012 14.6667 16.6667 12.8012 16.6667 10.5C16.6667 9.562 16.3567 8.69638 15.8336 8C15.7067 7.83105 15.5673 7.67205 15.4167 7.5244M12.5 14.6667C10.1988 14.6667 8.33333 12.8012 8.33333 10.5C8.33333 9.33442 8.81193 8.28062 9.58333 7.5244M12.5 14.6667V18M12.5 20.9167V18M12.5 18H9.58333M12.5 18H15.4167M20 3H16.5M20 3V6.5M20 3L15.4167 7.5244M15.4167 7.5244C14.6651 6.78763 13.6356 6.33333 12.5 6.33333C11.3644 6.33333 10.3349 6.78763 9.58333 7.5244M9.58333 7.5244L8 6M5 3H8M5 3V6M5 3L8 6M8 6L6 8M8 6L10 4" stroke="#4263eb" stroke-width="1.66667" stroke-linecap="round"></path> </g></svg>}
      </div>
    );
  }

  Icon.propTypes = {
        gender: PropTypes.string
  }
  
  export default Icon;