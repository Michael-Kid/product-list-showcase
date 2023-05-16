import { toast } from "react-toastify";
import { PRODUCT_ADDED_TO_LIST, PRODUCT_REMOVED, PRODUCT_NEW_ADDED } from "../const";

export const validateForm = ({
  name,
  price
 }: any) => {
  const letterRegExp = /^[a-zA-Z()]+$/
  if (!name.length || !letterRegExp.test(name)) {
    return {
      field: 'name',
      message: 'Необходимо использовать буквы (ENG)',
    }
  }

  if (!price.length || isNaN(price) || Number(price) < 0) {
    return {
      field: 'price',
      message: 'Необходимо использовать цифры',
    }
  }

  return null
}

export const notify = (action: string, productName: string | undefined) => {
  switch (action) {
    case PRODUCT_NEW_ADDED:
      return toast(`Класс! Новый товар ${productName} создан`)
    case PRODUCT_ADDED_TO_LIST:
      return toast(`Супер! Товар ${productName} добавлен в список`)
    case PRODUCT_REMOVED:
      return toast(`Товар ${productName} удалён из списка`)
  
    default:
      break;
  }
};