let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Rec: Drawl Nag
Script: @Nurotomo
Github: 
https://github.com/Tersakiti404-cyber/FajarBOTV5.6

*Sosmed :*
Kritik kami di sosmed ataupun YouTube.
Instagram: @arpunchs
➥ YouTube:
youtube.com/DrawlNag

*Thanks To :*
Nurotomo
MfarelS
ST4RZ
Dan kawan yang lain :)

╠═〘 DONASI 〙 ═
╠➥ Tsel: 0813-3378-2061
╠➥ DANA: 0813-3378-2061
╠➥ Gopay: 0813-3378-2061
║>Request? Wa.me/+62813-3378-2061
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

