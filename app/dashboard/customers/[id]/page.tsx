import React from 'react'

interface Props {
    params: {
        id: string  
    }
}

const page = (props: Props) => {
  return (
    <div>single customer page {props.params.id}</div>
  )
}

export default page