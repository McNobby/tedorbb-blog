import { useRouter } from 'next/router'
import React from 'react'

const BackButton = () => {

    const router = useRouter()    

    const back =  () => {
        router.back()
    }

    return (
        <div onClick={back}>
            <h2>🡨</h2>
        </div>
    )
}

export default BackButton
