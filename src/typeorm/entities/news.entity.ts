import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'news'})
export default class News {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gamename: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()//oldal forrás
  source: string;

  @Column()
  date: string;

 
}
