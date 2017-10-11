'use strict';

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  randomAvg: function(minCust, maxCust){
    min = Math.ceil(this.minCust * this.avgCookies);
    max = Math.floor(this.maxCust * this.avgCookies);
    console.log('the min ' + min);
    console.log('the max ' + max);
    console.log(this.minCust);
    console.log(this.maxCust);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};
