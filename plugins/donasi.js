let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel: 0856-3243-961
│ • DANA: 0856-3243-961
│ • Gopay: 0856-3243-961
│ • OVO: 0856-3243-961
╰────
╭─「 Ingin Donasi? 」
│> Chat: Wa.me/+62856-3243-961
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
