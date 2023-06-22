/** @format */

import React from 'react'
import { Link } from '@inertiajs/react'

const Welcome = (props: any) => {
    return (
        <div className='text-3xl'>
            If you've got sh!t to do, you've got gs.todo!
            <Link href='/Dashboard'>Dashboard</Link>
        </div>
    )
}

export default Welcome
