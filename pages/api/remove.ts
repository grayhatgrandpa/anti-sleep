import { NextApiHandler } from 'next'
import prismaClient from '../../util/prismaClient'

const handler: NextApiHandler = async (req, res) => {
    try {
        const { id, password } = req.body

        const website = await prismaClient.website.findUnique({ where: { id } })

        if (website?.password !== password) {
            res.status(500).json({})
            return
        }

        await prismaClient.website.delete({
            where: { id },
        })

        res.status(200).json({})
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
}

export default handler
