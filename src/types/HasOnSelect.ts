export type HasOnSelect<T extends object> = T & {
  readonly onSelect: () => void;
};
