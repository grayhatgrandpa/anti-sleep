import { NextApiHandler } from 'next'
import prismaClient from '../../util/prismaClient'

const handler: NextApiHandler = async (req, res) => {
    const websites = await prismaClient.website.findMany({
        select: { url: true },
    })

    res.status(200).json(websites ?? {})
}

export default handler
