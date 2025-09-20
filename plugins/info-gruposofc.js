import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {

let grupos = `*Hola!, te invito a unirte a los grupos oficiales de la Bot para convivir con la comunidad.....*

*ׄ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ*

⚘ 𝐂𝐡𝐚𝐧𝐧𝐞𝐥𝐬 𝐨𝐟𝐢𝐜𝐢𝐚𝐥𝐞𝐬 𝐝𝐞 𝐋𝐮𝐧𝐚 𝐛𝐨𝐭

- 𝐂𝐡𝐚𝐧𝐧𝐞𝐥 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 𝐋𝐮𝐧𝐚 𝐁𝐨𝐭

> *⏤͟͟͞͞★:* https://whatsapp.com/channel/0029Vb6GYInD8SDuyzHk3f3l

- 𝐂𝐡𝐚𝐧𝐧𝐞𝐥 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 𝐋𝐮𝐧𝐚 𝐭𝐞𝐬𝐭

> *⏤͟͟͞͞★:* https://whatsapp.com/channel/0029Vb6KW2Y0AgW5RA4QIS1B

> © `

await conn.sendFile(m.chat, catalogo, "https://files.catbox.moe/jgw4fy.jpg", grupos, m)

await m.react = " 🌟", 

}
handler.help = ['grupos']
handler.tags = ['info']
handler.command = ['grupos', 'links', 'groups']

export default handler
