import fetch from 'node-fetch'

let handler = async (m, { conn, command, args }) => {
   if (!args[0]) return conn.reply(m.chat, 'Input URL', m)

  await m.reply('_Ｌｏａｄｉｎｇ．．._')
  
   conn.sendMessage(m.chat, { image: {url: global.API('leys', '/ssweb-pc', { url: args[0] }, 'apikey')}, caption: 'Here' }, { quoted: m })
}
handler.help = ['ssweb', 'sshp', 'sspc']
handler.tags = ['tools']
handler.command = /^(ssweb|sshp|sspc)?f?$/i

handler.limit = true
handler.fail = null

export default handler

const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            // console.log(json)
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})


const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
                    'User-Agent': 'GoogleBot',
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}
