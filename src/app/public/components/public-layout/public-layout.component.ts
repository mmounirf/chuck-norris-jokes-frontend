import { JokesManagementService } from './../../../shared/services/jokes-management.service';
import { Joke } from 'src/app/shared/interfaces/joke';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss']
})
export class PublicLayoutComponent implements OnInit {
  constructor(private route: ActivatedRoute, private jokesManagement: JokesManagementService) { }

  ngOnInit() {
    this.jokesManagement.setRandomJokes(this.route.snapshot.data.jokes.data);
    this.jokesManagement.setFavoriteJokes([]);
  }

  getRandomJokes(): Array<Joke> {
    return this.jokesManagement.getRandomJokes();
  }

  getFavoriteJokes(): Array<Joke> {
    return this.jokesManagement.getFavoriteJokes();
  }

}
