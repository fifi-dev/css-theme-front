<template>
  <div class="terminal h-full relative">
    <div class="cicles h-fit flex z-30 w-full absolute">
      <div @click="toggleCode" class=" bg-red-500 h-3 w-3 rounded-full"></div>
      <div class=" bg-yellow-500 h-3 w-3 rounded-full mx-2"></div>
      <div class=" bg-green-600 h-3 w-3 rounded-full"></div>
    </div>
    <transition name="fade">
      <pre v-if="showCode" class="h-fit -mt-2 -mb-11 select-none z-20">
        <code class="h-fit">
          <span v-for="(line, index) in codeLines" class="flex line" :key="index" :class="lineClass(index)">
            <span class="arrow"> ➜ ~</span>
            <span>{{ line }}</span>
          </span>
        </code>
      </pre>
    </transition>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';

export default {
  data() {
    return {
      showCode: true,
      code: [
        "Last login: Wed Nov 17 16:59:13 on console",
        "npm install css-theme",
        "  + css-theme@1.0.0",
        "  updates 1 package and audited 232 packages in 3.544s",
        "  found 0 vulnerabilities",
        "css-theme list-themes",
        "? Choisis un thème :",
        "➤ C Monochromatic",
        "• Spider-man",
        "• Hunter X Hunter",
        "• Barbie",
        "npm run dev",
        "Local:   http://localhost:5173/",
      ],
    };
  },
  computed: {
    codeLines() {
      return this.code.map(line => line.trim());
    },
  },
  methods: {
    toggleCode() {
      this.showCode = !this.showCode;
    },
    lineClass(index) {
      if (this.isResponseLine(index)) {
        return 'response-line';
      }
      return 'code-line';
    },
    isResponseLine(index) {
      // Ajoutez ici la logique pour identifier les lignes de réponse du terminal
      return index === 0 || index === 2 || index === 3  || index === 4 || index === 6 || index === 7 || index === 8 || index === 9 || index === 10 || index === 12; // Exemple : supposons que la 6ème ligne soit une réponse
    },

    animateLines() {
      const codeLines = document.querySelectorAll('.code-line');
      codeLines.forEach((line, index) => {
        setTimeout(() => {
          this.typeLine(line);
        }, index * 300); // Délai entre chaque ligne
      });

      const responseLines = document.querySelectorAll('.response-line');
      responseLines.forEach((line, index) => {
        setTimeout(() => {
          this.fadeLine(line);
        }, index * 300); // Délai entre chaque ligne
      });
    },
    typeLine(lineElement) {
      // Effet de frappe pour code-line
      const text = lineElement.textContent || lineElement.innerText;
      lineElement.innerHTML = '';
      let index = 0;
      const typeInterval = setInterval(() => {
        lineElement.innerHTML += text.charAt(index);
        index++;
        if (index === text.length) {
          clearInterval(typeInterval);
        }
      }, 50); // Délai entre chaque caractère
    },
    fadeLine(lineElement) {
      // Effet de fade pour response-line
      lineElement.classList.add('appear');
    },
    typingLine(lineElement){
      lineElement.classList.add('typing');
    },
    animatecodeLines(){
      console.log('test');
      const codeLines = document.querySelectorAll('.line');
      codeLines.forEach((line, index) => {
        console.log('Line '+ line);
        console.log('Index '+ index);
        setTimeout(() => {
          if(line.classList.contains('code-line')){
            this.typingLine(line);
          }else{
            this.fadeLine(line);
          }
        }, index * 800); // Délai entre chaque ligne
      });
    }
  },
  mounted() {

  this.animatecodeLines();
    //this.animateLines(); // Appeler animateLines lorsque le composant est monté
  },
};
</script>

<style scoped>
/* Vos styles pour le terminal */
.terminal {
  background-color: #1E293B;
  color: #FFFFFF; /* Texte en blanc pour le contraste */
  padding: 20px;
  font-size: 12px;
  border-radius: 8px;
  font-family: 'Courier New', monospace; /* Police monospace pour le terminal */
}

/* Styles pour les flèches */
.arrow {
  display: inline-block;
  width: fit-content;
  text-align: right;
  margin-right: 10px;
  color: #6EE7B7; /* Couleur de la flèche */
}

/* Pas de flèche pour les réponses du terminal */
.response-line{
  padding: 0px 5px;

  display: none;
  opacity: 0;
}
.response-line:nth-child(2){
  padding-top: 8px !important;
}
.response-line .arrow {
  display: none;; /* Cacher la flèche pour les réponses du terminal */
}

.response-line.appear {
  opacity: 1;
  display: flex;
}
.code-line {
  margin: 8px 0px;
  display: none;
}

/* Effet de fade pour response-line */
.line {
  transition: opacity 0.5s ease; /* Transition de l'opacité */
}
/* Effet d'apparition pour response-line */

/* Animation de frappe pour chaque caractère */
.typing {
  overflow: hidden;
  animation: typing 3s ease-out;
  white-space: nowrap;
  display: flex;
}

.typing::after {
  content: '|';
  animation: blink 3s  ease-out;
  display: inline-block;
  width: 0;
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
