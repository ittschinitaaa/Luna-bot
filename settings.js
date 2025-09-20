import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"
import fs from "fs"

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumber = "" //Ejemplo: 573218138672

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
// <-- Número @s.whatsapp.net -->
["923256941884", "🜲 𝐏𝐫𝐨𝐩𝐢𝐞𝐭𝐚𝐫𝐢𝐚 🜲", true],
["5492644996684"],
["573243768166"],  
// <-- Número @lid -->
["254722313334852", "𝕮𝖍𝖎𝖓𝖆 🔥", true],
["258892692984006", "𝕮𝖍𝖎𝖓𝖆 ² 🔥", true], 
["58566677377081", "𝕮𝖍𝖎𝖓𝖆 ³ 🔥", true]
]

global.mods = []
global.suittag = ["923256941884"] 
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.libreria = "Baileys Multi Device"
global.vs = "^1.8.2|Latest"
global.nameqr = "𝐋𝐮𝐧𝐚 𝐁𝐨𝐭"
global.sessions = "Sessions/Principal"
global.jadi = "Sessions/SubBot"
global.yukiJadibts = true

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.botname = "⏤͟͟͞͞🄻ׁ𝐔ִℕׁ𝐀ִ͢ ׁ🄱ִ𝐎ׁ𝕋ִ "
global.textbot = "ᥣᥙᥒᥲ, mᥲძᥱ ᥕі𝗍һ ᑲᥡ ᥴһіᥒᥲ 🔥"
global.dev = "© ⍴᥆ᥕᥱrᥱძ ᑲᥡ ᥴһіᥒᥲ 🔥"
global.author = "© mᥲძᥱ ᥕі𝗍һ ᑲᥡ ᥴһіᥒᥲ🔥"
global.etiqueta = "ᥴһіᥒᥲ"
global.currency = "¥enes"
global.banner = "https://files.catbox.moe/jgw4fy.jpg"
global.icono = "https://files.catbox.moe/2qah6g.jpg"
global.catalogo = fs.readFileSync('./lib/catalogo.jpg')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.group = "https://chat.whatsapp.com/HaKf6ezcwdbGzmH782eBal"
global.community = "https://whatsapp.com/channel/0029Vb6KW2Y0AgW5RA4QIS1B"
global.channel = "https://whatsapp.com/channel/0029Vb6GYInD8SDuyzHk3f3l"
global.github = "https://github.com/ittschinitaaa/Luna-bot"
global.gmail = "itts.chinitaaa@gmail.com"
global.ch = {
ch1: "120363402839382986@newsletter"
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.APIs = {
vreden: { url: "https://api.vreden.web.id", key: null },
delirius: { url: "https://api.delirius.store", key: null },
zenzxz: { url: "https://api.zenzxz.my.id", key: null },
siputzx: { url: "https://api.siputzx.my.id", key: null }
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.redBright("Update 'settings.js'"))
import(`${file}?update=${Date.now()}`)
})
