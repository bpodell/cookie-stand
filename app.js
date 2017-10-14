// 'use strict';
//
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Total',];
//
// var firstAndPike = {
//   name: 'First and Pike',
//   minCust: 23,
//   maxCust: 65,
//   avgCookies: 6.3,
//   cookiesSoldArray: [],
//   //added this in during demo
//   randomCust: function(){
//     var avgCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//     return avgCust;
//   },
//   cookiesHour: function(){
//     for (var i = 0; i < 15; i++) {
//       this.cookiesSoldArray.push(Math.round(this.randomCust() * this.avgCookies))
//       ;
//     }
//   },
//   totalCookies: function() {
//     var total = 0;
//     for (var i = 0; i < this.cookiesSoldArray.length; i++) {
//       total += this.cookiesSoldArray[i];
//     }
//     return total;
//   },
//   render: function() {
//     var firstandpikeh3 = document.getElementById('firstandpikeh3');
//     var firstandpikeul = document.getElementById('firstandpikeul');
//
//     //calling the methods in the object literal
//     this.cookiesHour();
//     //create a variable to be able to append item to our list
//     //create a new h3 element
//     var h3El = document.createElement('h3');
//     // give text to the new h3 element
//     h3El.textContent = this.name;
//     firstandpikeul.appendChild(h3El);
//     for(var k = 0; k < hours.length; k++) {
//       //stepping through hours array
//       var liEl = document.createElement('li');
//       //creating li elements with text of the hours
//       liEl.textContent = hours[k] + ': ' + this.cookiesSoldArray[k] + ' cookies';
//       console.log(this.cookiesSoldArray[k]);
//       firstandpikeul.appendChild(liEl);
//     }
//     var liEl = document.createElement('li');
//     liEl.textContent = 'Total : ' + this.totalCookies() + ' cookies';
//     firstandpikeul.appendChild(liEl);
//   }
// };
// firstAndPike.render();
//
// var seaTacAirport = {
//   name: 'SeaTac Airport',
//   minCust: 3,
//   maxCust: 24,
//   avgCookies: 1.2,
//   cookiesSoldArray: [],
//   //added this in during demo
//   randomCust: function(){
//     var avgCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//     return avgCust;
//   },
//   cookiesHour: function(){
//     for (var i = 0; i < 15; i++) {
//       this.cookiesSoldArray.push(Math.round(this.randomCust() * this.avgCookies))
//       ;
//     }
//   },
//   totalCookies: function() {
//     var total = 0;
//     for (var i = 0; i < this.cookiesSoldArray.length; i++) {
//       total += this.cookiesSoldArray[i];
//     }
//     return total;
//   },
//   render: function() {
//     var seaTacAirporth3 = document.getElementById('firstandpikeh3');
//     var seaTacAirportul = document.getElementById('firstandpikeul');
//     var seaTacAtotal = document.getElementById('firstandpiketotal');
//     //calling the methods in the object literal
//     this.cookiesHour();
//     //create a variable to be able to append item to our list
//     //create a new h3 element
//     var h3El = document.createElement('h3');
//     // give text to the new h3 element
//     h3El.textContent = this.name;
//     firstandpikeul.appendChild(h3El);
//     for(var k = 0; k < hours.length; k++) {
//       //stepping through hours array
//       var liEl = document.createElement('li');
//       //creating li elements with text of the hours
//       liEl.textContent = hours[k] + ': ' + this.cookiesSoldArray[k] + ' cookies';
//       console.log(this.cookiesSoldArray[k]);
//       firstandpikeul.appendChild(liEl);
//     }
//     var liEl = document.createElement('li');
//     liEl.textContent = 'Total : ' + this.totalCookies() + ' cookies';
//     seaTacAirportul.appendChild(liEl);
//   }
// };
// seaTacAirport.render();
//
// var seattleCenter = {
//   name: 'Seattle Center',
//   minCust: 11,
//   maxCust: 38,
//   avgCookies: 3.7,
//   cookiesSoldArray: [],
//   //added this in during demo
//   randomCust: function(){
//     var avgCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//     return avgCust;
//   },
//   cookiesHour: function(){
//     for (var i = 0; i < 15; i++) {
//       this.cookiesSoldArray.push(Math.round(this.randomCust() * this.avgCookies))
//       ;
//     }
//   },
//   totalCookies: function() {
//     var total = 0;
//     for (var i = 0; i < this.cookiesSoldArray.length; i++) {
//       total += this.cookiesSoldArray[i];
//     }
//     return total;
//   },
//   render: function() {
//     var seattleCenterh3 = document.getElementById('firstandpikeh3');
//     var seattleCenterul = document.getElementById('firstandpikeul');
//     //calling the methods in the object literal
//     this.cookiesHour();
//     //create a variable to be able to append item to our list
//     //create a new h3 element
//     var h3El = document.createElement('h3');
//     // give text to the new h3 element
//     h3El.textContent = this.name;
//     seattleCenterul.appendChild(h3El);
//     for(var k = 0; k < hours.length; k++) {
//       //stepping through hours array
//       var liEl = document.createElement('li');
//       //creating li elements with text of the hours
//       liEl.textContent = hours[k] + ': ' + this.cookiesSoldArray[k] + ' cookies';
//       console.log(this.cookiesSoldArray[k]);
//       seattleCenterul.appendChild(liEl);
//     }
//     var liEl = document.createElement('li');
//     liEl.textContent = 'Total : ' + this.totalCookies() + ' cookies';
//     seattleCenterul.appendChild(liEl);
//   }
// };
// seattleCenter.render();
//
// var capitolHill = {
//   name: 'Capitol Hill',
//   minCust: 20,
//   maxCust: 38,
//   avgCookies: 2.3,
//   cookiesSoldArray: [],
//   //added this in during demo
//   randomCust: function(){
//     var avgCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//     return avgCust;
//   },
//   cookiesHour: function(){
//     for (var i = 0; i < 15; i++) {
//       this.cookiesSoldArray.push(Math.round(this.randomCust() * this.avgCookies))
//       ;
//     }
//   },
//   totalCookies: function() {
//     var total = 0;
//     for (var i = 0; i < this.cookiesSoldArray.length; i++) {
//       total += this.cookiesSoldArray[i];
//     }
//     return total;
//   },
//   render: function() {
//     var capitolHillh3 = document.getElementById('firstandpikeh3');
//     var capitolHillul = document.getElementById('firstandpikeul');
//     //calling the methods in the object literal
//     this.cookiesHour();
//     //create a variable to be able to append item to our list
//     //create a new h3 element
//     var h3El = document.createElement('h3');
//     // give text to the new h3 element
//     h3El.textContent = this.name;
//     capitolHillul.appendChild(h3El);
//     for(var k = 0; k < hours.length; k++) {
//       //stepping through hours array
//       var liEl = document.createElement('li');
//       //creating li elements with text of the hours
//       liEl.textContent = hours[k] + ': ' + this.cookiesSoldArray[k] + ' cookies';
//       console.log(this.cookiesSoldArray[k]);
//       capitolHillul.appendChild(liEl);
//     }
//     var liEl = document.createElement('li');
//     liEl.textContent = 'Total : ' + this.totalCookies() + ' cookies';
//     capitolHillul.appendChild(liEl);
//   }
// };
// capitolHill.render();
//
// var alki = {
//   name: 'Alki',
//   minCust: 2,
//   maxCust: 16,
//   avgCookies: 4.6,
//   cookiesSoldArray: [],
//   //added this in during demo
//   randomCust: function(){
//     var avgCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//     return avgCust;
//   },
//   cookiesHour: function(){
//     for (var i = 0; i < 15; i++) {
//       this.cookiesSoldArray.push(Math.round(this.randomCust() * this.avgCookies))
//       ;
//     }
//   },
//   totalCookies: function() {
//     var total = 0;
//     for (var i = 0; i < this.cookiesSoldArray.length; i++) {
//       total += this.cookiesSoldArray[i];
//     }
//     return total;
//   },
//   render: function() {
//     var alkih3 = document.getElementById('firstandpikeh3');
//     var alkiul = document.getElementById('firstandpikeul');
//     this.cookiesHour();
//     var h3El = document.createElement('h3');
//     h3El.textContent = this.name;
//     alkiul.appendChild(h3El);
//     for(var k = 0; k < hours.length; k++) {
//       //stepping through hours array
//       var liEl = document.createElement('li');
//       //creating li elements with text of the hours
//       liEl.textContent = hours[k] + ': ' + this.cookiesSoldArray[k] + ' cookies';
//       console.log(this.cookiesSoldArray[k]);
//       alkiul.appendChild(liEl);
//     }
//     var liEl = document.createElement('li');
//     liEl.textContent = 'Total : ' + this.totalCookies() + ' cookies';
//     alkiul.appendChild(liEl);
//   }
// };
// alki.render();
var allLocations = [];
function MakeLocation(name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.cookiesSoldArray = [];
  allLocations.push(this);
  this.randomCust = function(){
    var avgCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    return avgCust;
  };
  this.cookiesHour = function(){
    for (var i = 0; i < 15; i++) {
      this.cookiesSoldArray.push(Math.round(this.randomCust() * this.avgCookies))
      ;
    }
  };
  this.totalCookies = function() {
    var total = 0;
    for (var i = 0; i < this.cookiesSoldArray.length; i++) {
      total += this.cookiesSoldArray[i];
    }
    return total;
  };
  this.randomCust();
  this.cookiesHour();
  this.totalCookies();
};
function makeStands() {
  new MakeLocation('First and Pike', 23, 65, 6.3);
  new MakeLocation('SeaTac Airport', 3, 24, 1.2);
  new MakeLocation('Seattle Center', 11, 38, 3.7);
  new MakeLocation('Captiol Hill', 20, 38, 2.3);
  new MakeLocation('Alki', 2, 16, 4.6);
};
makeStands();

