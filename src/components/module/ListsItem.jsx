import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import { ArticleStyled } from '../styled/ArticleStyled'
import { ItemLinkStyled } from '../styled/LinkStyled'

const Item = styled.li`
  border-bottom: 3px solid ${({ theme }) => theme.border};
`

const ListsItem = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        const result = await axios('https://api.joellesenne.dev/lab.json')
        setData(result.data)
      } catch (error) {
        setError(true)
      }

      setLoading(false)
    }
    fetchData()
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
            <Item
              className="listsItem"
              key={item.id}
              style={{
                backgroundColor: `${item.bg}`,
              }}
            >
              <ItemLinkStyled href={`https://lab.joellesenne.dev/examples/${item.url}/`} rel="noopener noreferrer">
                /examples/
                {item.url}
              </ItemLinkStyled>
            </Item>
          ))}
        </ul>
      )}
    </section>
  )
}

export default ListsItem
