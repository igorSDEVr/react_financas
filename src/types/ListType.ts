export type ListType = {
  actualDate: string;
  data: [{
    title: string;
    category: string;
    income: boolean;
    value: number;
    date: Date;
  }];
  filteredDataByMonth: [{
    title: string;
    category: string;
    income: boolean;
    value: number;
    date: Date;
  }];
};