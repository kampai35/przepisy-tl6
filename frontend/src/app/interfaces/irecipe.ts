export interface Irecipe {
  id: any;
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

interface Iingredient {
  id: any;
  amount: number;
  name: string
}
