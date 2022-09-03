function calculateBMI() {
    let height = document.getElementById('h').value
    let weight = document.getElementById('w').value

    let bmi = (weight / (height * height) * 703)

        document.getElementById('heading').innerHTML = 'Your BMI is :'
        document.getElementById('bmi-output').innerHTML = bmi.toFixed(2)

        if (bmi <= 24.9) {
            document.getElementById('message').innerHTML = 'You are a healthy weight.'
        } else if (bmi >= 25 && bmi <= 29.9){
            document.getElementById('message').innerHTML = 'You are overweight.'
        } else if (bmi >= 29.9 && bmi <= 35){
            document.getElementById('message').innerHTML = 'You are obese.'
        }

        }

        function reload() {
            window.location.reload()
        }
