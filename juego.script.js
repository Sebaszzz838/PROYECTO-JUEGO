const questionsByCategory = {
    "Auditoría de Informática": [
         { question: "¿Qué es una auditoría de TI?", answers: { "Evaluación de sistemas": 10, "Revisión de seguridad": 8, "Análisis de riesgos": 7, "Verificación de controles": 6, "Auditoría de procesos": 5 } },
         { question: "¿Qué norma se usa en auditoría de TI?", answers: { "ISO 27001": 10, "COBIT": 8, "ISO 9001": 7, "NIST": 6, "PCI DSS": 5 } },
         { question: "¿Cuál es el objetivo principal de una auditoría de TI?", answers: { "Asegurar la integridad de los datos": 10, "Evaluar el cumplimiento normativo": 8, "Identificar vulnerabilidades": 7, "Mejorar la eficiencia operativa": 6, "Garantizar la continuidad del negocio": 5 } },
         { question: "¿Qué es un informe de auditoría?", answers: { "Documento que resume los hallazgos": 10, "Reporte de incidencias": 8, "Lista de recomendaciones": 7, "Resumen de riesgos identificados": 6, "Evaluación de controles": 5 } },
         { question: "¿Qué es un riesgo en auditoría de TI?", answers: { "Vulnerabilidad explotable": 10, "Fallo en el sistema": 8, "Pérdida de datos": 7, "Acceso no autorizado": 6, "Incumplimiento normativo": 5 } },
         { question: "¿Qué es un control interno en auditoría?", answers: { "Mecanismo para mitigar riesgos": 10, "Procedimiento de seguridad": 8, "Política de acceso": 7, "Monitorización de sistemas": 6, "Plan de contingencia": 5 } },
         { question: "¿Qué es una prueba de auditoría?", answers: { "Evaluación de controles": 10, "Verificación de procesos": 8, "Análisis de vulnerabilidades": 7, "Revisión de políticas": 6, "Simulación de incidentes": 5 } },
         { question: "¿Qué es un hallazgo en auditoría?", answers: { "Resultado de una prueba": 10, "Observación relevante": 8, "Debilidad identificada": 7, "Recomendación de mejora": 6, "No conformidad": 5 } },
         { question: "¿Qué es un plan de auditoría?", answers: { "Estrategia para la auditoría": 10, "Lista de tareas": 8, "Cronograma de actividades": 7, "Definición de alcance": 6, "Asignación de recursos": 5 } },
         { question: "¿Qué es un auditor de TI?", answers: { "Profesional que evalúa sistemas": 10, "Especialista en seguridad": 8, "Consultor de riesgos": 7, "Analista de cumplimiento": 6, "Experto en controles internos": 5 } }
     ],
     "Desarrollo de Aplicaciones Web": [
         { question: "¿Cuál es el lenguaje más usado en desarrollo web?", answers: { "JavaScript": 10, "Python": 8, "PHP": 7, "Ruby": 6, "Java": 5 } },
         { question: "¿Qué significa CSS?", answers: { "Cascading Style Sheets": 10, "Computer Style System": 5, "Colorful Style Sheets": 4, "Creative Style System": 3, "Coded Style Sheets": 2 } },
         { question: "¿Qué es HTML?", answers: { "Lenguaje de marcado": 10, "Lenguaje de programación": 5, "Herramienta de maquetación": 7, "Interfaz de usuario": 6, "Estándar de diseño": 4 } },
         { question: "¿Qué es un framework en desarrollo web?", answers: { "Conjunto de herramientas para desarrollo": 10, "Librería de funciones": 8, "Entorno de ejecución": 7, "Plantilla de diseño": 6, "Sistema de gestión de contenido": 5 } },
         { question: "¿Qué es React?", answers: { "Librería de JavaScript": 10, "Framework de JavaScript": 8, "Lenguaje de programación": 5, "Herramienta de backend": 6, "Sistema de gestión de estado": 7 } },
         { question: "¿Qué es un API?", answers: { "Interfaz de programación de aplicaciones": 10, "Protocolo de comunicación": 8, "Lenguaje de consulta": 7, "Herramienta de desarrollo": 6, "Sistema de autenticación": 5 } },
         { question: "¿Qué es un servidor web?", answers: { "Software que sirve páginas web": 10, "Hardware que almacena datos": 8, "Herramienta de desarrollo": 7, "Sistema operativo": 6, "Protocolo de red": 5 } },
         { question: "¿Qué es un dominio web?", answers: { "Dirección de un sitio web": 10, "Nombre de un servidor": 8, "Identificador de red": 7, "Protocolo de comunicación": 6, "Herramienta de desarrollo": 5 } },
         { question: "¿Qué es un hosting?", answers: { "Servicio de alojamiento web": 10, "Servicio de correo electrónico": 8, "Herramienta de desarrollo": 7, "Sistema de gestión de contenido": 6, "Protocolo de red": 5 } },
         { question: "¿Qué es un CMS?", answers: { "Sistema de gestión de contenidos": 10, "Sistema de gestión de bases de datos": 8, "Herramienta de desarrollo": 7, "Lenguaje de programación": 6, "Protocolo de red": 5 } }
     ],
     "Tópico de Redes de Datos": [
         { question: "¿Qué es una red de datos?", answers: { "Conjunto de dispositivos interconectados": 10, "Sistema de comunicación": 8, "Infraestructura de servidores": 7, "Protocolo de red": 6, "Herramienta de desarrollo": 5 } },
         { question: "¿Qué es un protocolo de red?", answers: { "Conjunto de reglas para la comunicación": 10, "Lenguaje de programación": 5, "Herramienta de seguridad": 7, "Sistema operativo": 6, "Estándar de diseño": 4 } },
         { question: "¿Qué es TCP/IP?", answers: { "Protocolo de comunicación": 10, "Lenguaje de programación": 5, "Herramienta de red": 7, "Sistema operativo": 6, "Estándar de diseño": 4 } },
         { question: "¿Qué es un router?", answers: { "Dispositivo que dirige tráfico de red": 10, "Dispositivo que almacena datos": 8, "Herramienta de seguridad": 7, "Sistema operativo": 6, "Protocolo de red": 5 } },
         { question: "¿Qué es una dirección IP?", answers: { "Identificador de un dispositivo en la red": 10, "Nombre de un servidor": 8, "Herramienta de desarrollo": 7, "Protocolo de red": 6, "Sistema operativo": 5 } },
         { question: "¿Qué es DNS?", answers: { "Sistema de nombres de dominio": 10, "Protocolo de seguridad": 8, "Herramienta de desarrollo": 7, "Sistema operativo": 6, "Lenguaje de programación": 5 } },
         { question: "¿Qué es una VLAN?", answers: { "Red virtual local": 10, "Red de área amplia": 8, "Herramienta de seguridad": 7, "Protocolo de red": 6, "Sistema operativo": 5 } },
         { question: "¿Qué es un firewall?", answers: { "Sistema de seguridad": 10, "Dispositivo de almacenamiento": 8, "Herramienta de desarrollo": 7, "Protocolo de red": 6, "Sistema operativo": 5 } },
         { question: "¿Qué es un switch?", answers: { "Dispositivo que conecta dispositivos en una red": 10, "Dispositivo que almacena datos": 8, "Herramienta de seguridad": 7, "Protocolo de red": 6, "Sistema operativo": 5 } },
         { question: "¿Qué es una red LAN?", answers: { "Red de área local": 10, "Red de área amplia": 8, "Herramienta de desarrollo": 7, "Protocolo de red": 6, "Sistema operativo": 5 } }
     ],
     "Fundamentos de Investigación": [
         { question: "¿Qué es una hipótesis?", answers: { "Suposición a comprobar": 10, "Conclusión de una investigación": 8, "Pregunta de investigación": 7, "Método de análisis": 6, "Herramienta de recolección de datos": 5 } },
         { question: "¿Qué es un marco teórico?", answers: { "Base conceptual de una investigación": 10, "Resumen de una investigación": 8, "Herramienta de análisis": 7, "Método de recolección de datos": 6, "Pregunta de investigación": 5 } },
         { question: "¿Qué es una variable en investigación?", answers: { "Elemento que puede cambiar": 10, "Constante en un experimento": 8, "Herramienta de análisis": 7, "Método de recolección de datos": 6, "Pregunta de investigación": 5 } },
         { question: "¿Qué es un método científico?", answers: { "Proceso para obtener conocimiento": 10, "Técnica de análisis": 8, "Herramienta de recolección de datos": 7, "Pregunta de investigación": 6, "Método de análisis": 5 } },
         { question: "¿Qué es una muestra en investigación?", answers: { "Subconjunto de una población": 10, "Conjunto de datos": 8, "Herramienta de análisis": 7, "Método de recolección de datos": 6, "Pregunta de investigación": 5 } },
         { question: "¿Qué es un cuestionario?", answers: { "Instrumento de recolección de datos": 10, "Lista de preguntas": 8, "Herramienta de análisis": 7, "Método de recolección de datos": 6, "Pregunta de investigación": 5 } },
         { question: "¿Qué es un análisis de datos?", answers: { "Proceso de interpretación de datos": 10, "Recolección de datos": 8, "Herramienta de análisis": 7, "Método de recolección de datos": 6, "Pregunta de investigación": 5 } },
         { question: "¿Qué es una conclusión en investigación?", answers: { "Resultado final de una investigación": 10, "Resumen de datos": 8, "Herramienta de análisis": 7, "Método de recolección de datos": 6, "Pregunta de investigación": 5 } },
         { question: "¿Qué es una revisión bibliográfica?", answers: { "Análisis de literatura existente": 10, "Resumen de un libro": 8, "Herramienta de análisis": 7, "Método de recolección de datos": 6, "Pregunta de investigación": 5 } },
         { question: "¿Qué es un objetivo de investigación?", answers: { "Propósito de una investigación": 10, "Pregunta de investigación": 8, "Herramienta de análisis": 7, "Método de recolección de datos": 6, "Resumen de datos": 5 } }
     ],
     "Fundamentos de Gestión de Servicios de TI": [
         { question: "¿Qué es ITIL?", answers: { "Marco de trabajo para la gestión de servicios de TI": 10, "Lenguaje de programación": 5, "Herramienta de desarrollo": 7, "Sistema operativo": 6, "Protocolo de red": 4 } },
         { question: "¿Qué es un SLA?", answers: { "Acuerdo de nivel de servicio": 10, "Contrato de servicio": 8, "Herramienta de desarrollo": 7, "Sistema operativo": 6, "Protocolo de red": 5 } },
         { question: "¿Qué es un incidente en TI?", answers: { "Interrupción no planificada": 10, "Fallo en el sistema": 8, "Herramienta de desarrollo": 7, "Sistema operativo": 6, "Protocolo de red": 5 } },
         { question: "¿Qué es un problema en TI?", answers: { "Causa de uno o más incidentes": 10, "Error en el software": 8, "Herramienta de desarrollo": 7, "Sistema operativo": 6, "Protocolo de red": 5 } },
         { question: "¿Qué es un cambio en TI?", answers: { "Modificación en un servicio": 10, "Actualización de software": 8, "Herramienta de desarrollo": 7, "Sistema operativo": 6, "Protocolo de red": 5 } },
         { question: "¿Qué es un CMDB?", answers: { "Base de datos de gestión de configuración": 10, "Base de datos de clientes": 8, "Herramienta de desarrollo": 7, "Sistema operativo": 6, "Protocolo de red": 5 } },
         { question: "¿Qué es un KPI en TI?", answers: { "Indicador clave de rendimiento": 10, "Medida de calidad": 8, "Herramienta de desarrollo": 7, "Sistema operativo": 6, "Protocolo de red": 5 } },
         { question: "¿Qué es un servicio de TI?", answers: { "Conjunto de actividades para entregar valor": 10, "Producto de software": 8, "Herramienta de desarrollo": 7, "Sistema operativo": 6, "Protocolo de red": 5 } },
         { question: "¿Qué es un catálogo de servicios?", answers: { "Lista de servicios ofrecidos": 10, "Lista de productos": 8, "Herramienta de desarrollo": 7, "Sistema operativo": 6, "Protocolo de red": 5 } },
         { question: "¿Qué es un proceso de gestión de servicios?", answers: { "Conjunto de actividades para gestionar servicios": 10, "Procedimiento de soporte": 8, "Herramienta de desarrollo": 7, "Sistema operativo": 6, "Protocolo de red": 5 } }
     ]
 };
 
 let currentIndex = 0;
 let scorePlayer1 = 0;
 let scorePlayer2 = 0;
 let currentCategory = "";
 let currentQuestions = [];
 let currentPlayer = null;
 let buzzerEnabled = true;
 let team1Name = "Equipo 1";
 let team2Name = "Equipo 2";
 
 function showInstructions() {
     document.querySelector('.cover-container').style.display = 'none';
     document.querySelector('.instructions-container').style.display = 'block';
 }
 
 function showTeamNamesInput() {
     document.querySelector('.instructions-container').style.display = 'none';
     document.querySelector('.team-names-container').style.display = 'block';
 }
 
 function saveTeamNames() {
     team1Name = document.getElementById("team1").value || "Equipo 1";
     team2Name = document.getElementById("team2").value || "Equipo 2";
     document.querySelector('.team-names-container').style.display = 'none';
     document.querySelector('.categories-container').style.display = 'block';
     updateTeamNames();
 }
 
 function updateTeamNames() {
     document.getElementById("team1Name").textContent = team1Name;
     document.getElementById("team2Name").textContent = team2Name;
     document.getElementById("finalTeam1Name").textContent = team1Name;
     document.getElementById("finalTeam2Name").textContent = team2Name;
 }
 
 function startGame(category) {
     currentCategory = category;
     currentQuestions = questionsByCategory[category] || [];
     document.querySelector('.categories-container').style.display = 'none';
     document.querySelector('.loading-container').style.display = 'block';
     document.getElementById("loadingCategory").textContent = category;
     startCountdown();
 }
 
 function startRandomGame() {
     const categories = Object.keys(questionsByCategory);
     const randomCategory = categories[Math.floor(Math.random() * categories.length)];
     startGame(randomCategory);
 }
 
 function startCountdown() {
     const loadingMessage = document.getElementById("loadingMessage");
     loadingMessage.textContent = "Preparando preguntas...";
     setTimeout(() => {
         loadingMessage.textContent = "Preparados...";
         setTimeout(() => {
             loadingMessage.textContent = "3...";
             setTimeout(() => {
                 loadingMessage.textContent = "2...";
                 setTimeout(() => {
                     loadingMessage.textContent = "1...";
                     setTimeout(() => {
                         loadingMessage.textContent = "¡YA!";
                         setTimeout(() => {
                             document.querySelector('.loading-container').style.display = 'none';
                             document.querySelector('.game-container').style.display = 'block';
                             nextQuestion();
                         }, 1000);
                     }, 1000);
                 }, 1000);
             }, 1000);
         }, 1000);
     }, 1000);
 }
 
 let timer; // Variable para almacenar el intervalo del cronómetro
