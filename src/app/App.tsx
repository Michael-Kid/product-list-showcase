import React, { useCallback, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import ProductList from '../widgets/ProductList';
import UserCart from '../widgets/UserCart';
import { ToastContainer } from 'react-toastify';
import Modal from '../widgets/Modal';
import ModalButton from '../shared/ui/Button';
import HeaderContainer from '../shared/ui/HeaderContainer';

function App() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const closeModal = useCallback(() => {
    setShowModal(false)
  }, [])

  const openModal = useCallback(() => {
    setShowModal(true)
  }, [])

  return (
    <>
      {showModal && <Modal closeModal={closeModal}/>}
      <HeaderContainer>
        <ModalButton text={'Добавить продукт'} variant={'primary'} onClick={openModal}/>
        <UserCart />
      </HeaderContainer>
      <ProductList />
      <ToastContainer />
    </>
  )
}

export default App;
