// codigo creado por China. 

let handler = async (m, { conn }) => {
  try {
    // 🔹 Aquí cambias el texto a lo que quieras
    let mensaje = '
      
 
    '
    
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
