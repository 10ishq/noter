interface INote {
    title: string;
    content: string;
    userID: string;
    createdAt?: Date;
    updatedAt?: Date;
  }

export { INote };