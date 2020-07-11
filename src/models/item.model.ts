export interface Item {
  status: string;
  users: number;
  parent?: number;
  percent: number;
  id: number;
  name: string;
  description?: string;
}
