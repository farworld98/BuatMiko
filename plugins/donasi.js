let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel: 0813-3378-2061
│ • DANA: 0813-3378-2061
│ • Gopay: 0813-3378-2061
│ • OVO: 0813-3378-2061
╰────
╭─「 Ingin Donasi? 」
│> Chat: Wa.me/62813-3378-2061
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
