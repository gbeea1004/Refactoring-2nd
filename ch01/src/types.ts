type PlayID = 'hamlet' | 'as-like' | 'othello';
type Genre = 'tragedy' | 'comedy';

export type Play = {
  name: string;
  type: Genre;
};

export type Plays = {
  [playID in PlayID]: Play;
};

export type Invoice = {
  customer: string;
  performances: Performance[];
};

export type Performance = {
  playID: PlayID;
  audience: number;
};
