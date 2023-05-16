import React, { ChangeEvent, useState } from 'react';

interface Props {
  setImage: (src: string | File) => void;
} 

const UploadAndDisplayImage = ({ setImage }: Props) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null)

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(event.target.files[0])
      setSelectedImage(event.target.files[0])
    }
  }

  return (
    <div>
      <h1>Загрузить изображение</h1>

      {selectedImage && (
        <div>
          <img
            alt='not found'
            width={'250px'}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
        </div>
      )}

      <br />
      <br />

      <input
        type='file'
        name='myImage'
        onChange={(event) => {
          handleImageChange(event)
        }}
      />
    </div>
  )
}

export default UploadAndDisplayImage
