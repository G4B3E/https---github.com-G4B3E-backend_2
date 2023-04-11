import { IsString } from "class-validator";

export class CreateNewsDto {
  @IsString({ message: 'Kérlek szöveget adj meg' })
  gamename: string;
  @IsString({ message: 'Kérlek szöveget adj meg' })
  title: string;
  @IsString({ message: 'Kérlek szöveget adj meg' })
  content: string;
  @IsString({ message: 'Kérlek szöveget adj meg' })
  source: string;
  @IsString({ message: 'Kérlek szöveget adj meg' })
  date: string;

}
