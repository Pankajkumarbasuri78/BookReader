import React from 'react'
import styled from 'styled-components'
import { LeftBar } from '../../components/LeftBar/LeftBar'
import { Navbar } from '../../components/Navbar/Navbar'
import { RightBar } from '../../components/RightBar/RightBar'
import { ScrollBar } from '../../components/ScrollBar/ScrollBar'

const Layout = styled.div(props=>({
  [`@media (max-width: 600px)`]:
    {
        display:'flex',
        flexDirection:'column'
    }
}))

export const HomePage = () => {
  return (
    <>
    <Navbar />
    <Layout style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <ScrollBar />
          </div>
          <RightBar />
        </Layout>
    </>
  )
}
