const Discord = require('discord.js');


const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const prefix = '*';

const fs = require('fs');
const { stringify } = require('querystring');

client.commands = new Discord.Collection();




const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('ready', () => {
    const statuses = [
        () => `Welcome ♥`,
        () => `By ! G A B S I S#1978`
    ]
    let i = 0
    setInterval(() => {
        client.user.setActivity(statuses[i](), {type: 'PLAYING'})
        i = ++i % statuses.length
    }, 1e4)
    
})


client.once('ready', () => {
    console.log('BOT is Online !');
    client.user.setActivity('Welcome ♥', { type: 'WATCHING'},)
    .then(Presence => console.log(`Activity set to ${Presence.activities[0].name}`))
    .catch(console.error);
});


client.on('guildMemberAdd', guildMember =>{
    // let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Friend');
    
    const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('*Welcome Message*','')
        .setDescription(`**Welcome To Our Server Guy** ♥ \n \n <@${guildMember.user.id}> \n \n \`Have Fun\`♥ \n ♥☺`)
        .setImage('https://media1.tenor.com/images/857a9fed91255db5d4960ebe32501bbc/tenor.gif')
        .setThumbnail(guildMember.user.displayAvatarURL({ dynamic : true}))
    
    
    guildMember.guild.channels.cache.get('873676226856878131').send(`<@${guildMember.user.id}>, ♥`).then(msg => msg.delete({timeout: 5000}));
    guildMember.guild.channels.cache.get('873676226856878131').send(embed);
    

    //message.Embed = await message.channel.send(embed);
    // guildMember.roles.add(welcomeRole);
    
    // guildMember.guild.channels.cache.get('701998978522415164').send(` ***Welcome*** <@${guildMember.user.id}> Ye **Zabour** \n **Aaml Tala Ale** <#758304227738517555> **o** <#758419203853516840> **o** <#855826904584945684> **O  Reacti **. \n > \`\`\` 'Ahlaaaaa  -  Neeeeees' ❤️  \`\`\` \n https://tenor.com/view/jason-mantzoukas-the-house-greetings-welcome-gif-8225006`);
});

















  client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    

    


});



client.login('ODczNjgwODkwOTY5MDk2MjIy.YQ78vA.FOXX8VBDC1rHl9xAlSGSvo3MzX8')