import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!teks) throw `Use example ${usedPrefix}${command} hallo`
    const res = await fetch(`https://leyscoders-api.herokuapp.com/api/lirik?q=${text}&apikey=dappakntlll`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.status == true) throw json
    if (json.result == '') throw 'Maaf lirik lagu tidak ditemukan!'
    m.reply(`Lirik lagu dari ${text} adalah : \n\n${json.result}`)


}

handler.help = ['lirik'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric)$/i

export default handler
