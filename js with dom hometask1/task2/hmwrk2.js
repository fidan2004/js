
const link = documeNt.querySelectorAll('.link');
const ulInput1 = document.querySelectorAll(".first");
const ulInput2 = document.querySelectorAll(".third");
const click = document.getElementsByClassName('click');

function ChangingFirstLastElements()
{
    ulInput1.forEach(element => {
        element.textContent = "First"

    
    });
    ulInput2.forEach(element2 => {
        element2.textContent = "Last"
        
    });

}
click.addEventListener('click',ChangingFirstLastElements);