let timeLeft = 20; // Tiempo inicial en segundos

function startTimer() {
    // Limpiar el intervalo anterior (si existe)
    clearInterval(timer);

    // Reiniciar el tiempo
    timeLeft = 20;
    document.getElementById("timer").textContent = timeLeft;

    // Iniciar el cronómetro
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = timeLeft;

        // Si el tiempo se acaba
        if (timeLeft <= 0) {
            clearInterval(timer); // Detener el cronómetro
            handleTimeUp(); // Manejar el fin del tiempo
        }
    }, 1000); // Actualizar cada segundo (1000 ms)
}

function handleTimeUp() {
    // Mostrar el mensaje "¡TIEMPO!"
    alert("¡TIEMPO!");

    // Pasar directamente a la pantalla de fin de juego
    endGame();
}

function nextQuestion() {
    if (currentIndex < currentQuestions.length) {
        document.querySelector('.reveal-container').style.display = 'none';
        document.querySelector('.result-container').style.display = 'none';
        document.querySelector('.game-container').style.display = 'block';

        const q = currentQuestions[currentIndex];
        document.getElementById("question").textContent = q.question;
        document.getElementById("userAnswer").value = "";
        document.getElementById("userAnswer").disabled = true;
        document.querySelector("button[onclick='checkAnswer()']").disabled = true;

        let hiddenBoard = document.getElementById("hiddenBoard");
        hiddenBoard.innerHTML = "";
        for (let i = 0; i < Object.keys(q.answers).length; i++) {
            let li = document.createElement("li");
            li.textContent = "???????";
            hiddenBoard.appendChild(li);
        }

        currentIndex++;
        buzzerEnabled = true;
        currentPlayer = null;

        // Iniciar el cronómetro para la nueva pregunta
        startTimer();
    } else {
        endGame(); // Llamar a la función de fin de juego
    }
}

