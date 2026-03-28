export type Category =
  | "leadership"
  | "conflict"
  | "ambiguity"
  | "failure"
  | "cross-functional"
  | "influence"
  | "innovation"
  | "prioritization";

export interface StarDetail {
  situation: string;
  task: string;
  action: string;
  result: string;
}

export interface Story {
  id: number;
  title: string;
  hook: string;
  tags: Category[];
  star: StarDetail;
}
