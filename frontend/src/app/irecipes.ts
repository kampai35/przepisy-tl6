export interface Irecipes {
  id: any;
  description: string;
  ingredients: Iingredients[];
  level: number;
  name: string;
  single_pot: boolean;
  size: number;
  time: number;
  user_id: any;
}
interface Iingredients{
  id: any;
  amount: number;
  name: string
}
