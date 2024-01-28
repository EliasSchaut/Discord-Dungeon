/* playlist.command.ts */

import { Command, Handler } from "@discord-nestjs/core";
import {
  CommandInteraction,
  GuildMemberRoleManager,
  InteractionReplyOptions,
} from "discord.js";
import { Injectable } from "@nestjs/common";
import * as process from "process";

@Command({
  name: "begin",
  description: "Starte dein Dungeon-Abenteuer!",
})
@Injectable()
export class BeginCommand {
  private readonly response_msg = `
Du schreibst also \`/begin\` in das Buch :book:. Plötzlich beginnt es zu zittern! Du erkennst Tintenkleckse, die scheinbar wie aus dem Nichts auf den leeren Seiten dieses Buches :book: erscheinen und sich aufeinander zubewegen. Nach kurzer Zeit kannst du Buchstaben erkennen!

Du bist geschockt! Das Buch :book: ist tatsächlich MAGISCH!?! Dann kann es dir vermutlich wirklich helfen. Du realisierst, dass du abhängig von diesem Buch :book: bist und seinen Worten folge leisten musst, um in diesem heiligen Tempel :hindu_temple: weiterzukommen.
Du beginnst die neu beschriebenen Seiten zu lesen:

*Du bist also bereit, dich den **Prüfungen** zu stellen! Dann will ich dir alles erklären:
Nur mit meiner Hilfe kannst du verschlossene Objekte :lock: öffnen. Ich kann dir nämlich die geheimen Zaubersprüche :scroll: beibringen, die du zum Öffnen brauchst.

Um allerdings einen Spruch :scroll: zu erhalten, musst du zuerst ein Rätsel:grey_question:lösen! Dies ist ein Sicherheitsmechanismus meines Meisters, damit nur die Würdigsten seinen Schatz bergen können. Schreibe mir mithilfe des Befehls \`/write\` die Lösungen zu den dir auferlegten Rätseln. Die Lösungen übergibst du als Befehlsargumente, indem du diese einfach hinter \`/write\` schreibst! Du kannst bis zu drei Lösungs-Argumente bei diesem Kommando abschicken kannst. Es sind aber nicht immer drei Lösungsargumente gefordert! Ein Beispiel wäre: \`/write ja nein uff\`. Falls du Probleme mit den Kommandos hast, schreibe einfach mal \`/\` und klicke mich!

Alles verstanden? Sehr gut! Dann kommt hier dein erstes Rätsel:grey_question::\`\`\`Zwischen Anfang und Ende die Antworten liegen!
Suche unter denjenigen, die erschienen!\`\`\`*`;

  @Handler()
  async on_begin(
    interaction: CommandInteraction,
  ): Promise<InteractionReplyOptions> {
    const guild_role_head = (await interaction.guild!.roles.fetch(
      process.env.ROLE_ID_HEAD as string,
    ))!;
    const guild_role_prologue = (await interaction.guild!.roles.fetch(
      process.env.ROLE_ID_PROLOGUE as string,
    ))!;
    const member_roles = interaction.member!.roles as GuildMemberRoleManager;
    await member_roles.add(guild_role_head);
    await member_roles.add(guild_role_prologue);
    return { content: this.response_msg, ephemeral: true };
  }
}
