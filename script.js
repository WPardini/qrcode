  // Lógica do redirecionamento no seu script intermediário
// Este é apenas um exemplo simples para ilustração

// Verifica o tipo de dispositivo (Android, iOS, etc.)
function detectarSistemaOperacional() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android|windows/i.test(userAgent)) {
        return 'android';
    }

    if (/iPad|iPhone|iPod|mac/.test(userAgent) && !window.MSStream) {
        return 'ios';
    }

    return 'desconhecido';
}

// Redirecionamento com base no tipo de dispositivo
function redirecionar() {
    const sistemaOperacional = detectarSistemaOperacional();

    if (sistemaOperacional === 'android') {
        window.location.href = 'https://play.google.com/store/apps/details?id=br.com.zollie.prevident.beneficiarios';
    } else if (sistemaOperacional === 'ios') {
        window.location.href = 'https://apps.apple.com/br/app/prevident-benefici%C3%A1rios/id1458671502';
    } else {
        window.location.href = 'https://play.google.com/store/apps/details?id=br.com.zollie.prevident.beneficiarios';
    }
}

// Chama a função de redirecionamento
redirecionar();
