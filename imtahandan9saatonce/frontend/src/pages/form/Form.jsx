import React from 'react'
import { Formik } from 'formik';
import { productSchema } from './productSchema';
 
const Form = () => {
  return (
    <div>
        <Formik
       initialValues={{ 
        img: '',
        title:'',
        category:'',
        price:'',

    }}
    validationSchema={productSchema}
    onSubmit={(values, actions) => {
        onSubmit(values); // Məhsul məlumatı Admin komponentinə göndərilir
        actions.setSubmitting(false);
      }}
     >
       {props => (
         <form onSubmit={props.handleSubmit}>
           <input
             type="text"
             onChange={props.handleChange}
             onBlur={props.handleBlur}
             value={props.values.img}
             name="img"
           />
           {props.errors.img && <div id="feedback">{props.errors.img}</div>}
           <input
             type="text"
             onChange={props.handleChange}
             onBlur={props.handleBlur}
             value={props.values.title}
             name="title"
           />
           {props.errors.title && <div id="feedback">{props.errors.title}</div>}
           <input
             type="text"
             onChange={props.handleChange}
             onBlur={props.handleBlur}
             value={props.values.category}
             name="category"
           />
           {props.errors.category && <div id="feedback">{props.errors.category}</div>}
           <input
             type="text"
             onChange={props.handleChange}
             onBlur={props.handleBlur}
             value={props.values.price}
             name="price"
           />
           {props.errors.price && <div id="feedback">{props.errors.price}</div>}
           <button type="submit">Submit</button>
         </form>
       )}
     </Formik>
    </div>
  )
}

export default Form