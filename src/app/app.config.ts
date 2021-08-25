export class AppConfig {
  static getBaseUrl(path: string) {
    return `https://api.themoviedb.org/3/${path}?api_key=625849dfb72e285069948fc1c2bb1a01`;
  }
}