// Validação do formulário de registro
document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio do formulário para validação

    const name = document.getElementById('name').value.trim();
    const birthdate = document.getElementById('birthdate').value;
    const email = document.getElementById('email').value.trim();
    const nif = document.getElementById('nif').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

    // Regex para verificar se o nome tem números
    const nameRegex = /^[^0-9]*$/;
    // Regex para validar o email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Mensagens de erro para cada campo
    let errors = [];

    // Validação do nome
    if (!name) {
        errors.push('O nome é obrigatório.');
    } else if (!nameRegex.test(name)) {
        errors.push('O nome não pode conter números.');
    }

    // Validação da data de nascimento
    if (!birthdate) {
        errors.push('A data de nascimento é obrigatória.');
    } else if (new Date(birthdate) > new Date()) {
        errors.push('A data de nascimento não pode ser futura.');
    }

    // Validação do email
    if (!email) {
        errors.push('O email é obrigatório.');
    } else if (!emailRegex.test(email)) {
        errors.push('O email precisa ser válido e conter um "@".');
    }

    // Validação do NIF
    if (!nif) {
        errors.push('O número de contribuinte é obrigatório.');
    } else if (nif.length < 9) {
        errors.push('O número de contribuinte deve ter pelo menos 9 caracteres.');
    }

    // Validação das senhas
    if (!password) {
        errors.push('A senha é obrigatória.');
    }
    if (password !== confirmPassword) {
        errors.push('As senhas não coincidem.');
    }

    // Exibe as mensagens de erro
    if (errors.length > 0) {
        alert(errors.join('\n')); // Mostra todas as mensagens de erro em um alerta
    } else {
        alert('Formulário enviado com sucesso!');
        // Redireciona para a página inicial
        window.location.href = 'pag_principal.html'; // Substitua pelo nome correto da página
    }
});
