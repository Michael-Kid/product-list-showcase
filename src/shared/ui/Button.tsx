import React, { memo } from 'react';
import { Button } from 'react-bootstrap';

interface Props {
    text: string;
    variant: string;
    onClick: () => void;
}

const CustomButton = ({text, variant, onClick}: Props) => {
  return (
    <Button variant={variant} onClick={onClick}>
          {text}
    </Button>
  )
}

export default memo(CustomButton)