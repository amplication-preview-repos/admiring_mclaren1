export type Page = {
  content: string | null;
  createdAt: Date;
  id: string;
  title: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
