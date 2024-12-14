import pkg from '@whiskeysockets/baileys';
import config from '../../config.cjs';
const { generateWAMessageFromContent } = pkg;

const validCommands = ['command', 'menu', 'cmd']; // Valid commands list

const alive = async (m, Matrix) => {

  const prefix = config.PREFIX;
  const mode = config.MODE
  const pushName = m.pushName || 'User';


  // Check if the command is valid

  const text = m.body || m.message?.conversation || '';

  const command = text.startsWith(prefix) ? text.slice(prefix.length).split(' ')[0].toLowerCase() : '';

  if (!validCommands.includes(command)) {

    console.log(`Invalid command: ${command}`);

    return;

  }

  // Calculate uptime

  const uptimeSeconds = process.uptime();

  const days = Math.floor(uptimeSeconds / (24 * 3600));

  const hours = Math.floor((uptimeSeconds % (24 * 3600)) / 3600);

  const minutes = Math.floor((uptimeSeconds % 3600) / 60);

  const seconds = Math.floor(uptimeSeconds % 60);

  // Generate the uptime message

  const uptimeMessage = `╭┈───────────────•*
*⇆𝙷𝙴𝙻𝙻𝙾 𝙼𝚁⇆*
     *${pushName}*
*⇆ ✨ 𝚂𝙰𝚁𝙺𝙰𝚁-𝙼𝙳 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ✨ ⇆*
*╰┈───────────────•*
*╭┈───────────────•* 
*│  ◦*  𝙱𝙾𝚃 𝙽𝙰𝙼𝙴: 𝚂𝙰𝚁𝙺𝙰𝚁-𝙼𝙳
*│  ◦* 𝚅𝙴𝚁𝚂𝙸𝙾𝙽: 1𝚂𝚃
*│  ◦* 𝙳𝙴𝚅: 𝚂𝙰𝚁𝙺𝙰𝚁-𝙱𝙰𝙽𝙳𝙰𝙷𝙴𝙰𝙻𝙸
*│  ◦* 𝙿𝚁𝙴𝙵𝙸𝚇: *${prefix}*
*│  ◦* 𝙼𝙾𝙳𝙴: *${mode}*
*│  ◦* 𝚄𝙿𝚃𝙸𝙼𝙴: *${days}d ${hours}h ${minutes}m ${seconds}s*
*╰┈───────────────•*
*♡︎•━━━━━━☻︎━━━━━━•♡︎*
*[ • 🤴 𝙾𝚆𝙽𝙴𝚁 𝙲𝙼𝙳 🤴 ‎• ]*
*╭┈───────────────•*
*┋*👑 *${prefix}𝙱𝙻𝙾𝙲𝙺*
*┋*👑 *${prefix}𝚄𝙽𝙱𝙻𝙾𝙲𝙺*
*┋*👑 *${prefix}𝙹𝙾𝙸𝙽*
*┋*👑 *${prefix}𝙻𝙴𝙰𝚅𝙴*
*┋*👑 *${prefix}𝚂𝙴𝚃𝚅𝙰𝚁*
*┋*👑 *${prefix}𝚁𝙴𝚂𝚃𝙰𝚁𝚃*
*┋*👑 *${prefix}𝚂𝙴𝚃𝙿𝙿*
*┋*👑 *${prefix}𝙲𝙾𝙼𝙸𝙽𝙶 𝚂𝙾𝙾𝙽*
*┋*👑 *${prefix}𝙲𝙾𝙼𝙸𝙽𝙶 𝚂𝙾𝙾𝙽*
*┋*👑 *${prefix}𝙲𝙾𝙼𝙸𝙽𝙶 𝚂𝙾𝙾𝙽*
*┋*👑 *${prefix}𝙲𝙾𝙼𝙸𝙽𝙶 𝚂𝙾𝙾𝙽*
*┋*👑 *${prefix}𝙲𝙾𝙼𝙸𝙽𝙶 𝚂𝙾𝙾𝙽*
*┋*👑 *${prefix}𝙲𝙾𝙼𝙸𝙽𝙶 𝚂𝙾𝙾𝙽*
*┋*👑 *${prefix}𝙲𝙾𝙼𝙸𝙽𝙶 𝚂𝙾𝙾𝙽*
*┋*👑 *${prefix}𝙲𝙾𝙼𝙸𝙽𝙶 𝚂𝙾𝙾𝙽*
*┋*👑 *${prefix}𝙲𝙾𝙼𝙸𝙽𝙶 𝚂𝙾𝙾𝙽*
*┋*👑 *${prefix}𝙲𝙾𝙼𝙸𝙽𝙶 𝚂𝙾𝙾𝙽*
*╰┈───────────────•*
*[ • 🔎 𝚂𝙴𝙰𝚁𝙲𝙷 𝙲𝙼𝙳 🔍 ‎• ]*
*╭┈───────────────•*
*┋*🔍 *${prefix}𝚈𝚃𝚂  <ᴛᴇxᴛ>*
*┋*🔍 *${prefix}𝙶𝙸𝙽𝙵𝙾 <𝚞𝚜𝚎𝚛𝚗𝚊𝚖𝚎>*
*┋*🔍 *${prefix}𝙸𝙼𝙳𝙱 <ᴛᴇxᴛ>*
*┋*🔍 *${prefix}𝙸𝙼𝙶 <ᴛᴇxᴛ>*
*┋*🔍 *${prefix}𝚆𝙴𝙰𝚃𝙷𝙴𝚁 <ᴄɪᴛʏ>*
*╰┈───────────────•*
*[ • 🧠 𝙰𝙸 𝙲𝙼𝙳 🧠  ‎• ]*
*╭┈───────────────•*
*┋*🧠 *${prefix}𝚛𝚊𝚜𝚑𝚒𝚍 <ᴛᴇxᴛ>*
*┋*🧠 *${prefix}𝚜𝚊𝚛𝚔𝚊𝚛 <ᴛᴇxᴛ>*
*┋*🧠 *${prefix}𝚊𝚣𝚒𝚣 <ᴛᴇxᴛ>*
*┋*🧠 *${prefix}𝙱𝙻𝙰𝙲𝙺𝙱𝙾𝚇𝙰𝙸 <𝙿𝚁𝙾𝙶𝚁𝙰𝙼>*
*┋*🧠 *${prefix}𝙲𝙾𝙳𝙴 <𝙿𝚁𝙾𝙶𝚁𝙰𝙼>*
*┋*🧠 *${prefix}𝙲𝙾𝙳𝙴𝚁 <𝙿𝚁𝙾𝙶𝚁𝙰𝙼>*
*┋*🧠 *${prefix}𝙰𝙸 <𝚀𝚄𝙴𝚂𝚃𝙸𝙾𝙽>*
*┋*🧠 *${prefix}𝙱𝙾𝚃 <𝚀𝚄𝙴𝚂𝚃𝙸𝙾𝙽>*
*┋*🧠 *${prefix}𝙶𝙿𝚃 <𝚀𝚄𝙴𝚂𝚃𝙸𝙾𝙽>*
*┋*🧠 *${prefix}𝚃𝚁𝙰𝚅𝙴𝙻 <𝙿𝙻𝙰𝙲𝙴𝙽𝙰𝙼𝙴>*
*┋*🧠 *${prefix}𝚅𝙸𝚂𝙸𝚃 <𝙿𝙻𝙰𝙲𝙴>*
*╰┈───────────────•*
*[ • 📥 DOWNLOADER-CMD 📥 ‎• ]*
*╭┈───────────────•*
*┋*⏬️ *${prefix}ғʙ <ᴜʀʟ>*
*┋*⏬️ *${prefix}ɪɴꜱᴛᴀ <ᴜʀʟ>*
*┋*⏬️ *${prefix}ᴠɪᴅᴇᴏ <𝚞𝚛𝚕 𝚘𝚛 𝚚𝚞𝚎𝚛𝚢>*
*┋*⏬️ *${prefix}ɢᴅʀɪᴠᴇ <ᴜʀʟ>*
*┋*⏬️ *${prefix}ᴛᴡɪᴛᴛᴇʀ <ᴜʀʟ>*
*┋*⏬️ *${prefix}ᴛᴛ<ᴜʀʟ>*
*┋*⏬️ *${prefix}ᴍᴇᴅɪᴀғɪʀᴇ <ᴜʀʟ>*
*┋*⏬️ *${prefix}ꜱᴏɴɢ <ϙᴜᴇʀʏ>*
*┋*⏬️ *${prefix}ᴠɪᴅᴇᴏ <ϙᴜᴇʀʏ>*
*┋*⏬️ *${prefix}ᴀᴘᴋ <ɴᴀᴍᴇ>*
*╰┈───────────────•*
*[ • 🚻 GROUP-CMD 🚻 ‎• ]*
*╭┈───────────────•*
*┋*⛔️ *${prefix}ᴅᴇʟ <ʀᴇᴘʟʏ ғᴏʀ ᴅᴇʟᴇᴛᴇ sᴍs>*
*┋*🤝 *${prefix}ᴀᴅᴅ*
*┋*🦵 *${prefix}ᴋɪᴄᴋ*
*┋*🤗 *${prefix}ᴡᴇʟᴄᴏᴍᴇ 𝚘𝚗*
*┋*🤗 *${prefix}ᴡᴇʟᴄᴏᴍᴇ 𝚘𝚏𝚏*
*┋*🫅 *${prefix}ᴘʀᴏᴍᴏᴛᴇ*
*┋*🤵 *${prefix}ᴅᴇᴍᴏᴛᴇ*
*┋*🎳 *${prefix}ᴛᴀɢᴀʟʟ*
*┋*📛 *${prefix}𝚑𝚒𝚍𝚎𝚝𝚊𝚐*
*┋*♻️ *${prefix}ɪɴᴠɪᴛᴇ*
*┋*🔇 *${prefix}ᴍᴜᴛᴇ*
*┋*🔊 *${prefix}ᴜɴᴍᴜᴛᴇ*
*┋*🔒 *${prefix}𝚘𝚙𝚎𝚗*
*┋*🔓 *${prefix}𝚌𝚕𝚘𝚜𝚎*
*┋*😞 *${prefix}ʟᴇᴀᴠᴇ*
*╰┈───────────────•*
*[ • 🎙️ 𝙰𝚄𝙳𝙸𝙾 𝙲𝙼𝙳 🎙️ ‎• ]*
*╭┈───────────────•*
*┋*🎙️ *${prefix}𝙳𝙴𝙴𝙿*
*┋*🎙️ *${prefix}𝙱𝙰𝚂𝚂*
*┋*🎙️ *${prefix}𝚁𝙾𝙱𝙾𝚃*
*┋*🎙️ *${prefix}𝚁𝙴𝚅𝙴𝚁𝚂𝙴*
*┋*🎙️ *${prefix}𝚂𝙻𝙾𝚆*
*┋*🎙️ *${prefix}𝚂𝙼𝙾𝙾𝚃𝙷*
*┋*🎙️ *${prefix}𝙽𝙸𝙶𝙷𝚃𝙲𝙾𝚁𝙴*
*╰┈───────────────•*
*[ • ☣ 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙲𝙼𝙳 ☣ ‎• ]*
*╭┈───────────────•*
*┋*☣ *${prefix}𝙳𝙰𝙽𝙲𝙴*
*┋*☣ *${prefix}𝙿𝙾𝙺𝙴*
*┋*☣ *${prefix}𝚆𝙸𝙽𝙺*
*┋*☣ *${prefix}𝙷𝙰𝙿𝙿𝚈*
*┋*☣ *${prefix}𝙺𝙸𝙲𝙺*
*┋*☣ *${prefix}𝙺𝙸𝙻𝙻*
*┋*☣ *${prefix}𝚂𝙻𝙰𝙿*
*┋*☣ *${prefix}𝙱𝙸𝚃𝙴*
*┋*☣ *${prefix}𝙽𝙾𝙼*
*┋*☣ *${prefix}𝙷𝙸𝙶𝙷𝙵𝙸𝚅𝙴*
*┋*☣ *${prefix}𝚆𝙰𝚅𝙴*
*┋*☣ *${prefix}𝚂𝙼𝙸𝙻𝙴*
*┋*☣ *${prefix}𝙱𝙻𝚄𝚂𝙷*
*┋*☣ *${prefix}𝚈𝙴𝙴𝚃*
*┋*☣ *${prefix}𝙱𝙾𝙽𝙺*
*┋*☣ *${prefix}𝚂𝙼𝚄𝙶*
*┋*☣ *${prefix}𝙿𝙰𝚃*
*┋*☣ *${prefix}𝙻𝙸𝙲𝙺*
*┋*☣ *${prefix}𝙺𝙸𝚂𝚂*
*┋*☣ *${prefix}𝙰𝚆𝙾𝙾*
*┋*☣ *${prefix}𝙷𝚄𝙶*
*┋*☣ *${prefix}𝙲𝚁𝚈*
*┋*☣ *${prefix}𝙲𝚄𝙳𝙳𝙻𝙴*
*┋*☣ *${prefix}𝙱𝚄𝙻𝙻𝚈*
*╰┈───────────────•*
*[ • 🤓 𝙾𝚃𝙷𝙴𝚁 𝙲𝙼𝙳 🤓 ‎• ]*
*╭┈───────────────•*
*┋*🤓 *${prefix}𝙵𝙰𝙽𝙲𝚈 <𝚃𝙴𝚇𝚃>*
*┋*🤓 *${prefix}𝙴𝙱𝙸𝙽𝙰𝚁𝚈 <𝚃𝙴𝚇𝚃>*
*┋*🤓 *${prefix}𝙳𝙱𝙸𝙽𝙰𝚁𝚈 <𝚃𝙴𝚇𝚃>*
*┋*🤓 *${prefix}𝙶𝙴𝚃 <𝚃𝙴𝚇𝚃>*
*┋*🤓 *${prefix}𝙵𝙴𝚃𝙲𝙷 <𝚃𝙴𝚇𝚃>*
*╰┈───────────────•*
🌐 𝗠𝗢𝗥𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗖𝗢𝗠𝗜𝗡𝗚 𝗦𝗢𝗢𝗡! 🌐`;

  // Create and send the message

  const msg = generateWAMessageFromContent(

    m.from,

    { conversation: uptimeMessage },

    {}

  );

  await Matrix.relayMessage(m.from, msg.message, { messageId: msg.key.id });

};

export default alive;
