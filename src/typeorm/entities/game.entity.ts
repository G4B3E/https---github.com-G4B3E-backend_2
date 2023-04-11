import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name : 'games'})
export default class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gamename: string;

  @Column()
  release: number;

  @Column()
  category: string;

  @Column()
  platform: string;

  @Column()
  developer: string;

  @Column()
  description: string;

  @Column()
  image: string;
}
