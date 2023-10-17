import React from 'react'
import { SelectDiv, Select, CustomArrow } from '../../../styled/page'
import Arrow from '../../../assets/Polygon 2.svg'

export const DetailSearch_Select = ({select, num}) => {
  const opt = () => {
    const options = [];
    for (let i = num; i > num - 4; i--) {
      options.push(<option value={i}>{i}</option>);
    }
    return options;
  }
  return (
    <SelectDiv>
      <Select name={select}>
        <option value=''>{select}</option>
        {opt()}
      </Select>
      <CustomArrow>
        <img src={Arrow} width="14" height="14" alt="select" ></img>
      </CustomArrow>
    </SelectDiv>
  )
}
