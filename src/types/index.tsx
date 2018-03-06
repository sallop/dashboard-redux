export type Member = {
  id: string,
  group: string,
  name: string,
  pronounce: string,
  spiritualName: string,
  birthday: string,
  postcode: string,
  address: string,
  info: string
};

// export interface StoreState {
export interface TableState {
  // value: number;
  editor: Member;
  members: Member[];
}

export interface CounterState {
  value: number;
}
