exports.cal = {
  total: 0,
  add: function (num) {
    this.total = this.total + num;
    return this;
  },
  multi: function (num) {
    this.total = this.total * num;
    return this;
  },
  sub: function (num) {
    this.total = this.total - num;
    return this;
  },
  div: function (num) {
    this.total = this.total / num;
    return this;
  },
};
exports.test = function () {
  alert('called test function ');
};
