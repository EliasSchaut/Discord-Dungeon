import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { EnvValidationSchema } from "@/common/validation/env.validation";
import { DiscordModule } from "@discord-nestjs/core";
import { GatewayIntentBits } from "discord.js";
import { BotModule } from "@/bot/bot.module";
import * as process from "process";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: () => EnvValidationSchema.validate(process.env),
    }),
    DiscordModule.forRootAsync({
      useFactory: () => ({
        token: process.env.TOKEN as string,
        discordClientOptions: {
          intents: [GatewayIntentBits.Guilds],
        },
        registerCommandOptions: [
          {
            forGuild: process.env.GUILD_ID as string,
          },
        ],
        autoLogin: true,
      }),
    }),
    BotModule,
  ],
})
export class AppModule {}
