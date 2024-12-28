import config from '../../config.cjs'; // Ensure this matches your project setup

const alive = async (m, sock) => {
  const prefix = config.PREFIX;
  const mode = config.MODE;
  const pushName = m.pushName || 'User';
  
  const cmd = m.body.startsWith(prefix)
    ? m.body.slice(prefix.length).split(' ')[0].toLowerCase()
    : '';

  if (cmd === "menu") {
    await m.React('⏳'); // React with a loading icon
    // Calculate uptime

    const uptimeSeconds = process.uptime();
    const days = Math.floor(uptimeSeconds / (24 * 3600));
    const hours = Math.floor((uptimeSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((uptimeSeconds % 3600) / 60);
    const seconds = Math.floor(uptimeSeconds % 60);

    const aliveMessage = `╭┈───────────────•*
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
*╭━━〔 •ᴄᴍᴅ-ᴍᴇɴᴜ• 〕━━┈⊷*
*┃◈╭─────────────·๏*
*┃◈┃•* 1➠ *【 ALQURAN 】*
*┃◈┃•* 2➠ *【 OWNER 】*
*┃◈┃•* 3➠ *【 DOWNLOAD 】‎*
*┃◈┃•* 4➠ *【 GROUPS 】*
*┃◈┃•* 5➠ *【 INFO 】‎*
*┃◈┃•* 6➠ *【 RANDOM 】*
*┃◈┃•* 7➠ *【 CONVERT 】*
*┃◈┃•* 8➠ *【 AI-CMD 】*
*┃◈┃•* 9➠ *【 WALLPAPERS 】*
*┃◈┃•* 10➠ *【 OTHER 】*
*┃◈└───────────┈⊷*
*╰──────────────┈⊷*

*✧ ʀᴇᴘʟʏ ᴡɪᴛʜ ᴛʜᴇ ɴᴜᴍʙᴇʀ ʏᴏᴜ ᴡᴀɴᴛ ᴏᴜᴛ ᴛᴏ sᴇʟᴇᴄᴛ ✧*
*`;

    await m.React('✅'); // React with a success icon

    sock.sendMessage(
      m.from,
      {
        text: aliveMessage,
        contextInfo: {
          isForwarded: false,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '@newsletter',
            newsletterName: "Sarkar-MD",
            serverMessageId: -1,
          },
          forwardingScore: 999, // Score to indicate it has been forwarded
          externalAdReply: {
            title: "✨ Sarkar-MD ✨",
            body: "My Menu",
            thumbnailUrl: 'https://files.catbox.moe/s1q8so.jpeg', // Add thumbnail URL if required
            sourceUrl: 'https://whatsapp.com/channel/0029VajGHyh2phHOH5zJl73P', // Add source URL if necessary
            mediaType: 1,
            renderLargerThumbnail: true,
          },
        },
      },
      { quoted: m }
    );

    // Wait for the user to reply with "1"
    const filter = (response) => response.body === '1' && response.from === m.from;
    const userReply = await sock.waitForMessage(m.from, { filter, timeoutMs: 60000 }); // Wait for 1 minute

    if (userReply) {
      await m.React('⏳'); // React with a loading icon

      const islamicmenu = `╭━❮ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁 ❯━╮
┃✰ ${prefix}𝙰𝚃𝚃𝙿
┃✰ ${prefix}𝙰𝚃𝚃𝙿2
┃✰ ${prefix}𝙰𝚃𝚃𝙿3
┃✰ ${prefix}𝙴𝙱𝙸𝙽𝙰𝚁𝚈
┃✰ ${prefix}𝙳𝙱𝙸𝙽𝙰𝚁𝚈
┃✰ ${prefix}𝙴𝙼𝙾𝙹𝙸𝙼𝙸𝚇
┃✰ ${prefix}𝙼𝙿3
╰━━━━━━━━━━━━━━━⪼
`;

      await m.React('✅'); // React with a success icon

      sock.sendMessage(
        m.from,
        {
          text: islamicmenu,
          contextInfo: {
            isForwarded: false,
            forwardedNewsletterMessageInfo: {
              newsletterJid: '@newsletter',
              newsletterName: "Sarkar-MD",
              serverMessageId: -1,
            },
            forwardingScore: 999, // Score to indicate it has been forwarded
            externalAdReply: {
              title: "✨ Sarkar-MD ✨",
              body: "Islamic Commands",
              thumbnailUrl: 'https://files.catbox.moe/s1q8so.jpeg', // Add thumbnail URL if required
              sourceUrl: 'https://whatsapp.com/channel/0029VajGHyh2phHOH5zJl73P', // Add source URL if necessary
              mediaType: 1,
              renderLargerThumbnail: true,
            },
          },
        },
        { quoted: m }
      );
    }
  }
};

export default alive;
