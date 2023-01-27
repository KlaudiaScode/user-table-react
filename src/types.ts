export interface User {
    name: {
      first: string;
      last: string;
    };
    gender: string;
    nat: string;
    dob: {
      age: number;
    };
    location:{
      state: string;
      country: string;
    };
    login: {
      uuid: string;
    };
  }