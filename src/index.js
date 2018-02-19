class Sorter {
  constructor() {
    this.arr = [];
    //console.log(indices)

    // your implementation
  }

  add(element) {
    this.arr.push(element);
    // your implementation
  }

  at(index) {
    return this.arr[index];
    // your implementation
  }

  get length() {
    return this.arr.length;
    // your implementation
  }

  toArray() {
    return this.arr
    // your implementation
  }

  sort(indices) {
return this.arr.sort(function(x,y) {return x-y})
    //console.log(indices)
    // your implementation
  }

  setComparator(compareFunction) {
    //console.log(indices)

  }
}

module.exports = Sorter;
