const form = document.getElementsByTagName('form')[0];
form.addEventListener('submit',() => {
    event.preventDefault();
    for(const formEl of event.target.elements){
        if(formEl.tagName === 'INPUT'){
            if(formEl.value.length === 0){
                formEl.parentElement.children[2].classList.remove('hide');
                formEl.parentElement.children[1].classList.remove('hide');
                formEl.classList.add('input-err');
            }else{
                formEl.parentElement.children[2].classList.add('hide');
                formEl.parentElement.children[1].classList.add('hide');
                formEl.classList.remove('input-err');
            }       
        }
    }
    if(validateEmail(event.target.elements.email.value)){
        event.target.elements.email.parentElement.children[2].classList.add('hide');
        event.target.elements.email.parentElement.children[1].classList.add('hide');
        event.target.elements.email.classList.remove('input-err');
    }else{
        event.target.elements.email.parentElement.children[2].classList.remove('hide');
        event.target.elements.email.parentElement.children[1].classList.remove('hide');
        event.target.elements.email.classList.add('input-err');
    }
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};