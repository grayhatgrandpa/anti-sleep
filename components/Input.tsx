import { FC, ChangeEventHandler } from 'react'
import styles from './Input.module.scss'

type Props = {
    value: string
    onChange: any
    children: string
}

const Input: FC<Props> = ({ value, onChange, children }) => {
    const handleOnChange: ChangeEventHandler<HTMLInputElement> = e =>
        onChange(e.target.value)

    return (
        <input
            {...{ value }}
            onChange={handleOnChange}
            className={styles.input}
            type="text"
            placeholder={children}
        />
    )
}

export default Input