// Función para mostrar las mejores puntuaciones
function showHighScores() {
    document.querySelector('.cover-container').style.display = 'none';
    document.querySelector('.high-scores-container').style.display = 'block';
    displayHighScores();
}

// Función para volver al menú principal
function goBackToMenu() {
    document.querySelector('.high-scores-container').style.display = 'none';
    document.querySelector('.cover-container').style.display = 'block';
}

function saveHighScores(team1Name, team2Name, scorePlayer1, scorePlayer2) {
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    
    // Determinar el equipo ganador
    let winner;
    if (scorePlayer1 > scorePlayer2) {
        winner = { teamName: team1Name, score: scorePlayer1 };
    } else if (scorePlayer2 > scorePlayer1) {
        winner = { teamName: team2Name, score: scorePlayer2 };
    } else {
        // En caso de empate, no se guarda ningún equipo
        return;
    }

    // Agregar la puntuación del equipo ganador
    highScores.push(winner);

    // Ordenar las puntuaciones por la puntuación del equipo
    highScores.sort((a, b) => b.score - a.score);

    // Mantener solo las 3 mejores puntuaciones
    if (highScores.length > 3) {
        highScores.splice(3);
    }

    // Guardar en localStorage
    localStorage.setItem('highScores', JSON.stringify(highScores));
}


