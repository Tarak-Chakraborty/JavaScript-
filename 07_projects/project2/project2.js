const formStore = document.querySelector('form')

formStore.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    let bmi = (weight / ((height*height)/10000)).toFixed(2)

    if(height ==='' || height < 0 || isNaN(height)){
        results.innerHTML = `please give a valid height ${height}`;
    }else if (weight ==='' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`
    }else if(bmi < 18.6){
        results.innerHTML = `<span>${bmi}</span><br/> you are under weight `
    }else if(bmi > 24.9){
        results.innerHTML = `<span>${bmi}</span><br/> you are over weight `
    }else {
        //show the results
        results.innerHTML = `<span>${bmi}</span><br/> you are fit`
    }
   
})