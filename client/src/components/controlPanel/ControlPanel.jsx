import React from 'react'
import CrudView from '../crudView/CrudView'
import MovementsContainer from '../movements/MovementsContainer'

const ControlPanel = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:grid grid-cols-2 '>
        <div>
        <CrudView/>
        </div>

        <div>
        <MovementsContainer/>
        </div>
    </div>

  )
}

export default ControlPanel