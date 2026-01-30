(function(){
  const overlay = document.getElementById('modalOverlay');
  const priv = document.getElementById('modal-privacidade');
  const termos = document.getElementById('modal-termos');

  function setActive(type){
    priv.classList.remove('active');
    termos.classList.remove('active');
    if(type === 'privacidade') priv.classList.add('active');
    if(type === 'termos') termos.classList.add('active');
  }

  window.openModal = function(type){
    overlay.classList.add('active');
    setActive(type);
  }

  window.closeModal = function(e){
    if(!e || e.target === overlay){
      overlay.classList.remove('active');
    }
  }

  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
      overlay.classList.remove('active');
    }
  });
})();