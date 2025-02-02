import * as Yup from 'yup';

export const productSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is required')
    .min(3, 'Title must be at least 3 characters long'),
  category: Yup.string()
    .required('Category is required'),
  price: Yup.number()
    .required('Price is required')
    .positive('Price must be a positive number'),
  img: Yup.string()
    .required('Image URL is required')
    .url('Invalid URL format'),
});
