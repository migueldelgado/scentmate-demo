import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MoviesService } from './movies.service';
import { AppConfig } from '../app.config';

describe('MoviesService', () => {
  let service: MoviesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoviesService],
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(MoviesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getMovies', () => {
    const result: any = {
      genres: [
        {id: 1, name: 'Adventure'},
        {id: 2, name: 'Animation'}
      ]
    };
    
    service.getGenres().subscribe((genresList: any) => {
      expect(genresList.genres.length).toBe(2);
      expect(genresList).toEqual(result);
    });

    const req = httpMock.expectOne(AppConfig.getBaseUrl('genre/movie/list'));
    expect(req.request.method).toBe('GET');
    req.flush(result);
  });
});
