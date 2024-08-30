const { createApp } = Vue

    createApp({
        data() {
        return {
            missions: [
                {
                    text: 'fare Esercizi',
                    done: true
                },
                {
                    text: 'fare la spesa',
                    done: false
                },
                {
                    text: 'fare attività fisica',
                    done: true
                }
            ],
            
        }
        }
    }).mount('#app')
