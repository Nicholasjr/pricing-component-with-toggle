document.getElementById('check').addEventListener('change', function() {
    let checkBox = document.getElementById('check')
    if (checkBox.checked === true) {
        let monthly = document.querySelectorAll('.monthly')
        let annually = document.querySelectorAll('.annually')
        for (let i=0; i<annually.length; i++) {
            annually[i].className = 'price annually-hidden';
            monthly[i].className = 'price monthly-visible';
          
        // alert(monthly[i].innerHTML)
        }
    } 
    else {
        monthly = document.querySelectorAll('.monthly-visible');
        annually = document.querySelectorAll('.annually-hidden');
        for (let i=0; i<monthly.length; i++) {
            monthly[i].className = 'price monthly'
            annually[i].className = 'price annually'
        }
    }
})