import { useFormik } from 'formik';
import { useSelector,useDispatch } from 'react-redux';


const FormMeme = () => {
    const dispatch = useDispatch();
    const data = useSelector(data => data)

    const handleSubmit = (values) => {
        dispatch({type : "CREATE" , payload : values})
        
    }
    const formik = useFormik({
        initialValues: {
            url:"",
            top:"",
            bottom:""
        },
        onSubmit : (values) => {
            handleSubmit(values);
            console.log(data)
        }

    })

    return(
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="url">Enter URL</label>
            <input id="url" type="url" {...formik.getFieldProps('url')}/>

            <label htmlFor="top">Top sentence</label>
            <input id="top" type="text" {...formik.getFieldProps('top')}/>
            
            <label htmlFor="bottom">Bottom sentence</label>
            <input id="bottom" type="text" {...formik.getFieldProps('bottom')}/>

            <button type='submit'>Add</button>
        </form>
    )

}

export default FormMeme
