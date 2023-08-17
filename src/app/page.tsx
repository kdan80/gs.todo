/** @format */

import Link from 'next/link'
import React from 'react'
import './app.css'

const Page = () => {
    return (
        <main className=''>
            <Link href={'/dashboard'}>Dashboard</Link>
        </main>
    )
}

export default Page
