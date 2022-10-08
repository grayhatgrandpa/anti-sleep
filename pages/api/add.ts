import { NextApiHandler } from 'next'
import prismaClient from '../../util/prismaClient'

const handler: NextApiHandler = async (req, res) => {
    try {
        const { url, password } = req.body

        await prismaClient.website.create({
            data: { url, password },
        })

        res.status(200).json({})
    } catch (err) {
        res.status(500).json(err)
    }
}

export default handler
