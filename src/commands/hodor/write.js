// Import spell book
const spell_book = require('../../handler/spell_book');
const { solutions, chamber } = require('../../../config/config.json');
const { get_text: gt } = require("../../lang/lang_man")
const s = "commands.write."

module.exports = {
    name: 'write',
    description: async function (msg) { return await gt(msg, s + "help") },
    aliases: ['note', 'wr'],
    args_needed: true,
    args_min_length: 1,
    args_max_length: 3,
    usage: async function (msg) { return await gt(msg, s + "usage") },
    dm_only: true,
    cooldown: 5,
    enable_slash: true,
    async execute(msg, args) {
        for (let i = 1; i <= Object.keys(solutions).length; i++) {
            const stage_sol = solutions["" + i]

            if (args.length === stage_sol.length) {
                let args_match = true

                for (let j = 0; j < stage_sol.length; j++) {
                    if (args[j].toLowerCase() !== stage_sol[j]) {
                        args_match = false
                        break
                    }
                }
                if (args_match) {
                    const spell = spell_book.claim_spell(msg.author.id, i)
                    await send_success(spell)
                    return
                }
            }
        }
        await send_fail()


        async function send_success(spell) {
            await msg.client.output.send(msg, await gt(msg, `${s}success`, spell, chamber.channel_ids.bot))
        }

        async function send_fail() {
            await msg.client.output.send(msg, await gt(msg, `${s}fail`))
        }
    },
};