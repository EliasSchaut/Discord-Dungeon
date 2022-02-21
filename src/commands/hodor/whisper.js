const spell_book = require('../../handler/spell_book')
const { chamber } = require('../../../config/config.json')

const { get_text: gt } = require("../../lang/lang_man")
const s = "commands.whisper."

module.exports = {
    name: 'whisper',
    description: async function (msg) { return await gt(msg, s + "help") },
    aliases: ['speak', 'say', 'spell', 'whis'],
    args_needed: true,
    args_min_length: 2,
    args_max_length: 2,
    usage: async function (msg) { return await gt(msg, s + "usage") },
    guild_only: true,
    cooldown: 5,
    enable_slash: true,
    async execute(msg, args) {
        const check_chamber = spell_book.use_spell(msg.author.id, args[0] + " " + args[1])
        if (check_chamber === -1) {
            await send_fail()

        } else {
            const role = msg.guild.roles.cache.get(chamber.ids[check_chamber])
            const member = msg.guild.members.cache.get(msg.author.id)
            if (await member.roles.resolve(role.id) !== null) { await send_already_have(); return }

            member.roles.add(role)
            await send_success(check_chamber)
        }

        async function send_fail() {
            await msg.client.output.send(msg, await gt(msg, `${s}fail`))
        }

        async function send_success(chamber_index) {
            await msg.client.output.send(msg, await gt(msg, `${s}success.${chamber_index}`, chamber.channel_ids[chamber_index]))
        }

        async function send_already_have() {
            await msg.client.output.send(msg, await gt(msg, `${s}already_have`))
        }
    },
};
