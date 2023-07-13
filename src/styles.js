const styles = `

.loader {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: none;
  margin: 15px;
  position: absolute;
  color: #000000;
  box-sizing: border-box;
  animation: animloader 2s linear infinite;
}


@keyframes animloader {
  0% {
    box-shadow: 14px 0 0 -2px,  38px 0 0 -2px,  -14px 0 0 -2px,  -38px 0 0 -2px;
  }
  25% {
    box-shadow: 14px 0 0 -2px,  38px 0 0 -2px,  -14px 0 0 -2px,  -38px 0 0 2px;
  }
  50% {
    box-shadow: 14px 0 0 -2px,  38px 0 0 -2px,  -14px 0 0 2px,  -38px 0 0 -2px;
  }
  75% {
    box-shadow: 14px 0 0 2px,  38px 0 0 -2px,  -14px 0 0 -2px,  -38px 0 0 -2px;
  }
  100% {
    box-shadow: 14px 0 0 -2px,  38px 0 0 2px,  -14px 0 0 -2px,  -38px 0 0 -2px;
  }
}



  .error {
    display: none;
    /* Додайте стилі для елементу помилки */
  }

  .cat-info {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .cat-image {
    width: 350px;
    height: 250px;
    border-radius: 20px;
    object-fit: cover;
    margin-top: 30px;
  }

  .breed-name {
    /* Додайте стилі для назви породи */
  }

  .breed-description {
    /* Додайте стилі для опису породи */
  }

  .breed-temperament {
    /* Додайте стилі для темпераменту породи */
  }
`;

const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);
