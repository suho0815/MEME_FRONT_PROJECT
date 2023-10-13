import React from 'react'
// import { DetailSubscribe_BT as BT } from './DetailSubscribe_BT'
import { DetailSubscribe_version as Version } from './DetailSubscribe_version'
import { SubscribeDiv, VersionDiv, SubscribeBT, PriceDiv, Price } from '../../../styled/page'

export const DetailSubscribe_Box = ({ version, price, month, discount, list }) => {

    return (
        <SubscribeDiv>
            <div>
                <VersionDiv>
                    <Version version={version} />
                </VersionDiv>
            </div>
            <PriceDiv>
                <Price>
                    {price}
                </Price>
                {month}
                {discount}

            </PriceDiv>
            {list}
            <div>
                <SubscribeBT>
                    구독하기
                </SubscribeBT>
            </div>
        </SubscribeDiv>
    )
}
