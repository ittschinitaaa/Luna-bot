// codigo creado por China. 

let handler = async (m, { conn }) => {
  try {
    // 🔹 Aquí cambias el texto a lo que quieras
    let mensaje = "╭───────╼⏤͟͟͞͞☆\n│𝐈𝐍𝐅𝐎 𝐂𝐑𝐄𝐀𝐃𝐎𝐑𝐀 🔥\n╰───────╼⏤͟͟͞͞☆\n╭───────╼⏤͟͟͞͞☆\n│✦ 𝐍𝐨𝐦𝐛𝐫𝐞: 𝕮𝖍𝖎𝖓𝖆 🇨🇳\n│✦ 𝐄𝐝𝐚𝐝: 𝟏𝟕\n│✦ 𝐈𝐠: Instagram.com/its.chinitaaa_\n│✦ 𝐆𝐢𝐭: github.com/ittschinitaaa\n╰───────╼⏤͟͟͞͞☆"
    
    await conn.sendMessage(m.chat, { text: mensaje }, { quoted: m })
  } catch (e) {
    console.error('Error en comando prueba:', e)
    try { 
      await conn.sendMessage(m.chat, { text: '❌ Hubo un error al ejecutar el comando.' }, { quoted: m }) 
    } catch {}
  }
}

handler.help = ['prueba', 'test']
handler.tags = ['info']
handler.command = ['creador', 'owner']

export default handler
