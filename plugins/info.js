let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Rec: Drawl Nag
Script: @Nurotomo
Github: 
https://github.com/Tersakiti404-cyber/BuatMiko

*Sosmed :*
Kritik kami di sosmed ataupun YouTube.
Instagram: @arpunchs
➥ YouTube:
youtube.com/DrawlNag

*Thanks To :*
Nurotomo
MfarelS
ST4RZ
Fajar
Dan kawan yang lain :)

╠═〘 DONASI 〙 ═
╠➥ Tsel: 0856-3243-961
╠➥ DANA: 0856-3243-961
╠➥ Gopay: 0856-3243-961
║>Request? Wa.me/+62856-3243-961
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

