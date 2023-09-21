function toggleScreens() {
    event.preventDefault()
    const screen1 = document.querySelector('.screen1');
    const screen2 = document.querySelector('.screen2');

    screen1.classList.toggle('hide');
    screen2.classList.toggle('hide');
  }

  // Adicionar um ouvinte de evento ao botão para alternar entre as telas
  const btnTry = document.getElementById('btnTry');
  const btnReset = document.getElementById('btnReset');

  btnTry.addEventListener('click', toggleScreens);
  btnReset.addEventListener('click', toggleScreens);