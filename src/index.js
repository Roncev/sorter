class Sorter {
  constructor() {
    this.arr = [];
    this.comporator = null;
    this.x = null;
    this.y = null;
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
    indices = indices.sort(function(a,b) {
         return a-b;    
      });
    console.log(indices);
    console.log(this.arr, "BEFORE")
    this.x = indices[0];
    this.y = indices[1];
    if (this.arr[this.x]>this.arr[this.y]) {
      var temp = this.arr[this.y];
      this.arr[this.y] = this.arr[this.x];
      this.arr[this.x] = temp;
    }
      console.log(this.arr, "AFTER")
    return this.arr

  }

  setComparator(compareFunction) {
    this.comporator = compareFunction;


  }
}

module.exports = Sorter;
