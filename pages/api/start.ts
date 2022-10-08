import { NextApiHandler } from 'next'
import prismaClient from '../../util/prismaClient'
import urlExist from 'url-exist'

const handler: NextApiHandler = async (req, res) => {
    const helper = async () => {
        const time = Math.floor(Math.random() * 1740000) + 1

        const websites = await prismaClient.website.findMany({
            select: { url: true },
        })
        websites.forEach(async website => {
            try {
                const exists = await urlExist(website.url)
                if (exists) fetch(website.url)
            } catch (err) {}
        })

        setTimeout(helper, time)
    }

    helper()
}

export default handler
