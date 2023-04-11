import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const SelectDel = () => {
    const data = useSelector((data) => data.data);
    const dispatch = useDispatch();
    console.log(data);

    return (
        <div>
            {data.map((s) => (
                <p onClick={() => dispatch({ type: 'REMOVE', payload: s.top })}>
                    {s.url}
                </p>
            ))}
        </div>
    );
};

export default SelectDel;
