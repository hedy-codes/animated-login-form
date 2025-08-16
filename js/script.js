const signinbtnLink = document.querySelector('.signinbtn-link');
const signupbtnLink = document.querySelector('.signupbtn-link');
const wrapper = document.querySelector('.wrapper');

signupbtnLink.addEventListener('click' , () => {

    wrapper.classList.toggle('active');

});


signinbtnLink.addEventListener('click' , () => {

    wrapper.classList.toggle('active');
    
});
