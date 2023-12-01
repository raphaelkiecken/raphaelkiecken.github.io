let currentContent;
let currentProfile = 0;
let baseProfileTextHeight;

function changeContent(id) {
  const content = document.getElementsByClassName('content');
  const profilePic = document.getElementsByClassName('profile-pic');
  const profileText = document.getElementsByClassName('profile-text');
  if (currentContent === id) return;
  if (currentContent === undefined) currentContent = id;
  content[currentContent].style.display = 'none';
  content[id].style.display = 'flex';
  currentContent = id;
  if (currentContent === 0) {
    currentProfile = 0;
    profilePic[currentProfile].style.opacity = '1';
    profileText[currentProfile].style.opacity = '1';
    profilePic[(currentProfile + 1) % 2].style.opacity = '0';
    profileText[(currentProfile + 1) % 2].style.opacity = '0';
    const profileTextContainer = document.getElementById('profile-text-container');
    baseProfileTextHeight = profileTextContainer.offsetHeight;
    profileTextContainer.style.height = baseProfileTextHeight + profileText[currentProfile].offsetHeight + 'px';
  }
}

function changeProfile() {
  const profileTextContainer = document.getElementById('profile-text-container');
  const profilePic = document.getElementsByClassName('profile-pic');
  const profileText = document.getElementsByClassName('profile-text');

  profilePic[currentProfile].style.opacity = '0';
  profileText[currentProfile].style.opacity = '0';

  currentProfile = (currentProfile + 1) % 2;

  profilePic[currentProfile].style.opacity = '1';
  profileText[currentProfile].style.opacity = '1';



  profileTextContainer.style.height = baseProfileTextHeight + profileText[currentProfile].offsetHeight + 'px';
}