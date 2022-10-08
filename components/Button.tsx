import { FC, MouseEventHandler } from 'react'
import styles from './Button.module.scss'

type Props = {
    children: any
    className?: string
    onClick?: MouseEventHandler<HTMLAnchorElement>
}

const Button: FC<Props> = ({ className, onClick, children }) => {
    return (
        <a {...{ onClick }} className={[styles.button, className].join(' ')}>
            {children}
        </a>
    )
}

export default Button
