// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){

    //Hide Results
    document.getElementById('results').style.display = 'none';
    //Show Results
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

// Calculate Results
function calculateResults(){
  console.log('Calculating...');
  // UI Vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  if(isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);

    //Hide Results
    document.getElementById('results').style.display = 'block';
    //Show Results
    document.getElementById('loading').style.display = 'none';

  } else {
    showError('Please check your numbers');
  }

}

// show error
function showError (error){

    //Hide Results
    document.getElementById('results').style.display = 'none';
    //Show Results
    document.getElementById('loading').style.display = 'none';

    //create a div
    const errorDiv = document.createElement('div');

    //Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //Add class
    errorDiv.className = 'alert alert-danger';

    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    //Insert error before heading
    card.insertBefore(errorDiv,heading);

    //Clear error after 3 sec
    setTimeout(clearError,3000);

}

//Clear Error

function clearError(){
    document.querySelector('.alert').remove();
}


// document.getElementById('loan-form').addEventListener('submit', calculateResults);

// // Calculate Results
// function calculateResults (e){
//     console.log('Calculating...');
//     // UI variables
//     const amount = document.getElementById('amount');
//     const interest = document.getElementById('interest');
//     const years = document.getElementById('year');
//     const monthlyPayment = document.getElementById('monthly-payment');
//     const totalPayment = document.getElementById('total-payment');
//     const totalInterest = document.getElementById('total-interst');

//     const principal = parseFloat(amount.value);
//     const calculatedInterest = parseFloat(interest.value) / 100 / 12;
//     const calculatedPayments = parseFloat(years.value) * 12;

//     // compute monthly payment
//     const x = Math.pow(1 + calculatedInterest, calculatedPayments);
//     const monthly = (principal*x*calculatedInterest)/(x-1);

//     if(isFinite(monthly)){
//         monthlyPayment.value = monthly.toFixed(2);
//         totalPayment.value = (monthly * calculatedPayments).toFixed(2);
//         totalInterest.value = ((monthly * calculatedPayments)- principal).toFixed(2);
//     } else {
//         console.log('please check number');
//     }
    
//     e.preventDefault();
// }