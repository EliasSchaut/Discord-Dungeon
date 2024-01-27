/* playlist.command.ts */

import { Command, Handler } from "@discord-nestjs/core";
import { CommandInteraction } from "discord.js";
import { Injectable } from "@nestjs/common";
import * as process from "process";

@Command({
  name: "begin",
  description: "Starte dein Dungeon-Abenteuer!",
})
@Injectable()
export class BeginCommand {
  @Handler()
  onBegin(interaction: CommandInteraction): void {
    interaction
      .reply(
        `
Du schreibst also \`+begin\` in das Buch :book:. Plötzlich beginnt es zu zittern! Du erkennst Tintenkleckse, die scheinbar wie aus dem Nichts auf den leeren Seiten dieses Buches :book: erscheinen und sich aufeinander zubewegen. Nach kurzer Zeit kannst du Buchstaben erkennen!

Du bist geschockt! Das Buch :book: ist tatsächlich MAGISCH!?! Dann kann es dir vermutlich wirklich helfen. Du realisierst, dass du abhängig von diesem Buch :book: bist und seinen Worten folge leisten musst, um in diesem heiligen Tempel :hindu_temple: weiterzukommen.
Du beginnst die neu beschriebenen Seiten zu lesen:
    `,
      )
      .then(() => {
        interaction.followUp(`
*Du bist also bereit, dich den **Prüfungen** zu stellen! Dann will ich dir alles erklären:
Nur mit meiner Hilfe kannst du verschlossene Objekte :lock: öffnen. Ich kann dir nämlich die geheimen Zaubersprüche :scroll: beibringen, die du zum Öffnen brauchst. Jedoch funktionieren die Sprüche :scroll: nur ein einziges Mal und auch nur bei dir. Kein Anderer kann deine Sprüche :scroll: nutzen! Zudem kann ich mir nur einen Spruch :scroll: pro Person gleichzeitig merken.

Um allerdings einen Spruch :scroll: zu erhalten, musst du zuerst ein Rätsel:grey_question:lösen! Schreibe mir mithilfe des Befehls \`/write\` die Lösungen zu den dir auferlegten Rätseln. Die Lösungen übergibst du als Befehlsargumente, indem du diese einfach hinter \`/write\` schreibst! Du kannst bis zu drei Lösungs-Argumente bei diesem Kommando abschicken kannst (Es sind nicht immer drei Lösungsargumente gefordert)! Ein Beispiel wäre: \`/write ja nein uff\`.

Wenn deine Antwort richtig war, erhältst du von mir einen einmal nutzbaren Zauberspruch :scroll:, um ein bestimmtes Schloss :lock: zu öffnen. Den Spruch :scroll: musst du dann **im Server** im Channel <#${process.env.CHANNEL_INTERACTION_ID}> mit \`/whisper\` aufsagen! Falls du einen Spruch :scroll: verloren hast, kannst du mit \`/write\` jederzeit mit den alten Lösungen einen Neuen anfordern. Falls du Probleme mit den Kommandos hast, schreibe einfach mal \`/help\`!

Alles verstanden? Sehr gut! Dann kommt hier dein erstes Rätsel:grey_question::\`\`\`Zwischen Anfang und Ende die Antworten liegen!
Suche unter denjenigen, die erschienen!\`\`\`*        
     `);
      });
  }
}
