import { click } from '@testing-library/user-event/dist/click';
import '../reusable.css'

import PropType, {InferProps} from 'prop-types'

function CustomButton({clickHandle}:InferProps<typeof CustomButton.propType>) {
  return (
    <div className="btn-section flex">
      <button onClick={()=>clickHandle?clickHandle():''}>Quote</button>
    </div>
  );
}

CustomButton.propType = {
    clickHandle: PropType.func
}

export default CustomButton;
