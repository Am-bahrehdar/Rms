export class ProfileResponse {
  message: string;
  type: string;
  status_code: number;
  headers: string;
  data: {
    phone_number: number;
    address: string;
    gender: string;
    postal_code: string;
    government_id_no: string;
    city: string;
    state: string;
    country: string;
    birth_date: string;
    user_email: string;
    user_first_name: string;
    user_last_name: string;
    government_id_photo: string;
    profile_image: string;
  };
  constructor(response: any = {}) {
    this.message = response.message || '';
    this.type = response.type || '';
    this.status_code = response.status_code || null;
    this.headers = response.headers || '';
    this.data = response.data || { email: '', access_token: '' };
  }
}
