'use strict';

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  emptyArray: [],
  randomCust: function(){
    var avgCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    return avgCust;
  },
  cookiesHour: function(){
    for (var i = 0; i < 15; i++) {
      this.emptyArray.push(Math.round(this.randomAvg() * this.avgCookies))
      ;
    }
  },
  totalCookies: function() {
    var total = 0;
    for (var i = 0; i < this.emptyArray.length; i++) {
      total += this.emptyArray[i];
    }
    return total;
  }
};
