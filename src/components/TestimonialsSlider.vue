<template>
    <div class="testimonials-slider w-full">
    <div class="slider bg-white px-7 py-6 w-full overflow-hidden relative">
        <div v-for="(slide, index) in slides" :key="index" class="slider__elem" :class="{ 'slide-active': index === currentSlide }">
        <div class="slide-content flex justify-between items-center h-full mb-4">
            <div class="slide-text">
            <h3 class="font-medium pb-2 text-base ">{{ translate(slide.title) }}, {{ translate(slide.position) }}</h3>
            <p>{{ translate(slide.text) }}</p>
            </div>
        </div>
        <div class="flex justify-between items-center">
            <div class="slide-number">{{ index + 1 }}/{{ slides.length }}</div>
            <div class="arrows flex justify-between items-center">
            <button class="border-2 border-slate-500 rounded-full mr-3" @click="prevSlide" :disabled="currentSlide === 0">←</button>
            <button class="border-2 border-slate-500 rounded-full" @click="nextSlide" :disabled="currentSlide === slides.length - 1">→</button>
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
                { title: 'Alexandre', position: 'testimonies.slides.alexandre.position', text: 'testimonies.slides.alexandre.text' },
                { title: 'Sophie', position: 'testimonies.slides.sophie.position', text: 'testimonies.slides.sophie.text' },
                { title: 'Marc', position: 'testimonies.slides.sophie.position', text: 'testimonies.slides.marc.text' },
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
    translate(key) {
        return this.$t(key);
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