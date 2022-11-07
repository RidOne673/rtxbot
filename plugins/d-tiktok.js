import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
let res = await fetch(`https://malesin.xyz/tiktok?url=${args[0]}`)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.status == 200) throw json
let { video, title, author } = json
await conn.sendFile(m.chat, video, 'video.mp4', `
🧏 Username: ${author}
📋 Deskripsi: ${title}
🔗 Url: ${video}


`, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tik(tok)?(dl)?)$/i

export default handler
