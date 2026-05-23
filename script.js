const inputs = document.querySelectorAll(
    'input[type="text"], input[type="email"]'
);

inputs.forEach(input => {

    input.addEventListener('input', () => {

        if(input.value.length > 0){

            input.style.borderColor = '#000';

        }else{

            input.style.borderColor = '#bdbdbd';

        }

    });

});
