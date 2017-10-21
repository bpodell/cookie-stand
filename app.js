'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var allLocations = [];
var cookiestable = document.getElementById('cookiestable');

function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = '';
  trEl.appendChild(thEl);
  for (var i = 0; i < hours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  var thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);
  cookiestable.appendChild(trEl);
};
makeHeaderRow();

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
    for (var i = 0; i < hours.length; i++) {
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
  this.render = function() {
    var cookiestable = document.getElementById('cookiestable');
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = this.name;
    trEl.appendChild(tdEl);
    for (var k = 0; k < hours.length; k++) {
      var tdEl = document.createElement('td');
      tdEl.textContent = this.cookiesSoldArray[k];
      trEl.appendChild(tdEl);
    }
    var tdEl = document.createElement('td');
    tdEl.textContent = this.totalCookies();
    trEl.appendChild(tdEl);
    cookiestable.appendChild(trEl);
  };
  this.render();
};
function makeStands() {
  new MakeLocation('First and Pike', 23, 65, 6.3);
  new MakeLocation('SeaTac Airport', 3, 24, 1.2);
  new MakeLocation('Seattle Center', 11, 38, 3.7);
  new MakeLocation('Capitol Hill', 20, 38, 2.3);
  new MakeLocation('Alki', 2, 16, 4.6);
};
makeStands();

function makeTableFooter() {
  var trEl = document.createElement('tr');
  trEl.id = 'tablefooter';
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Total';
  trEl.appendChild(tdEl);
  for (var i = 0; i < hours.length; i++) {
    var sumTotal = 0;
    var tdEl = document.createElement('td');
    for (var j = 0; j < allLocations.length; j++) {
      sumTotal += allLocations[j].cookiesSoldArray[i];
    }
    tdEl.textContent = sumTotal;
    trEl.appendChild(tdEl);
  }
  var totTotal = 0;
  for(var k = 0; k < allLocations.length; k ++) {
    totTotal += allLocations[k].totalCookies();
  }
  var tdEl = document.createElement('td');
  tdEl.textContent = totTotal;
  trEl.appendChild(tdEl);
  cookiestable.appendChild(trEl);
}

makeTableFooter();

var storeForm = document.getElementById('store-form');
function newLocationSubmit(event) {
  console.log(event);
  event.preventDefault();
  console.log(event.target.maxcust.value);
  if (!event.target.storename.value || !event.target.mincust.value || !event.target.maxcust.value || !event.target.avgcookies.value) {
    return alert('Fields cannot be empty!');
  }
  var storename = event.target.storename.value;
  var minimumCust = parseInt(event.target.mincust.value);
  var maximumCust = parseInt(event.target.maxcust.value);
  var averageCust = parseInt(event.target.avgcookies.value);
  for (var i = 0; i < allLocations.length; i++) {
    if (storename === allLocations[i].name) {
      document.getElementById('cookiestable').deleteRow(allLocations.length + 3);//deletes the footer
      document.getElementById('cookiestable').deleteRow(i + 3);//deletes the old object row
      allLocations.splice(i, 1);
      new MakeLocation(storename, minimumCust, maximumCust, averageCust);
      break;
    } else if (i === allLocations.length - 1){
      document.getElementById('cookiestable').deleteRow(allLocations.length + 3);
      new MakeLocation(storename, minimumCust, maximumCust, averageCust);
      break;
    }
  }
  event.target.storename.value = null;
  event.target.mincust.value = null;
  event.target.maxcust.value = null;
  event.target.avgcookies.value = null;
  makeTableFooter();
};

storeForm.addEventListener('submit', newLocationSubmit);
