'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Total',];

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
  trEl.className = 'tablefooter';
  for (var i = -1; i <= allLocations[0].cookiesSoldArray.length - 1; i++) {
    var sumTotal = 0;
    var tdEl = document.createElement('td');
    if (i === -1) {
      tdEl.textContent = 'Total';
    } else if ( i === allLocations[0].cookiesSoldArray.length - 1) {
      var totTotal = 0;
      for(var k = 0; k < allLocations.length; k ++) {
        totTotal += allLocations[k].totalCookies();
      }
      tdEl.textContent = totTotal;
      console.log('the value ' + tdEl);
      trEl.appendChild(tdEl);
    }
    else {
      for (var j = 0; j < allLocations.length; j++) {
        sumTotal += allLocations[j].cookiesSoldArray[i];
        console.log(sumTotal);}
      tdEl.textContent = sumTotal;}
    console.log(i);
    console.log(tdEl);
    console.log(trEl);
    console.log(allLocations[0].cookiesSoldArray.length);
    trEl.appendChild(tdEl);
  }
  cookiestable.appendChild(trEl);
}

makeTableFooter();
