export interface Item {
    itemId: string;
    companyPartId: string;
    companyName: string;
    itemDescription: string;
    quantity: number;
    cost: number;
    isSurplus: string;
    discontinuedDate?: Date;
    reorderedDate?: Date;
    lastModifiedDate: Date;
  }
  