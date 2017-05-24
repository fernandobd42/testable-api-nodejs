import HttpStatus from 'http-status';

const defaultResponse = (data, statusCode = HttpStatus.OK) => ({
  data,
  statusCode,
});

const errorResponse = (message, statusCode = HttpStatus.BAD_REQUEST) => defaultResponse({
  error: message,
}, statusCode);

class UsersController {
  constructor(Users) {
    this.Users = Users;
  }

  getAll() {
    return this.Users.findAll({})
      .then(result => defaultResponse(result))
      .catch(error => errorResponse(error.message));
  }

  getOne(id) {
    return this.Users.findOne({ where: id })
      .then(result => defaultResponse(result))
      .catch(error => errorResponse(error.message));
  }

  create(user) {
    return this.Users.create(user)
      .then(result => defaultResponse(result, HttpStatus.CREATED))
      .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
  }

  update(user, newUser) {
    return this.Users.update(user, {
      where: newUser,
    })
      .then(result => defaultResponse(result))
      .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
  }

  delete(user) {
    return this.Users.destroy({
      where: user,
    })
      .then(result => defaultResponse(result, HttpStatus.NO_CONTENT))
      .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
  }

}
export default UsersController;
