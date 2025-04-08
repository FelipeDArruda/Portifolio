function showDetails(detailId) {
    // Esconde todos os detalhes
    document.querySelectorAll('.knowledge__detail').forEach(detail => {
      detail.classList.remove('active');
    });
    
    // Mostra o detalhe selecionado
    document.getElementById(detailId).classList.add('active');
  }
  
  // Mostra o primeiro detalhe por padrão
  document.addEventListener('DOMContentLoaded', function() {
    showDetails('html-details');
  });