// store/index.ts
import {defineStore} from 'pinia';

export const useStore = defineStore('store', {
    state: () => ({
        theme: 'monochromatic'
    }),
    actions: {
        setTheme(name) {
            this.theme = name
        },
    }
});
