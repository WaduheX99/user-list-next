export class UserModel {
  constructor({ id, email, first_name, last_name, avatar }) {
    this.id = id;
    this.email = email;
    this.firstName = first_name;
    this.lastName = last_name;
    this.fullName = `${first_name} ${last_name}`;
    this.avatar = avatar || '';
  }
}
