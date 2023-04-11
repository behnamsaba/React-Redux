import { useSelector,useDispatch } from "react-redux"

const Second = () => {
    const count = useSelector(store => store.count);
    const dispatch = useDispatch()
    
    const handleClick = () => {
        dispatch({type :"INCREMENT"});

    }

    return(
        <div>
            <h1>the count is {count}</h1>
            <button onClick={handleClick}>+</button>
        </div>
    )
}
export default Second