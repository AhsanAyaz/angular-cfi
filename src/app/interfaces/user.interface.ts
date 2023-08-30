export interface User {
  name: {
    title: string;
    first: string;
    last: string;
  }
  picture: {
    medium: string;
    large: string;
    thumbnail: string;
  }
  email: string;
}
