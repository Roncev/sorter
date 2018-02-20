class Sorter {
  constructor() {
    this.arr = [];
    this.comporator = null;
    this.x = null;
    this.y = null;
    this.tarr = [];
    this.comparator = null;
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
 for(var i = 0; i < indices.length; i++) {
   this.tarr.push(this.arr[indices[i]]);
 }
 if (this.comparator == null) {
 this.tarr = this.tarr.sort(function(a,b) {
         return a-b;   
  });
 }
else {
this.tarr = this.tarr.sort(this.comparator);
  }

for(var j = 0; j <this.tarr.length; j++ ) {

  this.arr[indices[j]] = this.tarr[j];

}
  this.tarr = [];
  return this.arr;
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;
