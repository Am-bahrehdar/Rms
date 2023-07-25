export class ForgetPassword {
  message: string;
  status_code: number;
  type: string;

  constructor(response: any = {}) {
    this.message = response.message || 'An error occurred.';
    this.status_code = response.status_code || 500;
    this.type = response.type || 'Unknown Error';
  }
}
