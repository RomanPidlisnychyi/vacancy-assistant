module.exports = class ErrorConstructor extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
    delete this.stack;
  }
};
