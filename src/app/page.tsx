/** @format */

import Link from 'next/link'
import React from 'react'
import './app.css'

const Page = () => {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <Link href={'/dashboard'}>Dashboard</Link>
        </main>
    )
}

export default Page
