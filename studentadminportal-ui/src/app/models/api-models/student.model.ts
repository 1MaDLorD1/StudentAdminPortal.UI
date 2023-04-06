import { Address } from "./address.model";
import { Gender } from "./gender.model";

export interface Student {
  id: string,
  firstName: string,
  secondName: string,
  dateOfBirth: string,
  email: string,
  mobile: string,
  profileImageUrl: string,
  genderId: string,
  gender: Gender,
  adress: Address
}
