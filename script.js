function showLinks() {
  const links = document.getElementById('links');
  links.classList.toggle('hidden');
}

function selectCategory(category, btn) {
  selectedCategory = category;
  // Remove a classe 'selected' de todos os botões de categoria
  document.querySelectorAll('.submit-btn').forEach(button => button.classList.remove('selected'));
  // Adiciona a classe 'selected' ao botão clicado
  btn.classList.add('selected');
  document.getElementById('btnNext1').disabled = false;
}


function selectActivity(activityFactor, btn) {
  selectedActivity = activityFactor;
  // Remove a classe 'selected' de todos os botões de atividade
  document.querySelectorAll('.submit-btn').forEach(button => button.classList.remove('selected'));
  // Adiciona a classe 'selected' ao botão clicado
  btn.classList.add('selected');
  document.getElementById('btnNext3').disabled = false;
}

