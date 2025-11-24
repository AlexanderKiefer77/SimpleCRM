export class User {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  adress: string = '';
  zipCode: string = '';
  city: string = '';
  birthDate?: number;
  id?: string;

  constructor(obj?: any) {
    if (!obj) return;

    this.firstName = obj.firstName ?? '';
    this.lastName  = obj.lastName ?? '';
    this.email     = obj.email ?? '';
    this.adress    = obj.adress ?? '';
    this.zipCode   = obj.zipCode ?? '';
    this.city      = obj.city ?? '';
    this.birthDate = obj.birthDate ?? undefined;
    this.id        = obj.id ?? undefined;
  }

  toJSON() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      adress: this.adress,
      zipCode: this.zipCode,
      city: this.city,
      birthDate: this.birthDate,
    };
  }
}
