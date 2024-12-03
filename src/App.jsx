import { useEffect, useState } from 'react'
import { deleteApi, getProductApi } from '../services/allapi'
import './App.css'
import Add from './component/Add'

function App() {
  const [pro, setPro] = useState([])
  const [del, setDel] = useState({})

  const getProduct = async()=>{
    const result = await getProductApi()
    // console.log(result);
    setPro(result.data)
    
  }

  console.log(pro);


const handleDelete = async(id)=>{
  const result = await deleteApi(id)
  console.log(result);
  
  if(result.status>=200 && result.status<300){
    setDel(result)
  }
  else{
    alert('somthing went wrong')
  }
}
  

  useEffect(()=>{
    getProduct()
  },[del])


  return (
    <>
      <h1 className='text-black text-center mt-5' style={{fontWeight:'700'}}>Product Inventory System</h1>
      <Add/>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 table-responsive">
            { pro?.length>0?
            <table className='table table-bordered mt-5 '>
                <thead>
                  <tr>
                    <th className='text-center'>Slno</th>
                    <th className='text-center'>Name</th>
                    <th className='text-center'>Category</th>
                    <th className='text-center'>Price</th>
                    <th className='text-center'>Stock</th>
                    <th className='text-center'>Description</th>
                    <th className='text-center'>Action</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {pro?.map((item,index)=>(
                    <tr>
                    <td className='text-center'>{index+1}</td>
                    <td className='text-center'>{item?.name}</td>
                    <td className='text-center'>{item?.category}</td>
                    <td className='text-center'>{item?.price}</td>
                    <td className='text-center'>{item?.stock}</td>
                    <td className='text-center'>{item?.description}</td>
                    <td className='text-center d-flex justify-content-around align-items-center'>
                      <button className='p-2 rounded btn btn-primary'>Edit</button>
                      <button className='p-2 rounded btn btn-danger' onClick={()=>handleDelete(item?.id)}>Delete</button>
                    </td>
                  </tr>
                  ))}
                  
                </tbody>
            </table>

:

            <h3 className='text-center text-danger'>No Uploaded files</h3>
}

          </div>
          <div className="col-md-1"></div>
        </div>
      </div>

      
    </>
  )
}

export default App
