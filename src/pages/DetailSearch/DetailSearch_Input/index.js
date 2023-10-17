import React from 'react'
import { DetailSearch_txt as TXT } from './DetailSearch_txt'
import { DetailSearch_Select as Select } from './DetailSearch_Select'
import { InputDiv } from '../../../styled/page'

export const DetailSearch_Input = () => {
  return (
    <InputDiv>
      <Select select='Year' num='2023'/>
      <Select select='Category' />
      <TXT />
    </InputDiv>
  )
}
