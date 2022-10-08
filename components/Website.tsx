import { FC } from 'react'
import styles from './Website.module.scss'
import { Website as WebsiteType } from '@prisma/client'

// components
import Button from './Button'

type Props = WebsiteType & {
    openDeleteOverlay: any
}

const Website: FC<Props> = ({ url, openDeleteOverlay, id }) => {
    const handleDeleteOverlay = () => {
        localStorage.setItem('delete-website', String(id))
        openDeleteOverlay()
    }

    return (
        <div className={styles.container}>
            <p className={styles.text}>{url}</p>
            <Button onClick={handleDeleteOverlay}>Delete</Button>
        </div>
    )
}

export default Website
