export const dataFormatter = (data: any[]) => {
  return data.map(
    (
      item: any & {
        createdAt: Date;
        updatedAt: Date;
        deletedAt?: Date;
        id: number;
      }
    ) => {
      const { createdAt, updatedAt, deletedAt, ...values } = item;
      return values;
    }
  );
};
