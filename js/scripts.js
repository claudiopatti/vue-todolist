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
            // newDone : true,
            
        }
        },
        methods: {
            removeMission(i) {
                this.missions.splice(i, 1); // splice ti rimuove un elemento a partire dal primo numero che si da e il secondo elemento e per specificare quanti sono da rimuovere

            },
            addMission() {
                const clearNewText = this.newtext.trim(); // serve ad rimuovere spazi prima e dopo le parole o frasi da inserire

                if (clearNewText != '') {
                    this.missions.push({text : clearNewText ,  done : this.newDone})
                    console.log(this.missions);
                    this.newtext = '';
                    // this.newDone = '';
                }
            },
            changeBoolean (i) {
                if (this.missions[i].done == true) {
                    this.missions[i].done = false
                }
                else {
                    this.missions[i].done = true 
                }
                // console.log(this.missions)
            }
        }
    }).mount('#app')
