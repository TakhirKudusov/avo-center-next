type TableHead = {
  id: number;
  name: string;
  filter?: boolean;
  width?: string;
};

type TableContent = {
  id: number;
  item: string;
  width?: string;
};

export type { TableHead, TableContent };
