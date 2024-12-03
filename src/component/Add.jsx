import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addproductApi } from '../../services/allapi';


function Add() {

    const [show, setShow] = useState(false);
    const [product, setProduct] = useState({
        name: "",
        category: "",
        price: "",
        stock: "",
        description: ""
    })
    console.log(product);




    const handleClose = () => {setShow(false);
        handleCancel()
    }
    const handleShow = () => setShow(true);

    const handleCancel = () => {
        setProduct({
            name: "",
            category: "",
            price: "",
            stock: "",
            description: ""
        })
    }

    const handleAdd = async()=>{
        const {name, category, price, stock, description} = product

        if(!name || !category || !price || !stock || !description){
            alert('please fill the form completely')
        }
        else{
            const result = await addproductApi(product)
            console.log(result);
            handleClose()
            
        }
    }

    return (
        <div>

            <h4 className='text-center text-black p-3 '><FontAwesomeIcon icon={faUpload} className='me-3' onClick={handleShow} />Upload</h4>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-primary'>Upload Datas</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className='text-black'>Fill the details</p>
                    <form className='border border-secondary p-3 rounded'>
                        <div className="mb-3">
                            <input type="text" placeholder='Name' value={product.name} className='form-control p-2 ' onChange={(e) => setProduct({ ...product, name: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <input type="text" placeholder='Category' value={product.category}  className='form-control p-2' onChange={(e) => setProduct({ ...product, category: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <input type="text" placeholder='Price' value={product.price}  className='form-control p-2' onChange={(e) => setProduct({ ...product, price: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <input type="text" placeholder='Stock' value={product.stock}  className='form-control p-2' onChange={(e) => setProduct({ ...product, stock: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <textarea placeholder='Description' value={product.description}  className='p-2 w-100' onChange={(e) => setProduct({ ...product, description: e.target.value })} ></textarea>
                        </div>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleAdd}>
                        Upload
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Add