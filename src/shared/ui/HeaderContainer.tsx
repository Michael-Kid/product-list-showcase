import React, { memo } from 'react'
import { Container } from 'react-bootstrap'

interface Props {
    children: React.ReactNode[] | React.ReactNode
}

const HeaderContainer = ({children}: Props) => {
  return (
    <Container fluid='true' className='d-flex justify-content-evenly h-auto pb-1'>
        {children}
    </Container>
  )
}

export default memo(HeaderContainer)