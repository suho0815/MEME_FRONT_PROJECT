import React from 'react'
import { DetailSubscribe_BT as BT } from './DetailSubscribe_BT'
import { DetailSubscribe_version as Version } from './DetailSubscribe_version'
import { PriceDiv, VersionDiv } from '../../../styled/page'

export const DetailSubscribe_Box = ({ version, price, month, discount, list }) => {

    return (
        <PriceDiv>
            <VersionDiv>
                <Version version={version} />
            </VersionDiv>
            {price}
            {month}
            {discount}
            {list}
            <BT />
        </PriceDiv>
    )
}
