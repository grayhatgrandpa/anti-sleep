import { FC, MouseEventHandler, useState } from 'react'
import styles from './DeleteOverlay.module.scss'
import { toast } from 'react-toastify'

// components
import Button from './Button'
import Input from './Input'

type Props = {
    closeOverlay: any
}

const DeleteOverlay: FC<Props> = ({ closeOverlay }) => {
    const [password, setPassword] = useState('')

    const handleDeleteWebsite: MouseEventHandler<
        HTMLAnchorElement
    > = async () => {
        const id: string = localStorage.getItem('delete-website') ?? ''

        const res = await fetch('/api/remove', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, password }),
        })

        if (!res.ok) {
            toast.error('Server Error', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            })
            return
        }

        window.location.reload()
    }

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <a onClick={closeOverlay} className={styles.x}>
                    X
                </a>
                <Input value={password} onChange={setPassword}>
                    Password
                </Input>
                <Button onClick={handleDeleteWebsite}>Submit</Button>
            </div>
        </div>
    )
}

export default DeleteOverlay
