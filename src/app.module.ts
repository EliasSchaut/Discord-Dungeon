import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { EnvValidationSchema } from "@/common/validation/env.validation";
import { DiscordModule } from "@discord-nestjs/core";
import { GatewayIntentBits } from "discord.js";
import { BotModule } from "@/bot/bot.module";

@Module({
  imports: [
    DiscordModule.forRootAsync({
      useFactory: () => ({
        token: process.env.TOKEN as string,
        discordClientOptions: {
          intents: [GatewayIntentBits.Guilds],
        },
        autoLogin: true,
      }),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: EnvValidationSchema,
    }),
    BotModule,
  ],
})
export class AppModule {}
