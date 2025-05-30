const ip = ''
const token = '1d45f466a0f167'

const url = 'https://ipinfo.io/${ip}?token=${token}'

const res = await fetch(url)
const json = await res.json()
console.log(json)
