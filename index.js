const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.once("ready", async () => {
    console.log(`✅ Bot login sebagai ${client.user.tag}`);

    // ID channel tujuan (klik kanan channel di Discord -> Copy ID)
    const channelId = "ID_CHANNEL_TUJUAN";

    try {
        const channel = await client.channels.fetch(channelId);

        // Pesan yang ingin dikirim
        const pesan = "Halo semua 👋, ini pesan otomatis dari bot!";

        await channel.send(pesan);
        console.log("📩 Pesan berhasil dikirim!");

    } catch (error) {
        console.error("❌ Gagal kirim pesan:", error);
    }

    // Bot tetap online biar bisa dipakai lagi (hapus baris di bawah kalau mau standby)
    // client.destroy(); 
});

client.login(process.env.TOKEN);