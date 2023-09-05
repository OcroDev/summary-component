
export interface Data {
  category: string;
  score: number;
  icon: string;
}

export enum Category {
  Reaction = 'Reaction',
  Memory = 'Memory',
  Verbal = 'Verbal',
  Visual = 'Visual'
}