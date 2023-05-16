import React, { memo, useCallback, useRef, useState } from 'react'
import { Alert, Button, Form, Modal } from 'react-bootstrap'
import { notify, validateForm } from '../utils';
import UploadAndDisplayImage from '../entities/ImageUpload';
import logo from '../assets/defaultLogo.png'
import { IProduct } from '../entities/product/interface';
import { useDispatch } from 'react-redux';
import { addNewProduct } from '../app/store/actionCreators';
import { PRODUCT_NEW_ADDED } from '../const';

interface Props {
  closeModal: () => void
}

const CustomModal = ({ closeModal }: Props) => {
  const nameRef: React.RefObject<HTMLInputElement> = useRef(null);
  const priceRef: React.RefObject<HTMLInputElement> = useRef(null);
  const descriptionRef: React.RefObject<HTMLInputElement> = useRef(null);

  const dispatch = useDispatch();

  const [imageSrc, setImageSrc] = useState<any>(logo);
  const [error, setError] = useState<any>(null);

  const setImage = (file: File | string) => {
    setImageSrc(file)
  }

  const handleSubmit = useCallback(() => {
    const product: IProduct = {
      id: Math.random() * 1000,
      name: nameRef?.current?.value,
      price: priceRef?.current?.value,
      description: descriptionRef?.current?.value
        ? descriptionRef.current.value
        : 'product description',
      image:
        typeof imageSrc === 'string' ? imageSrc : URL.createObjectURL(imageSrc),
      count: 0,
    }
    const error = validateForm(product)
    if (error) {
      setError(error);
    } else {
      dispatch(addNewProduct(product));
      notify(PRODUCT_NEW_ADDED, product.name);
      closeModal();
    }
  }, [imageSrc, dispatch, closeModal]);

  return (
    <>
      <Modal show={true} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Добавить продукт</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Label>Название</Form.Label>
              <Form.Control
                type='text'
                placeholder='пылесос'
                autoFocus
                ref={nameRef}
                required
              />
              {error && error.field === 'name' ? (
                <Alert variant='danger '>{error.message}</Alert>
              ) : null}
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Цена</Form.Label>
              <Form.Control
                type='number'
                placeholder='13.28'
                autoFocus
                ref={priceRef}
                required
              />
              {error && error.field === 'price' ? (
                <Alert variant='danger '>{error.message}</Alert>
              ) : null}
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Описание</Form.Label>
              <Form.Control
                type='email'
                placeholder='про товар...'
                autoFocus
                ref={descriptionRef}
                required
              />
              {error && error.field === 'description' ? (
                <Alert variant='danger '>{error.message}</Alert>
              ) : null}
            </Form.Group>
            <UploadAndDisplayImage setImage={setImage} />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={closeModal}>
            Закрыть
          </Button>
          <Button variant='primary' onClick={handleSubmit}>
            Добавить товар
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default memo(CustomModal)
