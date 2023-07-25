export class User {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone_number: string;
  address: string;
  gender: string;
  government_id_no: string;
  government_id_photo: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;

  constructor(response: any = {}) {
    this.first_name = response.first_name || '';
    this.last_name = response.last_name || '';
    this.email = response.email || '';
    this.password = response.password || '';
    this.phone_number = response.phone_number || '';
    this.address = response.address || '';
    this.gender = response.gender || '';
    this.government_id_no = response.government_id_no || '';
    this.government_id_photo = response.government_id_photo || '';
    this.city = response.city || '';
    this.state = response.state || '';
    this.country = response.country || '';
    this.postal_code = response.postal_code || '';
  }
}
export class UserToken {
  token: string;
  email: string;
  constructor(response: any = {}) {
    this.token = response.token || '';
    this.email = response.email || '';
  }
}
