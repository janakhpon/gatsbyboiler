import React from 'react'
import { navigate } from 'gatsby'
import Layout from '../components/layout'

const ThirdPage = () => {
    return(
        <Layout>
        <p>Welcome to Page 3</p>
        <button onClick={()=> navigate("/") }>Back to HOME</button>
        </Layout>
    )
}

export default ThirdPage