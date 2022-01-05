// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

import { IUserState } from 'store/slices/users/UserSlices';

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
  users: IUserState;
}
