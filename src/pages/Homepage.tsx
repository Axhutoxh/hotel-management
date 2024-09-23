import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store"
import { decrement, increment } from "../store/common"




function HomePage() {

    const count = useSelector((state: RootState) => state.common.value)
    const dispatch = useDispatch()
  
    return (
      <div>
        Hotel Management
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    )
  }
  
  export default HomePage
  