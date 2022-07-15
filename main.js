const featuresBtn = document.querySelector('.features-btn');
const featureMenu = document.querySelector('.feature-menu');
const companyBtn = document.querySelector('.company-btn');
const companyMenu = document.querySelector('.company-menu')
const featureCaret = document.querySelector('.arrow-img-1');
const companyCaret = document.querySelector('.arrow-img-2');

const hamburger = document.querySelector('.hamburger');
const featureBtnDiv = document.querySelector('.features-btn-div');
const companyBtnDiv = document.querySelector('.company-btn-div');
const careersBtn = document.querySelector('.careers');
const aboutBtn = document.querySelector('.about');
const loginBtn = document.querySelector('.login');
const registerBtn = document.querySelector('.register');
const mobileContainer = document.querySelector('.mobile-container')
const featuresBtnMob = document.querySelector('.features-btn-mob')
const featureMenuMob = document.querySelector('.feature-menu-mob')
const companyBtnMob = document.querySelector('.company-btn-mob')
const companyMenuMob = document.querySelector('.company-menu-mob');
const featureCaretMob = document.querySelector('.arrow-img-1-mob')
const companyCaretMob = document.querySelector('.arrow-img-2-mob')

  hamburger.addEventListener('click', e=>{
    document.querySelector('.mobile-nav').classList.add('show')
    document.querySelector('.mobile-menu').style.display = 'block'
  })
  document.querySelector('#close-Menu').addEventListener('click', e =>{
    document.querySelector('.mobile-nav').classList.remove('show')
    document.querySelector('.mobile-menu').style.display = 'none'
  })

featuresBtn.addEventListener('click',()=>{
    featureMenu.classList.toggle('hide');
    featureCaret.classList.toggle('rotate-arrow');
    companyMenu.classList.add('hide');
    companyCaret.classList.remove('rotate-arrow');
})

companyBtn.addEventListener('click',()=>{
    companyMenu.classList.toggle('hide');
    companyCaret.classList.toggle('rotate-arrow');
    featureMenu.classList.add('hide');
    featureCaret.classList.remove('rotate-arrow');
})

featuresBtnMob.addEventListener('click',()=>{
    featureMenuMob.classList.toggle('hide');
    featureCaretMob.classList.toggle('rotate-arrow');
    // companyMenuMob.classList.add('hide');
    // companyCaretMob.classList.remove('rotate-arrow');
})

companyBtnMob.addEventListener('click',()=>{
    companyMenuMob.classList.toggle('hide');
    companyCaretMob.classList.toggle('rotate-arrow');
    // featureMenuMob.classList.add('hide');
    // featureCaretMob.classList.remove('rotate-arrow');
})