'use strict';

(function () {
  const commentForm = document.querySelector('[comments-form]');
  commentForm.addEventListener('submit', handleSubmit);

  const commentList = document.querySelector('[comments-list]');

  function validateForm(e) {
    const fName = e.target.elements.fName.value;
    const lName = e.target.elements.lName.value;
    const message = e.target.elements.message.value;
    let formValid = true;
    if (fName == null || fName == '' || fName.length <= 2) {
      e.target.elements.fName.classList.add('redborder');
      setTimeout(function () {
        e.target.elements.fName.classList.remove('redborder');
      }, 3000);
      formValid = false;
    }
    if (lName == null || lName == '' || lName.length <= 2) {
      e.target.elements.lName.classList.add('redborder');
      setTimeout(function () {
        e.target.elements.lName.classList.remove('redborder');
      }, 3000);
      formValid = false;
    }
    if (message == null || message == '' || message.length <= 2) {
      e.target.elements.message.classList.add('redborder');
      setTimeout(function () {
        e.target.elements.message.classList.remove('redborder');
      }, 3000);
      formValid = false;
    }

    return formValid;
  }
  function deleteDiv() {
    const commentList = document.querySelector('[comments-list]');
    commentList.innerHTML = '';
  }
  function handleSubmit(e) {
    e.preventDefault();

    const fName = e.target.elements.fName;
    const lName = e.target.elements.lName;
    const message = e.target.elements.message;
    const gender = e.target.elements.gender;

    fName.classList.remove('redborder');
    lName.classList.remove('redborder');
    message.classList.remove('redborder');

    if (validateForm(e) == false) {
      return;
    }
    console.log(fName.value, lName.value + '; ' + gender.value + '; ' + message.value);

    const commentEl = document.createElement('article');
    const avatarEl = document.createElement('img');
    const deleteEl = document.createElement('span');

    avatarEl.setAttribute('src', 'images/validation-mark.png');
    avatarEl.alt = `Image`;
    avatarEl.className = 'comment-avatar';
    deleteEl.classList.add('deleteElement');
    deleteEl.innerHTML = 'X';
    deleteEl.onclick = deleteDiv;
    commentEl.appendChild(avatarEl);
    commentEl.append(' Thank you for contacting us, ' + fName.value);
    commentEl.appendChild(deleteEl);
    setTimeout(deleteDiv, 7000);

    commentList.innerHTML = '';

    commentList.append(commentEl);

    e.target.reset();
  }
})();
