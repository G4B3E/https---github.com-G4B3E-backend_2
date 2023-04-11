import { IsString } from "class-validator";

export class CreateRecordDto {
  @IsString({ message: 'Kérlek szöveget adj meg' })
  username: string;
  @IsString({ message: 'Kérlek szöveget adj meg' })
  gamename: string;
  @IsString({ message: 'Kérlek szöveget adj meg' })
  time: string;
  @IsString({ message: 'Kérlek szöveget adj meg' })
  platform: string;
  @IsString({ message: 'Kérlek szöveget adj meg' })
  difficulty: string;
  @IsString({ message: 'Kérlek szöveget adj meg' })
  youtubelink: string;
}