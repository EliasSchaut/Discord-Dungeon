const { chamber } = require('../../../config/config.json');
const { get_text: gt } = require("../../lang/lang_man")
const s = "commands.combine."

module.exports = {
    name: 'combine',
    description: async function (msg) { return await gt(msg, s + "help") },
    aliases: ['combinate', 'com'],
    args_needed: false,
    args_min_length: 0,
    args_max_length: 0,
    guild_only: true,
    cooldown: 5,
    enable_slash: true,
    async execute(msg, args) {
        const member = msg.guild.members.cache.get(msg.author.id)

        if (member.roles.cache.some(role => role.id === chamber.ids[chamber["3"]])) {
            await msg.client.output.send(msg, await gt(msg, `${s}already_have`))

        } else if (member.roles.cache.some(role => role.id === chamber.ids[chamber["2_wisdom"]])
        && member.roles.cache.some(role => role.id === chamber.ids[chamber["2_expert"]])
        && member.roles.cache.some(role => role.id === chamber.ids[chamber["2_knowledge"]])) {
            const role = msg.guild.roles.cache.get(chamber.ids[chamber["3"]])
            member.roles.add(role);
            await msg.client.output.send(msg, await gt(msg, `${s}success`, chamber.channel_ids["6"]))

        } else {
            await msg.client.output.send(msg, await gt(msg, `${s}fail`))
        }
    },
};