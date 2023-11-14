<template>
    <div class="testimonials-slider w-full">
        <div class="slider bg-white px-7 py-6 w-full overflow-hidden relative">
            <div v-for="(slide, index) in slides" class="slider__elem" :key="index" :class="{ 'slide-active': index === currentSlide }">
                <div class="slide-content flex justify-between items-center h-full mb-4">
                    <div class="slide-text">
                        <h3 class="font-medium pb-2 text-base ">{{ slide.title }}, {{ slide.position }}</h3>
                        <p>{{ slide.text }}</p>
                    </div>
                </div>
                <div class="flex justify-between items-center">
                    <div class="slide-number">{{ index + 1 }}/{{ slides.length }}</div>
                    <div class="arrows flex justify-between items-center">
                        <button class="border-2 border-slate-500 rounded-full mr-3" @click="prevSlide" :disabled="currentSlide === 0">←</button>
                        <button class="border-2 border-slate-500 rounded-full"  @click="nextSlide" :disabled="currentSlide === slides.length - 1">→</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        slides: [
            { title: 'Alexandre', position: 'Designer UX/UI', text: 'CSS Theme a considérablement simplifié notre processus de design. En tant que designer, j\'apprécie la facilité avec laquelle je peux personnaliser les thèmes pour correspondre à la vision créative de nos clients. Cela a vraiment accéléré notre flux de travail et amélioré la cohérence visuelle de nos projets.' },
            { title: 'Sophie', position: 'éveloppeuse Front-End', text: 'CSS-THEME est devenu un incontournable dans mon arsenal d\'outils. La flexibilité offerte pour personnaliser les thèmes, couplée à l\'adaptation transparente avec des frameworks comme Tailwind et Bootstrap, fait de CSS Theme un choix formidable pour accélérer le développement tout en offrant une personnalisation approfondie.' },
            { title: 'Marc', position: 'Développeur Full-Stack', text: 'CSS-THEME a considérablement réduit le temps que je consacre à la stylisation des composants. La possibilité de sélectionner des thèmes prédéfinis ou de créer des thèmes personnalisés en quelques lignes de code est un énorme avantage.' },
            // Ajoutez d'autres slides au besoin
        ],
        currentSlide: 0,
        };
    },
    methods: {
        nextSlide() {
        this.currentSlide = Math.min(this.currentSlide + 1, this.slides.length - 1);
        },
        prevSlide() {
        this.currentSlide = Math.max(this.currentSlide - 1, 0);
        },
    },
};
</script>

<style scoped>
.slider__elem {
transition: opacity 3s ease-in-out;
}

.slider__elem:not(.slide-active){
    display: none;
    opacity: 0;
}

.slide-active {
opacity: 1;
}

.slide-number {
font-size: 14px;
}

.arrows button {
font-size: 20px;
width: 35px;
height: 35px;
cursor: pointer;
outline: none;
padding: 0px 5px;
transition: color 0.3s ease-in-out;
}

.arrows button:disabled {
color: #ccc;
border-color: #ccc;
}

</style>