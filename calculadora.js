
let selectedCategory = '', selectedGender = '', selectedActivity = '', age, height, weight;

// Seleciona categoria e muda a cor do botão
function selectCategory(category, btn) {
    selectedCategory = category;
    // Remove a classe 'selected' de todos os botões de categoria
    document.querySelectorAll('button[name="category"]').forEach(button => button.classList.remove('selected'));
    // Adiciona a classe 'selected' ao botão clicado
    btn.classList.add('selected');
    document.getElementById('btnNext1').disabled = false;
}

// Habilita o botão de avançar na página 2
function enableNext2() {
    selectedGender = document.querySelector('input[name="gender"]:checked').value;
    age = parseInt(document.getElementById('age').value);
    height = parseInt(document.getElementById('height').value);
    weight = parseInt(document.getElementById('weight').value);
    document.getElementById('btnNext2').disabled = !(selectedGender && age && height && weight);
}

// Seleciona atividade e muda a cor do botão
function selectActivity(activityFactor, btn) {
    selectedActivity = activityFactor;
    // Remove a classe 'selected' de todos os botões de atividade
    document.querySelectorAll('button[name="activity"]').forEach(button => button.classList.remove('selected'));
    // Adiciona a classe 'selected' ao botão clicado
    btn.classList.add('selected');
    document.getElementById('btnNext3').disabled = false;
}

function updateSliderValue(sliderId, labelId) {
    document.getElementById(labelId).textContent = document.getElementById(sliderId).value;
}


function calculate() {
    let tmb, activityFactor = selectedActivity;

    // Verifica a categoria selecionada
    if (selectedCategory === 'underIdeal') { // Tinsley para "ATLETA-MUITO ATIVO"
        tmb = (24.8 * weight) + 10;
    } else if (selectedCategory === 'idealWeight') { // Harris-Benedict atualizado para "PRÓXIMO DO PESO IDEAL"
        if (selectedGender === 'male') {
            tmb = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
        } else {
            tmb = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
        }
    } else { // Mifflin-St Jeor para outras categorias
        if (selectedGender === 'male') {
            tmb = (10 * weight) + (6.25 * height) - (5 * age) + 5;
        } else {
            tmb = (10 * weight) + (6.25 * height) - (5 * age) - 161;
        }
    }

    let totalCalories = tmb * activityFactor;
    let proteinGoal = weight * 2;
    let caloriesToLose = totalCalories - 500;
    let caloriesToGain = totalCalories + 500;

    document.getElementById('result').innerHTML = `
<div class="result-item">
    <div class="icon"><img src="https://cdn-icons-png.freepik.com/256/11852/11852487.png?uid=R114948803&ga=GA1.1.1322107807.1730765371&semt=ais_hybrid" alt="Ícone TMB"></div>
    <div class="text"><strong>Taxa Metabólica Basal (TMB):</strong> ${tmb.toFixed(2)} kcal</div>
</div>
<div class="result-item">
    <div class="icon"><img src="https://cdn-icons-png.flaticon.com/512/2836/2836504.png" alt="Ícone Proteína"></div>
    <div class="text"><strong>Meta diária de proteínas:</strong> ${proteinGoal.toFixed(2)} g</div>
</div>
<div class="result-item">
    <div class="icon"><img src="https://cdn-icons-png.flaticon.com/512/11437/11437937.png" alt="Ícone Emagrecer"></div>
    <div class="text"><strong>Calorias para emagrecer:</strong> ${caloriesToLose.toFixed(2)} kcal</div>
</div>
<div class="result-item">
    <div class="icon"><img src="https://cdn-icons-png.flaticon.com/128/3491/3491798.png" alt="Ícone Manter Peso"></div>
    <div class="text"><strong>Gasto energético total / Manter peso:</strong> ${totalCalories.toFixed(2)} kcal</div>
</div>
<div class="result-item">
    <div class="icon"><img src="https://cdn-icons-png.flaticon.com/128/2788/2788935.png" alt="Ícone Hipertrofia"></div>
    <div class="text"><strong>Calorias para hipertrofia:</strong> ${caloriesToGain.toFixed(2)} kcal</div>
</div>
`;
    goToPage(4);
}


function goToPage(page) {
    document.querySelectorAll('.calculator > div').forEach(div => div.classList.add('hidden'));
    document.getElementById('page' + page).classList.remove('hidden');
}
