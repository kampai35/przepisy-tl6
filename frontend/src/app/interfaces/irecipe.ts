export interface Irecipe {
  _id: string;
  description: string;
  short_description: string;
  ingredients: Iingredient[];
  level: number;
  name: string;
  single_pot: boolean;
  size: number;
  time: number;
  user_id: any;
}

export interface Iingredient {
  id: string;
  amount: number;
  name: string
}
