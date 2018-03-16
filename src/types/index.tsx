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

export type Credential {
  username: string;
  password: string;
};

type User {
  id_token: string;
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

// src/reducers/auth.tsx
export interface AuthState {
  isLoggingIn: boolean;
  idToken?: string;
  // profile?: auth0.Auth0UserProfile; maybe occured circular dependency
  error?: string;
}
