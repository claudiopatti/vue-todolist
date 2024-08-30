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

            newtext : '',
            newDone : '',
            
        }
        },
        methods: {
            removeMission(i) {
                this.missions.splice(i, 1);

            },
            addMission() {
                this.missions.push({text : this.newtext ,  done : this.newDone})
                console.log(this.missions)
            }
        }
    }).mount('#app')
