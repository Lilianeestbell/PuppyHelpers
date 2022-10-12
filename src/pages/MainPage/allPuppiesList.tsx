import React, { FC, useState, useEffect}  from 'react'
import styled from 'styled-components'
import { fakeData } from './config'

// const Wrapper =  styled.div`
//     #components-layout-demo-fixed .logo {
//     float: left;
//     width: 120px;
//     height: 31px;
//     margin: 16px 24px 16px 0;
//     background: rgba(255, 255, 255, 0.2);
//     }
//     .site-layout .site-layout-background {
//     background: #fff;
//     }
// `
const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* background-color: lightblue; */
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

const PuppyList : FC = () => {
    const [list, setList] = useState<Record<string, any>>([]);

    useEffect(() => {
        setList(fakeData)
    }, [])
    return (
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
    )
}

export default PuppyList
