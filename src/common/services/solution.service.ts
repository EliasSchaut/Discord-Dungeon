import { Injectable } from "@nestjs/common";
import { RiddleEnum } from "@/types/enums/riddle.enum";
import * as process from "process";
import { RoleEnum } from "@/types/enums/role.enum";
import { SolutionType } from "@/types/types/solution.type";
import { SpellService } from "@/common/services/spell.service";

@Injectable()
export class SolutionService {
  private readonly solutions;
  private readonly role_ids: string[];
  private readonly channel_ids: string[];

  constructor() {
    this.solutions = [
      process.env.SOLUTION_PROLOGUE as string,
      process.env.SOLUTION_1 as string,
      process.env.SOLUTION_2_WISDOM as string,
      process.env.SOLUTION_2_ACTIVITY as string,
      process.env.SOLUTION_2_KNOWLEDGE as string,
      process.env.SOLUTION_3 as string,
      process.env.SOLUTION_4 as string,
    ];

    this.role_ids = [
      process.env.ROLE_ID_PROLOGUE as string,
      process.env.ROLE_ID_1 as string,
      process.env.ROLE_ID_2 as string,
      process.env.ROLE_ID_2_WISDOM as string,
      process.env.ROLE_ID_2_ACTIVITY as string,
      process.env.ROLE_ID_2_KNOWLEDGE as string,
      process.env.ROLE_ID_3 as string,
      process.env.ROLE_ID_4 as string,
      process.env.ROLE_ID_EPILOGUE as string,
    ];

    this.channel_ids = [
      process.env.CHANNEL_ID_PROLOGUE as string,
      process.env.CHANNEL_ID_1 as string,
      process.env.CHANNEL_ID_2 as string,
      "",
      "",
      "",
      process.env.CHANNEL_ID_3 as string,
      process.env.CHANNEL_ID_4 as string,
      process.env.CHANNEL_ID_EPILOGUE as string,
    ];
  }

  public check(solution: string): SolutionType {
    const riddle: RiddleEnum = this.get_riddle_from_solution(
      solution,
    ) as RiddleEnum;

    return this.get_role_and_channel_id_from_riddle(riddle);
  }

  private get_riddle_from_solution(solution: string): RiddleEnum | null {
    const sol_index = this.solutions.indexOf(solution);
    if (sol_index === -1) return null;
    return sol_index;
  }

  private get_role_and_channel_id_from_riddle(
    riddle: RiddleEnum | null,
  ): SolutionType {
    switch (riddle) {
      case RiddleEnum.ZeroProlog:
        return {
          role_id: this.role_ids[RoleEnum.One],
          channel_id: this.channel_ids[RoleEnum.One],
          response: `**Glückwunsch!!!**\nDas Buch zitter und es erscheint der Zauberspruch \`${SpellService.gen_spell()}\`. Du sprichst deinen ersten Zauberspruch :scroll:!\nDie verschlossene Tür ist nun verschwunden. Du kannst nun in <#${this.channel_ids[RoleEnum.One]}> vorschreiten!`,
        };
      case RiddleEnum.One:
        return {
          role_id: this.role_ids[RoleEnum.Two],
          channel_id: this.channel_ids[RoleEnum.Two],
          response: `**Glückwunsch!!!**\nDas Buch zitter und es erscheint der Zauberspruch \`${SpellService.gen_spell()}\`. Du sprichst deinen zweiten Zauberspruch :scroll:!\nDie verschlossene Tür ist nun verschwunden. Du kannst nun in <#${this.channel_ids[RoleEnum.Two]}> vorschreiten!`,
        };
      case RiddleEnum.TwoWisdom:
        return {
          role_id: this.role_ids[RoleEnum.TwoWisdom],
          channel_id: null,
          response: `**Glückwunsch!!!**\nDas Buch zittert und du sprichst den erschienenen Zauberspruch \`${SpellService.gen_spell()}\`. Die Truhe der **Weisheit** öffnet sich und du erhältst ein Schlüsselteil :key2:!\nWenn du alle drei besitzt, \`/combine\` sie!`,
        };
      case RiddleEnum.TwoActivity:
        return {
          role_id: this.role_ids[RoleEnum.TwoActivity],
          channel_id: null,
          response: `**Glückwunsch!!!**\nDas Buch zittert und du sprichst den erschienenen Zauberspruch \`${SpellService.gen_spell()}\`. Die Truhe der **Aktivität** öffnet sich und du erhältst ein Schlüsselteil :key2:!\nWenn du alle drei besitzt, \`/combine\` sie!`,
        };
      case RiddleEnum.TwoKnowledge:
        return {
          role_id: this.role_ids[RoleEnum.TwoKnowledge],
          channel_id: null,
          response: `**Glückwunsch!!!**\nDas Buch zittert und du sprichst den erschienenen Zauberspruch \`${SpellService.gen_spell()}\`. Die Truhe des **Wissens** öffnet sich und du erhältst ein Schlüsselteil :key2:!\nWenn du alle drei besitzt, \`/combine\` sie!`,
        };
      case RiddleEnum.Three:
        return {
          role_id: this.role_ids[RoleEnum.Four],
          channel_id: this.channel_ids[RoleEnum.Four],
          response: `**Glückwunsch!!!**\nDas Buch zittertK und es erscheint der Bannspruch \`${SpellService.gen_spell()}\`. Kurz nachdem du den Bannspruch aufgesagt hast, schreit *Prokrastination* :imp: höllisch auf, während er sich immer mehr zusammenzieht und immer kleiner wird, bis er schließlich komplett verschwunden ist. Du hast *Prokrastination* :imp: erfolgreich mit Prokrastination besiegt!\nDie letzte verschlossene Tür ist nun verschwunden. Du kannst nun in <#${this.channel_ids[RoleEnum.Four]}> vorschreiten!`,
        };
      case RiddleEnum.Four:
        return {
          role_id: this.role_ids[RoleEnum.FiveEpilog],
          channel_id: this.channel_ids[RoleEnum.FiveEpilog],
          response: `**Glückwunsch!!!**\nDas Buch zitter und es erscheint der Zauberspruch \`${SpellService.gen_spell()}\`. Du hast das letzte Rätsel:grey_question:gelöst und deinen letzten Zauberspruch :scroll: gesprochen!\nDu kannst nun in den <#${this.channel_ids[RoleEnum.FiveEpilog]}> vorschreiten!`,
        };
      default:
        return {
          role_id: null,
          channel_id: null,
          response: `**Leider falsch!**\nVersuche es weiter, dann bekommst du es bestimmt heraus!`,
        };
    }
  }
}
