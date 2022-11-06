import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command, args, conn }) => {
    if (!(args[0] || args[1])) throw `contoh:\n${usedPrefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2`
    if (isNaN(args[0]) || isNaN(args[1])) throw `contoh:\n${usedPrefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 `
    let ress = await fetch(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
    let res = await ress.json()
    m.reply(`
${res.result.data.text.arab}

${res.result.data.translation.en}

${res.result.data.translation.id}


( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )
`.trim())
    conn.sendFile(m.chat, res.result.data.audio.primary, 'audio.mp3', '', m)
}
handler.help = ['surah <pencarian>']
handler.tags = ['internet']

handler.command = /^(surah|alquran)/i

export default handler