var cookiestable = document.getElementById('cookiestable');

function makeHeaderRow() {
  var trEl = document.createElement('tr');
  for (var i = -1; i < hours.length; i++) {
    var thEl = document.createElement('th');
    if (i === -1) {
      thEl.textContent = '';
      trEl.appendChild(thEl);
    } else {
      thEl.textContent = hours[i];
      trEl.appendChild(thEl);}
  };
  cookiestable.appendChild(trEl);
}
makeHeaderRow();

function makeTableDataRow() {
  for (var i = 0; i < 5; i++) {
    var trEl = document.createElement('tr');
    for (var k = -1; k < 15; k++) {
      var tdEl = document.createElement('td');
      if (k === -1) {
        tdEl.textContent = allLocations[i].name;
        trEl.appendChild(tdEl);
      } else if (k === 14) {
        tdEl.textContent = allLocations[i].totalCookies();
        trEl.appendChild(tdEl);
      } else {
        tdEl.textContent = allLocations[i].cookiesSoldArray[k];
        trEl.appendChild(tdEl);}
    }
    cookiestable.appendChild(trEl);
  }
}
makeTableDataRow();

function makeTableFooter() {
  var trEl = document.createElement('tr');
  for (var i = -1; i < allLocations[0].cookiesSoldArray.length - 1; i++) {
    var sumTotal = 0;
    var tdEl = document.createElement('td');
    if (i === -1) {
      tdEl.textContent = 'Total';
    } else {
      for (var j = 0; j < allLocations.length; j++) {
        sumTotal += allLocations[j].cookiesSoldArray[i];
        console.log(sumTotal);}
      tdEl.textContent = sumTotal;}
    console.log(tdEl);
    console.log(trEl);
    trEl.appendChild(tdEl);
  }
  cookiestable.appendChild(trEl);
}

makeTableFooter();
