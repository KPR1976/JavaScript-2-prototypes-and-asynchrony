module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
  this.elements = [];
}

// Методы коллекции
Collection.prototype.values = function() {
  return this.elements;
};

Collection.prototype.count = function() {
  return this.elements.length;
};

Collection.prototype.at = function(index) {
  if (index <= 0 || index > this.elements.length || typeof index !== "number") {
    return null;
  } else {
    return this.elements[index - 1];
  }
};

Collection.prototype.append = function(newElement) {
  if (newElement instanceof Collection) {
    this.elements = this.elements.concat(newElement.values());
  } else {
    this.elements.push(newElement);
  }
};

Collection.prototype.removeAt = function(index) {
  if (index <= 0 || index > this.elements.length || typeof index !== "number") {
    return false;
  } else {
    this.elements.splice(index - 1, 1);
    return true;
  }
};
// другие методы

/**
 * Создание коллекции из массива значений
 */
Collection.from = function(newElement) {
  var collection = new Collection();

  if (newElement instanceof Collection) {
    collection.elements = collection.elements.concat(newElement.values());
  } else {
    collection.elements = collection.elements.concat(newElement);
  }
  return collection;
};
