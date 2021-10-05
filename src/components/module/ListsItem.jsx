import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

//process.env['API_URL'] = 'http://blabla.com:3000';
console.log(process.env.API_URL);

import { ArticleStyled } from '../styled/ArticleStyled'
import { ItemLinkStyled } from '../styled/LinkStyled'

const ItemStyled = styled.li`
  border-bottom: 3px solid ${({ theme }) => theme.border};
`

const ListsItem = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    const request = async () => {
      setLoading(true)

      try {
        const req = await axios(process.env.API_URL)
        setData(req.data)
      } catch (error) {
        setError(true)
      }

      setLoading(false)
    }
    request()
  }, [])

  return (
    <section>
      {error && (
        <ArticleStyled>
          <h1>Something went wrong...</h1>
        </ArticleStyled>
      )}
      {loading ? (
        <ArticleStyled>
          <h1>Loading...</h1>
        </ArticleStyled>
      ) : (
        <ul>
          {data.map(item => (
            <ItemStyled
              className="listsItem"
              key={item.id}
              style={{
                backgroundColor: `${item.bg}`,
              }}
            >
              <ItemLinkStyled href={`https://codepen.io/joellesenne/full/${item.url}/`} target="_blank" rel="noopener noreferrer">
                /
                {item.name}
              </ItemLinkStyled>
            </ItemStyled>
          ))}
        </ul>
      )}
    </section>
  )
}

export default ListsItem
