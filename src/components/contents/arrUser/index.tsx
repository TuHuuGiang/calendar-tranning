import user from "../../../assets/img/user.jpg";
import user1 from "../../../assets/img/user1.jpg";

interface IArrUser {
  id: number;
  url: string;
}

export const arrUser: IArrUser[] = [
  {
    id: 1,
    url: user,
  },
  {
    id: 2,
    url: user1,
  },
  {
    id: 3,
    url: user,
  },
  {
    id: 4,
    url: user1,
  },
];
