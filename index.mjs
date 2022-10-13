import fetch from 'node-fetch'
import urlExists from 'url-exist'

const MIN_TIME = 300000
const MAX_TIME = 1740000

const main = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_DOMAIN)
    const json = await res.json()

    await Promise.all(
        json.map(async url => {
            if (urlExists(url))
                return new Promise(resolve => {
                    fetch(url).then(() => {
                        console.log('fetch')
                        resolve()
                    })
                })
        })
    )

    const time = Math.floor(Math.random() * (MAX_TIME - MIN_TIME)) + MIN_TIME

    setTimeout(main, time)
}

setTimeout(main, MIN_TIME)
