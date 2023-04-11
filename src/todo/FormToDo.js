import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

const FormToDo = () => {
    const dispatch = useDispatch();
    const data = useSelector((data) => data);

    const handleSubmit = (values) => {
        dispatch({ type: 'CREATE', payload: values });
    };


    const formik = useFormik({
        initialValues: {
            top: '',
        },
        onSubmit: (values) => {
            handleSubmit(values);
            console.log(data);
        },
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='top'>To Do:</label>
                <input
                    id='top'
                    type='text'
                    {...formik.getFieldProps('top')}
                />

                <button type='submit'>Add</button>
            </form>

            <ul>
                {data.data.map((data) => (
                    <li onClick={() => dispatch({type : "REMOVE" , payload : data.top})}>{data.top}</li>
                ))}
            </ul>
        </>
    );
};

export default FormToDo;