// Función para mostrar las mejores puntuaciones
function displayHighScores() {
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    const highScoresList = document.getElementById('highScoresList');
    highScoresList.innerHTML = '';

    highScores.forEach((score, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${score.team1Name}: ${score.scorePlayer1} puntos | ${score.team2Name}: ${score.scorePlayer2} puntos`;
        highScoresList.appendChild(li);
    });
}

// Llamar a saveHighScores al finalizar el juego
function endGame() {
    saveHighScores(team1Name, team2Name, scorePlayer1, scorePlayer2);

    document.querySelector('.reveal-container').style.display = 'none';
    document.querySelector('.result-container').style.display = 'none';
    document.querySelector('.game-container').style.display = 'none';

    // Mostrar el contenedor de fin de juego
    const finalContainer = document.querySelector('.final-container');
    finalContainer.style.display = 'block';

    // Determinar el equipo ganador
    let winnerMessage = "";
    if (scorePlayer1 > scorePlayer2) {
        winnerMessage = `¡Equipo ganador: ${team1Name}! FELICIDADES!`;
    } else if (scorePlayer2 > scorePlayer1) {
        winnerMessage = `¡Equipo ganador: ${team2Name}! FELICIDADES!`;
    } else {
        winnerMessage = "¡Empate! Ambos equipos han obtenido la misma puntuación.";
    }

    // Mostrar el mensaje del equipo ganador
    document.getElementById("winnerMessage").textContent = winnerMessage;

    // Mostrar los puntajes finales
    document.getElementById("finalTeam1Name").textContent = team1Name;
    document.getElementById("finalTeam2Name").textContent = team2Name;
    document.getElementById("finalScorePlayer1").textContent = scorePlayer1;
    document.getElementById("finalScorePlayer2").textContent = scorePlayer2;
}

 document.addEventListener('keydown', (event) => {
     if (buzzerEnabled) {
         if (event.key === 'a' || event.key === 'A') {
             currentPlayer = 1;
             enableAnswerInput();
         } else if (event.key === 'l' || event.key === 'L') {
             currentPlayer = 2;
             enableAnswerInput();
         }
     }
 });
 
 function enableAnswerInput() {
     buzzerEnabled = false;
     document.getElementById("userAnswer").disabled = false;
     document.querySelector("button[onclick='checkAnswer()']").disabled = false;
     document.getElementById("userAnswer").focus();
 }
 
 function checkAnswer() {
    const userAnswer = document.getElementById("userAnswer").value.trim();
    const q = currentQuestions[currentIndex - 1];
    const answers = q.answers;

    if (answers[userAnswer]) {
        clearInterval(timer); // Detener el cronómetro

        if (currentPlayer === 1) {
            scorePlayer1 += answers[userAnswer];
            document.getElementById("scorePlayer1").textContent = scorePlayer1;
        } else if (currentPlayer === 2) {
            scorePlayer2 += answers[userAnswer];
            document.getElementById("scorePlayer2").textContent = scorePlayer2;
        }

        document.getElementById("responseMessage").textContent = `La respuesta del ${currentPlayer === 1 ? team1Name : team2Name} fue: ${userAnswer}`;
        document.querySelector('.response-container').style.display = 'block';
        document.querySelector('.game-container').style.display = 'none';

        setTimeout(() => {
            document.querySelector('.response-container').style.display = 'none';
            document.querySelector('.result-container').style.display = 'block';
            document.getElementById("finalScorePlayer1").textContent = scorePlayer1;
            document.getElementById("finalScorePlayer2").textContent = scorePlayer2;
            document.getElementById("resultMessage").textContent = `¡Correcto! ${currentPlayer === 1 ? team1Name : team2Name} ganó ${answers[userAnswer]} puntos.`;
        }, 2000);
    } else {
        document.getElementById("responseMessage").textContent = `La respuesta del ${currentPlayer === 1 ? team1Name : team2Name} fue: ${userAnswer}`;
        document.querySelector('.response-container').style.display = 'block';
        document.querySelector('.game-container').style.display = 'none';

        setTimeout(() => {
            document.querySelector('.response-container').style.display = 'none';
            document.querySelector('.result-container').style.display = 'block';
            document.getElementById("finalScorePlayer1").textContent = scorePlayer1;
            document.getElementById("finalScorePlayer2").textContent = scorePlayer2;
            document.getElementById("resultMessage").textContent = "Incorrecto. La respuesta no está en el tablero.";
        }, 2000);
    }
}
 
 function revealAnswers() {
     const q = currentQuestions[currentIndex - 1];
     const answers = q.answers;
     let revealedBoard = document.getElementById("revealedBoard");
     revealedBoard.innerHTML = "";
     for (let answer in answers) {
         let li = document.createElement("li");
         li.textContent = answer + " (" + answers[answer] + " puntos)";
         revealedBoard.appendChild(li);
     }
 
     // Cambiar el texto del botón si es la última pregunta
     const nextButton = document.getElementById("nextButton");
     if (currentIndex === currentQuestions.length) {
         nextButton.textContent = "Siguiente";
     } else {
         nextButton.textContent = "Siguiente Pregunta";
     }
 
     document.querySelector('.result-container').style.display = 'none';
     document.querySelector('.reveal-container').style.display = 'block';
 }
 
 function resetGame() {
    currentIndex = 0;
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    document.querySelector('.reveal-container').style.display = 'none';
    document.querySelector('.result-container').style.display = 'none';
    document.querySelector('.game-container').style.display = 'none';
    document.querySelector('.final-container').style.display = 'none';
    document.querySelector('.cover-container').style.display = 'block';

    // Reiniciar el cronómetro
    clearInterval(timer);
    document.getElementById("timer").textContent = "20";

    // Actualizar los puntajes en la pantalla de juego
    document.getElementById("scorePlayer1").textContent = scorePlayer1;
    document.getElementById("scorePlayer2").textContent = scorePlayer2;
}

// Obtén el elemento de audio y el botón de música
const musicaFondo = document.getElementById("musica-fondo");
const botonMusica = document.getElementById("boton-musica");

// Función para pausar/reanudar la música
function toggleMusica() {
    if (musicaFondo.paused) {
        musicaFondo.play(); // Reproducir la música
        botonMusica.textContent = "🔊"; // Cambiar el ícono a "sonido activado"
    } else {
        musicaFondo.pause(); // Pausar la música
        botonMusica.textContent = "🔇"; // Cambiar el ícono a "sonido desactivado"
    }
}

// Reproducir la música automáticamente al cargar la página
musicaFondo.play();