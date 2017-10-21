'use strict';

var orderForm = document.getElementById('store-form');
function newOrderSubmit(event) {
  event.preventDefault();
  if (!event.target.storename.value || !event.target.mincust.value || !event.target.maxcust.value || !event.target.avgcookies.value) {
    return alert('Fields cannot be empty!');
  }
  var customername = event.target.customername.value;
  var customeraddress = event.target.customeraddress.value;
  var customerpayment = event.target.customerpayment.value;
  var customerproduct = event.target.customerproduct.value;
  var customerquantity = event.target.customerquantity.value;
  var customerinstructions = event.target.customerinstructions.value;
  var hEl = document.getElementById('header');
  thEl.textContent = 'Customer Name : ' + customername;
  header.appendChild('thEl')
  var
  event.target.storename.value = null;
  event.target.mincust.value = null;
  event.target.maxcust.value = null;
  event.target.avgcookies.value = null;
  makeTableFooter();
};

storeForm.addEventListener('submit', newLocationSubmit);
