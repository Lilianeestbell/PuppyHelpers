import React, { FC, useState }  from 'react'
import styled from 'styled-components'
import { fakeData } from './config'

const Wrapper =  styled.div`
    width: 1024px;
    margin: 10px auto;
    padding-bottom: 50px;
`

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const EachItem = styled.div`
    margin-left: 10px;
    margin-top: 10px;
    border: 1px solid #727272;
    // box-sizing: border-box;
    border-radius: 4px;
    padding: 10px 10px;
    text-align: center;
    width: 240px;
    height: 510px;
    font-size: 20px;
    /* background-color: pink; */
    overflow: hidden;
`
const ItemImage = styled.img`
    width: 220px;
    height: 400px;
`
const ItemInfoBox = styled.div`
    width: 200px;
    height: 400px;
`

const MarketList : FC = () => {
    const [list, setList] = useState<Record<string, any>>(fakeData);
    return (
        <Wrapper>
           {/* <MainHeader/> */}
            <ItemWrapper>
                {
                    list.map( (item:any) => (
                        <EachItem key={`${item.name} + ${item.age} `}>
                            <div>
                                <ItemImage src={item.imgurl} alt="puppy"/>
                            </div>
                            <ItemInfoBox>
                                <div>
                                    name: {item.name}
                                </div>
                                <div>
                                    age: {item.age}
                                </div>                   
                                <div>
                                    unfertile: {item.unfertile ? 'yes': 'no'}
                                </div>
                                <div>
                                    gender: {item.gender}
                                </div>  
                                <div>
                                    location: {item.location}
                                </div>
                                <div>
                                    name: {item.unfertile}
                                </div>
                            </ItemInfoBox>
                        </EachItem>
                    ))
                }
            </ItemWrapper>
        </Wrapper>
    )
}

export default MarketList
