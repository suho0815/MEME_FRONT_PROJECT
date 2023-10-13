/** 구독 페이지 */
import React, { version } from 'react';
import {DetailSubscribe_Box} from './DetailSubscribe_Box'
export const DetailSubscribe = () => {
  const version = "full version"
  const price = "1000원";
  const month = "3 months";
  const discount = "1500원"; 
  const list = ["내용1", "내용2", "내용3"];
  return (
    <div>
      <DetailSubscribe_Box version={version} price={price} month={month} discount={discount} list={list} />    
    </div>
  );
}