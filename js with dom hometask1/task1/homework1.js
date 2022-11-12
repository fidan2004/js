const from = document.getElementById("form");
const blogInput=document.getElementById('Blog');
const authorInput=document.getElementById('Author');
const numberInput=document.getElementById('Number');
const EmailInput=document.getElementById('Email');


const blogval = document.querySelector('.blog-validation');
const authorval = document.querySelector('.author-validation');
const numberval = document.querySelector('.number-validation');
const emailval = document.querySelector('.email-validation');

from.addEventListener('submit',function(e){
    e.preventDefault();
    if(authorInput.value==""){

        authorInput.classList.add('danger');
        authorInput.classList.remove('correct-input');
        authorval.classList.remove('disable');
    }
    else
    {
        blogInput.classList.remove('danger');
        blogInput.classList.add('correct-input');
        blogval.classList.add('disable');
    }
    if(numberInput.value=="")
    {
        numberInput.classList.add('danger');
        numberInput.classList.remove('correct-input');
        blogval.classList.remove('disable');
    }
    if(blogval.value.length<=2||blogval.value.length>=20)
    {
        blogInput.classList.add('danger');
        blogInput.classList.remove('correct-input');
        blogval.classList.remove('disable');
    }
    else
    {
        blogInput.classList.remove('danger');
        blogInput.classList.add('correct-input');
        blogval.classList.add('disable');
    }
})

