import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice Guy' },
  { id: 12, name: 'Pegasus' },
  { id: 13, name: 'Hercules' },
  { id: 14, name: 'Daredevil' },
  { id: 15, name: 'Iron-Fist' },
  { id: 16, name: 'Luke Cage' },
  { id: 17, name: 'Master Yoda' },
  { id: 18, name: 'Sensai' },
  { id: 19, name: 'Conor McGregor' },
  { id: 20, name: 'Notorious' }
];

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero = Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
