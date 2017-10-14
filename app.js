'use strict';

var hours = ['6 a.m.','7 a.m.','8 a.m.','9 a.m.','10 a.m.','11 a.m.','12 p.m.','1 p.m.','2 p.m.','3 p.m.','4 p.m.','5 p.m.','6 p.m.','7 p.m.','8 p.m.',];

var firstAndPike = {
  name: 'First and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  cookiesSoldArray: [],

  randomCust: function(){
    var avgCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    return avgCust;
  },
  cookiesHour: function(){
    for (var i = 0; i < 15; i++) {
      this.cookiesSoldArray.push(Math.round(this.randomCust() * this.avgCookies))
      ;
    }
  },
  totalCookies: function() {
    var total = 0;
    for (var i = 0; i < this.cookiesSoldArray.length; i++) {
      total += this.cookiesSoldArray[i];
    }
    return total;
  },
  render: function() {
    var firstandpikeh3 = document.getElementById('firstandpikeh3');
    var firstandpikeul = document.getElementById('firstandpikeul');

    //calling the methods in the object literal
    this.cookiesHour();
    //create a variable to be able to append item to our list
    //create a new h3 element
    var h3El = document.createElement('h3');
    // give text to the new h3 element
    h3El.textContent = this.name;
    firstandpikeul.appendChild(h3El);
    for(var k = 0; k < hours.length; k++) {
      //stepping through hours array
      var liEl = document.createElement('li');
      //creating li elements with text of the hours
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldArray[k] + ' cookies';
      console.log(this.cookiesSoldArray[k]);
      firstandpikeul.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Total : ' + this.totalCookies() + ' cookies';
    firstandpikeul.appendChild(liEl);
  }
};
firstAndPike.render();

var seaTacAirport = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  cookiesSoldArray: [],

  randomCust: function(){
    var avgCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    return avgCust;
  },
  cookiesHour: function(){
    for (var i = 0; i < 15; i++) {
      this.cookiesSoldArray.push(Math.round(this.randomCust() * this.avgCookies))
      ;
    }
  },
  totalCookies: function() {
    var total = 0;
    for (var i = 0; i < this.cookiesSoldArray.length; i++) {
      total += this.cookiesSoldArray[i];
    }
    return total;
  },
  render: function() {
    var seaTacAirporth3 = document.getElementById('firstandpikeh3');
    var seaTacAirportul = document.getElementById('firstandpikeul');
    var seaTacAtotal = document.getElementById('firstandpiketotal');
    //calling the methods in the object literal
    this.cookiesHour();
    //create a variable to be able to append item to our list
    //create a new h3 element
    var h3El = document.createElement('h3');
    // give text to the new h3 element
    h3El.textContent = this.name;
    firstandpikeul.appendChild(h3El);
    for(var k = 0; k < hours.length; k++) {
      //stepping through hours array
      var liEl = document.createElement('li');
      //creating li elements with text of the hours
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldArray[k] + ' cookies';
      console.log(this.cookiesSoldArray[k]);
      firstandpikeul.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Total : ' + this.totalCookies() + ' cookies';
    seaTacAirportul.appendChild(liEl);
  }
};
seaTacAirport.render();

var seattleCenter = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  cookiesSoldArray: [],
  //added this in during demo
  randomCust: function(){
    var avgCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    return avgCust;
  },
  cookiesHour: function(){
    for (var i = 0; i < 15; i++) {
      this.cookiesSoldArray.push(Math.round(this.randomCust() * this.avgCookies))
      ;
    }
  },
  totalCookies: function() {
    var total = 0;
    for (var i = 0; i < this.cookiesSoldArray.length; i++) {
      total += this.cookiesSoldArray[i];
    }
    return total;
  },
  render: function() {
    var seattleCenterh3 = document.getElementById('firstandpikeh3');
    var seattleCenterul = document.getElementById('firstandpikeul');
    //calling the methods in the object literal
    this.cookiesHour();
    //create a variable to be able to append item to our list
    //create a new h3 element
    var h3El = document.createElement('h3');
    // give text to the new h3 element
    h3El.textContent = this.name;
    seattleCenterul.appendChild(h3El);
    for(var k = 0; k < hours.length; k++) {
      //stepping through hours array
      var liEl = document.createElement('li');
      //creating li elements with text of the hours
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldArray[k] + ' cookies';
      console.log(this.cookiesSoldArray[k]);
      seattleCenterul.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Total : ' + this.totalCookies() + ' cookies';
    seattleCenterul.appendChild(liEl);
  }
};
seattleCenter.render();

var capitolHill = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  cookiesSoldArray: [],
  //added this in during demo
  randomCust: function(){
    var avgCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    return avgCust;
  },
  cookiesHour: function(){
    for (var i = 0; i < 15; i++) {
      this.cookiesSoldArray.push(Math.round(this.randomCust() * this.avgCookies))
      ;
    }
  },
  totalCookies: function() {
    var total = 0;
    for (var i = 0; i < this.cookiesSoldArray.length; i++) {
      total += this.cookiesSoldArray[i];
    }
    return total;
  },
  render: function() {
    var capitolHillh3 = document.getElementById('firstandpikeh3');
    var capitolHillul = document.getElementById('firstandpikeul');
    //calling the methods in the object literal
    this.cookiesHour();
    //create a variable to be able to append item to our list
    //create a new h3 element
    var h3El = document.createElement('h3');
    // give text to the new h3 element
    h3El.textContent = this.name;
    capitolHillul.appendChild(h3El);
    for(var k = 0; k < hours.length; k++) {
      //stepping through hours array
      var liEl = document.createElement('li');
      //creating li elements with text of the hours
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldArray[k] + ' cookies';
      console.log(this.cookiesSoldArray[k]);
      capitolHillul.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Total : ' + this.totalCookies() + ' cookies';
    capitolHillul.appendChild(liEl);
  }
};
capitolHill.render();

var alki = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  cookiesSoldArray: [],
  //added this in during demo
  randomCust: function(){
    var avgCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    return avgCust;
  },
  cookiesHour: function(){
    for (var i = 0; i < 15; i++) {
      this.cookiesSoldArray.push(Math.round(this.randomCust() * this.avgCookies))
      ;
    }
  },
  totalCookies: function() {
    var total = 0;
    for (var i = 0; i < this.cookiesSoldArray.length; i++) {
      total += this.cookiesSoldArray[i];
    }
    return total;
  },
  render: function() {
    var alkih3 = document.getElementById('firstandpikeh3');
    var alkiul = document.getElementById('firstandpikeul');
    //calling the methods in the object literal
    this.cookiesHour();
    //create a variable to be able to append item to our list
    //create a new h3 element
    var h3El = document.createElement('h3');
    // give text to the new h3 element
    h3El.textContent = this.name;
    alkiul.appendChild(h3El);
    for(var k = 0; k < hours.length; k++) {
      //stepping through hours array
      var liEl = document.createElement('li');
      //creating li elements with text of the hours
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldArray[k] + ' cookies';
      console.log(this.cookiesSoldArray[k]);
      alkiul.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Total : ' + this.totalCookies() + ' cookies';
    alkiul.appendChild(liEl);
  }
};
alki.render();
