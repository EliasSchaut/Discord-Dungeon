const { get_text: gt } = require("../../lang/lang_man")
const s = "commands.begin."

module.exports = {
    name: 'begin',
    description: async function (msg) { return await gt(msg, s + "help") },
    aliases: ['start', 'enter'],
    args_min_length: 0,
    args_max_length: 0,
    dm_only: true,
    cooldown: 5,
    enable_slash: true,
    async execute(msg, args) {
        await msg.client.output.send(msg, await gt(msg, `${s}message_explorer`))
        await msg.client.output.send(msg, await gt(msg, `${s}message_book`, msg.client.config.chamber.channel_ids.bot))
    },
};