const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === ' ' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    }

    else if(weight === ' ' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`
    } else {
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        //show the result
        
        if (bmi < 18.6){
            results.innerHTML= `<span>${bmi}, which is Under Weight !</span>`;
        } else if (bmi > 18.5 && bmi < 25){
            results.innerHTML= `<span>${bmi}, which is in Normal Range !</span>`;
        } else {
            results.innerHTML= `<span>${bmi}, which is Overweigh !t</span>`;
        }
    }
});