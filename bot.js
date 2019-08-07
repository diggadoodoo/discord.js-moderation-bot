const Discord = require("discord.js")
const bot = new Discord.Client()
const config = require("./config.json")

bot.login(config.token)


bot.on("ready", () => {
    console.log("Ready")
    bot.user.setStatus("online")
    bot.user.setActivity(":smiley:")
});

bot.on("reconnecting", () => {
    console.log("Reconnecting")
});

bot.on("guildCreate", guild => {
    guild.createRole({ name: "Muted", color: "#313131" })
    console.log("Joined a new server:" + guild.name)
    console.log("It has " + guild.memberCount + " members ;)")
});

bot.on("guildDelete", guild => {
    console.log("Left the server:" + guild.name)
});

bot.on("message", message => {

    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase()

    if (command === "help") {
        const fayer = bot.users.get("304307395289415680")
        const helpEmbed = new Discord.RichEmbed()
            .setTitle(`My commands list | prefix \`${config.prefix}\``)
            .addField("``ping``", "Your basic ping pong command")
            .addField("``uptime``", "Seeing the bot's uptime")
            .addField("``kick``", "Kicks the user mentioned, you know, use it whenever needed")
            .addField("``ban``", "Bans the user mentioned, be careful with the ban hammer, it is heavy")
            .addField("``mute``", "Finally shuts up that annoying user.")
            .addField("``unmute``", "Unsilence the annoying user")
            .addField("``add``", "Adds role to a user, hooray :tada:")
            .addField("``remove``", "Removes role from user, sadface")
            .addField("``rps``", "a basic rock paper scissors commands, no cheating!")
            .setThumbnail(bot.avatarURL)
            .setColor("#020101")
        message.channel.send(helpEmbed)

    }

    if (command === "kick") {
        if (!message.member.hasPermission('KICK_MEMBERS'))
            return message.channel.send(":no_entry: Insufficient permissions")
        const member = message.mentions.members.first();
        if (!member)
            return message.channel.send(":no_entry: No user mentioned.")
        const reason = args.slice(1).join(" ") 
        if (!member.kickable)
            return message.channel.send(":no_entry: I cannot kick this user.")
        if (member) {
            if (!reason) {
                return member.kick().then(member => {
                    message.channel.send(`${member.user.tag} was kicked by ${message.author}, no reason was provided.`);
                })
            }
            if (reason) {
                member.kick().then(member => {
                    message.channel.send(`${member.user.tag} was kicked by ${message.author}, no reason was provided.`);
                })
            }
        }
    }
    if (command === "ban") {
        if (!message.member.hasPermission('BAN_MEMBERS'))
            return message.channel.send(":no_entry: Insufficient permissions")
        const member = message.mentions.members.first();
        if (!member)
            return message.channel.send(":no_entry: No user mentioned.")
        const reason = args.slice(1).join(" ")
        if (!member.kickable)
            return message.channel.send(":no_entry: I cannot ban this user.")
        if (member) {
            if (!reason) {
                return member.ban().then(member => {
                    message.channel.send(`${member.user.tag} was banned by ${message.author}, no reason was provided.`)
                })
            }
            if (reason) {
                member.ban().then(member => {
                    message.channel.send(`${member.user.tag} was banned by ${message.author} for ${reason}.`)
                })
            }
        }
    }

    if (command === "mute") {
        if (!message.member.hasPermission('MANAGE_MESSAGES'))
            return message.channel.send(":no_entry: Insufficient permissions")
        const mute = message.guild.roles.find(r => r.name === "Muted");
        message.guild.channels.forEach(channel => {
            channel.overwritePermissions(mute, { SEND_MESSAGES: false })
        })
        if (!mute)
            return message.channel.send(":no_entry: No mute role")
        const member = message.mentions.members.first();
        if (!member)
            return message.channel.send(":no_entry: No user mentioned")
        if (member.roles.some(r => ["Muted"].includes(r.name)))
            return message.channel.send(":no_entry: User is already muted")
        if (member.id === message.author.id) {
            return message.channel.send("I know you'd find it funny to mute yourself but sorry, no can do")
        }
        if (member.id === bot.user.id) {
            return message.channel.send("Very funny")
        }
        const reason = args.slice(1).join(" ")
        if (member) {
            if (!reason) {
                return member.addRole(mute).then(member => {
                    message.channel.send(`${member.user.tag} was muted by ${message.author}, no reason was provided`)

                })

            }
            if (reason) {
                member.addRole(mute).then(member => {
                    message.channel.send(`${member.user.tag} was muted by ${message.author} for ${reason}`).catch(error => {
                        message.channel.send(":no_entry: Cannot mute this user")
                    })
                })
            }
        }

    }

    if (command === "unmute") {
        if (!message.member.hasPermission('MANAGE_MESSAGES'))
            return message.channel.send(":no_entry: Insufficient permissions")
        const mute = message.guild.roles.find(r => r.name === "Muted");
        if (!mute)
            return message.channel.send(":no_entry: No mute role")
        const member = message.mentions.members.first();
        if (!member)
            return message.channel.send(":no_entry: No user mentioned")
        if (!member.roles.some(r => ["Muted"].includes(r.name)))
            return message.channel.send(":no_entry: User is not muted")
        if (member) {
            member.removeRole(mute).then(member => {
                message.channel.send(`${member.user.tag} was unmuted by ${message.author}`)

            })
        }
    }
    if (command === "add") {
        if (!message.member.hasPermission("MANAGE_ROLES"))
            return message.channel.send(":no_entry: Insufficient permissions")
        const member = message.mentions.members.first()
        if (!member)
            return message.channel.send(":no_entry: No user mentioned")
        const add = args.slice(1).join(" ")
        if (!add)
            return message.channel.send(":no_entry: No role said")
        const roleAdd = message.guild.roles.find(role => role.name === add);
        if (!roleAdd)
            return message.channel.send(":no_entry: Role does not exist")
            if (member.roles.has(roleAdd.id)){
            return message.channel.send(":no_entry: User already has role")
            }
        if (member) {
            member.addRole(roleAdd).catch((error) =>{
                message.channel.send(":cry: Error")
            }).then((member) => {
                message.channel.send(`:thumbsup: ${roleAdd} added to ${member.displayName}`)
            })

        }
    }
    if (command === "remove") {
        if (!message.member.hasPermission("MANAGE_ROLES"))
            return message.channel.send(":no_entry: Insufficient permissions")
        const member = message.mentions.members.first()
        if (!member)
            return message.channel.send(":no_entry: No user mentioned")
        const remove = args.slice(1).join(" ")
        if (!remove)
            return message.channel.send(":no_entry: No role said")
        const roleRemove = message.guild.roles.find(role => role.name === remove);
        if (!roleRemove)
            return message.channel.send(":no_entry: Role does not exist")
            if (!member.roles.has(roleRemove.id)){
            return message.channel.send(":no_entry: User already does not have role")
            }
        if (member) {
            member.removeRole(roleRemove).catch((err) =>{
                message.channel.send(":cry: Error")
            }).then((member) => {
                message.channel.send(`:thumbsup: ${roleRemove} removed from ${member.displayName}`)
            })

        }
    }

    if(command === "rps"){
        const options = [
            "rock :shell: ",
            "paper :newspaper2:",
            "scissors :scissors: "
        ]
        const option = options[Math.floor(Math.random() * options.length)]
        message.channel.send(`You got ${option}`)
    }

    if (command === "uptime") {
        let totalSeconds = (bot.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds / 60;
        message.channel.send(`:low_brightness: **Uptime:** ${days} days, ${hours} hours and ${minutes} mins`)

    }
});

