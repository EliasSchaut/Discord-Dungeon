import { Param, ParamType } from "@discord-nestjs/core";

export class WriteDto {
  @Param({
    name: "wort1",
    description: "Das erste anzugebende Lösungswort",
    required: true,
    type: ParamType.STRING,
    maxLength: 100,
  })
  w1!: string;

  @Param({
    name: "wort2",
    description: "Das zweite optionale Lösungswort",
    required: false,
    type: ParamType.STRING,
    maxLength: 100,
  })
  w2?: string;

  @Param({
    name: "wort3",
    description: "Das dritte optionale Lösungswort",
    required: false,
    type: ParamType.STRING,
    maxLength: 100,
  })
  w3?: string;
}
