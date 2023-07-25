export class LoginResponse {
  message: string;
  type: string;
  status_code: number;
  headers: string;
  data: {
    email: string;
    access_token: string;
  };

  constructor(response: any = {}) {
    this.message = response.message || '';
    this.type = response.type || '';
    this.status_code = response.status_code || null;
    this.headers = response.headers || '';
    this.data = response.data || { email: '', access_token: '' };
  }
}
