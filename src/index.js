class Sorter {
  constructor() {
    this.arr = [];
    this.comporator = null;
    this.x = null;
    this.y = null;
    this.tarr = [];
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
  console.log(this.arr, "arrBefore")
    indices = indices.sort(function(a,b) {
         return a-b;    
      });
 for(var i = 0; i < indices.length; i++) {
   this.tarr.push(this.arr[indices[i]]);
 }
 console.log(this.tarr, "tarr UNSORTED")
this.tarr = this.tarr.sort(function(a,b) {
         return a-b;   
});
  console.log(indices, "indices");
  console.log(this.tarr, "tarrSORTED");
for(var j = 0; j <this.tarr.length; j++ ) {
  console.log(this.arr[indices[j]], "indicesJ", this.tarr[j], "thisArr");
  this.arr[indices[j]] = this.tarr[j];
  console.log("working")
}
   console.log(this.arr, "arrAfter")

  this.tarr = [];
  return this.arr;

  }

  setComparator(compareFunction) {
    return this.arr.sort(compareFunction);

  }
}

module.exports = Sorter;
