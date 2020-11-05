import React, { Children } from 'react'

const Fronthero = ({classn,children}) => {
    return (
        <div className={classn}>
          {children}
        </div>
    )
}

export default Fronthero
