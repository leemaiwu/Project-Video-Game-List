import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const Alert = ({ children }: Props) => {
    return (
      <div className='alert alert-primary alert-dismissible' >
        {children}
        <button type="button" className="btn-close" aria-label="Close" ></button>
      </div>
    )
  }

export default Alert
 