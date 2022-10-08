import { FC, MouseEventHandler, useState } from 'react'
import styles from './AddOverlay.module.scss'
import { toast } from 'react-toastify'

// components
import Button from './Button'
import Input from './Input'

type Props = {
    closeOverlay: any
}

const AddOverlay: FC<Props> = ({ closeOverlay }) => {
    const [url, setUrl] = useState('')
    const [password, setPassword] = useState('')

    const handleAddWebsite: MouseEventHandler<HTMLAnchorElement> = async () => {
        const res = await fetch('/api/add', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url, password }),
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
                <Input value={url} onChange={setUrl}>
                    URL
                </Input>
                <Input value={password} onChange={setPassword}>
                    Password
                </Input>
                <Button onClick={handleAddWebsite}>Submit</Button>
            </div>
        </div>
    )
}

export default AddOverlay
