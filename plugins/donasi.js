let handler =  m => m.reply(`
╭─「 Donasi • E-Walled 」
│ • Gopay [085706174510]
│ • SPay [085706174510]
│ • Dana [085706174510]
╰────

╭─「 Donasi • Bank 」
│ • Jago [1055 2696 0097]
│ • BNI [1433116799]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
