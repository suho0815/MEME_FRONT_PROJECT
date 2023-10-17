import React from 'react'
import { SelectDiv, Select, CustomArrow } from '../../../styled/page'
import Arrow from '../../../assets/Polygon 2.svg'

export const DetailSearch_Select = ({select}) => {
  return (
    <SelectDiv>
      <Select name="year">
        <option value=''>{select}</option>
        <option value='2023'>2023</option>
        <option value='2022'>2022</option>
        <option value='2021'>2021</option>
        <option value='2020'>2020</option>
      </Select>
      <CustomArrow>
        <img src={Arrow} width="14" height="14" alt="select" ></img>
      </CustomArrow>
    </SelectDiv>
  )
}
