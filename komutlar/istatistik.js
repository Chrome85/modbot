const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");
const os = require('os')
const ayarlar = require('../ayarlar.json');


exports.run = (client, message) => {
  const uptime = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]")
        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
        .setTitle('İstatistik')
        .addField('Kulanıcı sayısı ', client.users.cache.size)
        .addField('Sunucu Sayısı', client.guilds.cache.size)
        .addField('Node.js Sürümü', process.version)
        .addField('Ram Kulanımı', (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2))
        .addField('Botun Pingi:', client.ws.ping)
        .addField('Mesaj Geçikmesi:', `${Date.now() - message.createdTimestamp} ms`)
        .addField('Bit', os.arch())
        .addField('İşletim Sisteni', os.platform())
        .addField('Yapımcım', '<@769241220110352416> | Krom#0085')
        .addField("**Bağlantılar**", "[Botu Davet Et](https://discord.com/oauth2/authorize?client_id=774765565466116126&scope=bot&permissions=805314622)\n[Destek Sunucusu](https://discord.gg/cUF35cS)\n[Voteleme Sayfası](https://top.gg/bot/774765565466116126/vote)")       
        .setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
        message.channel.send(embed)
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik', 'i', 'istatistikler', 'botbilgi', 'bilgi', 'hakkında', 'bot hakkında', 'bothakkında'],
      kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};