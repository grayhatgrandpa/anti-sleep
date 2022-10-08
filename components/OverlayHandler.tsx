import { FC } from 'react'

// components
import AddOverlay from './AddOverlay'
import DeleteOverlay from './DeleteOverlay'

type Props = {
    overlay: 'none' | 'add' | 'delete'
    closeOverlay: any
}

const OverlayHandler: FC<Props> = ({ overlay, closeOverlay }) => {
    switch (overlay) {
        case 'add':
            return <AddOverlay {...{ closeOverlay }} />
        case 'delete':
            return <DeleteOverlay {...{ closeOverlay }} />
        case 'none':
        default:
            return <></>
    }
}

export default OverlayHandler
