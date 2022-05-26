export interface Irecipe {
  _id: string;
  created_at: number;
  description: string;
  image: string;
  ingredients: Iingredient[];
  level: number;
  name: string;
  short_description: string;
  single_pot: boolean;
  size: number;
  tags: Itags[];
  time: number;
  user_id: string;
}

export interface Iingredient {
  _id: string;
  name: string;
  amount: string;
}
export interface Itags{
}
