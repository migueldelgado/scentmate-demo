import { Component, OnInit } from '@angular/core';
import { Genre } from '../model/genre';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  componentName: string;
  genresList: Genre[] = [];

  constructor(private movieService: MoviesService) {
    this.componentName = 'Initial Name';
  }

  ngOnInit(): void {
    this.getGenres()
  }

  getGenres() {
    this.movieService.getGenres().subscribe((genres: any) => {
      console.log(genres);
      this.genresList = genres;
    });
  }

  onSelected(item: string) {
    this.componentName = item;
  }

}
