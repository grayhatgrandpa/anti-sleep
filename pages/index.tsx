import type { NextPage } from 'next'
import { useState } from 'react'
import styles from './Home.module.scss'
import prismaClient from '../util/prismaClient'
import { Website as WebsiteType } from '@prisma/client'

// components
import Website from '../components/Website'
import Button from '../components/Button'
import OverlayHandler from '../components/OverlayHandler'

type Props = {
    websites: Array<WebsiteType>
}

const Home: NextPage<Props> = ({ websites }) => {
    const [overlay, setOverlay]: ['none' | 'add' | 'delete', any] =
        useState('none')

    const closeOverlay = () => setOverlay('none')
    const openAddOverlay = () => setOverlay('add')
    const openDeleteOverlay = () => setOverlay('delete')

    return (
        <>
            <OverlayHandler {...{ overlay, closeOverlay }} />
            <div className={styles.container}>
                <div className={styles.innerContainer}>
                    <h1 className={styles.heading}>Anti-sleep</h1>
                    <h2 className={styles.subHeading}>
                        A place to prevent your websites from sleeping
                    </h2>
                    <div className={styles.websiteContainer}>
                        <Button onClick={openAddOverlay}>Add Website</Button>
                        {websites.map((website, i) => (
                            <Website
                                {...website}
                                {...{ openDeleteOverlay }}
                                key={i}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export const getServerSideProps = async () => {
    const websites = await prismaClient.website.findMany({
        select: {
            id: true,
            url: true,
        },
    })

    return { props: { websites } }
}

export default Home
