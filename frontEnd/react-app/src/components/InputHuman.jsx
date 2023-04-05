



//rafc
import React, { useState } from 'react'
import { HumanButton } from './HumanButton'

export const InputHuman = ( {setRerender} ) => {
   const [value, setValue] = useState()


  return (
    <section className='inputHuman'>
        <h1> Harvest </h1>
<h4>1 Human</h4>
<HumanButton setRerender={setRerender} value={"1"}  ></HumanButton>

<h4>5 Humans</h4>
<HumanButton setRerender={setRerender} value={"5"}  ></HumanButton>

<h4>10 Humans</h4>
<HumanButton setRerender={setRerender} value={"10"} ></HumanButton>

    </section>
  )
}
