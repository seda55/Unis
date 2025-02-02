import React from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct } from '../../redux/features/ProductSlice';
import Form from '../form/Form';


const Admin = () => {
  const {products} = useSelector((state)=>state.products)

  console.log(products)
  const dispatch = useDispatch()
  const handleAddProduct = (product) => {
    dispatch(addProduct(product));
  };

  
  return (
    <div>Admin
 <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
       
      {products && products.length>0  ? (
  products.map((products)=>(
    <tr key={products._id}>
          <td>#</td>
          <td><img src={products.img} alt="" /></td>
          <td>{products.title}</td>
          <td>{products.category}</td>
          <td>{products.price}</td>
          <td><button onClick={()=>dispatch(deleteProduct(products._id))}>delete</button></td>
        </tr>
  ))
):(<tr>
  <td colSpan="6" style={{ textAlign: 'center' }}>
    No products found
  </td>
</tr>)}

      </tbody>
    </Table>
    <Form onSubmit={handleAddProduct} />
    </div>
  )
}

export default Admin