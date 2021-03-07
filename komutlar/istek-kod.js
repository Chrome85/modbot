const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  
let istek = args.slice(0).join(' ')
if(!istek) return message.channel.send('**İstek kod Bildirmek için Bir İstek Yazınız.** :x:')

const embedCrewCode = new Discord.MessageEmbed()
.setTitle("Captan İstek Sistemi")
.setColor('BLUE')
.setDescription(`**istek Kanalı** ${message.channel.name} \n **istek Bildirilen Sunucu** \`${message.guild.name}\` \n **İstek Bildiren Kullanıcı** <@${message.author.id}> \n **İstenen komut :** \`${istek}\``)
client.channels.cache.get('811479801784696852').send(embedCrewCode)
  
message.channel.send("İstek kod  bildiriminiz gönderildi. :confetti_ball:").then(message => message.delete({ timeout: 5000 }));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'istek-kod',
  description: 'İstek kodları belirtmeye yarar',
  usage: 'istek-kod <istek>'
}