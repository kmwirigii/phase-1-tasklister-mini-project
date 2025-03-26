class Task {
  constructor(description) {
    this.description = description;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Task;
} else {
  window.Task = Task;
}