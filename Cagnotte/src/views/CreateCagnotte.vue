<script>
export default {
  data() {
    return {
      cagnotte: {
        name: '',
        description: '',
        end_date: '',
        goal: ''
      }
    }
  },
  methods: {
    newCagnotte() {
      const data = {
      name: this.cagnotte.name,
      description: this.cagnotte.description,
      end_date: this.dateToDB(this.cagnotte.end_date), 
      goal: this.cagnotte.goal
    }

    // this.$api.post('/api/cagnottes', data)
    //   .then(response => {
    //     console.log('Cagnotte créée !', response.data)
    //   })
    //   .catch(error => {
    //     console.log('Erreur :', error)
    //   })
    }
  }
}
</script>

<template>
  <main>
    <h1>Crée une Cagnotte</h1>
    Nom <input v-focus v-model="cagnotte.name"></input>
    Description <input v-model="cagnotte.description"></input>
    Date de fin <input v-model="cagnotte.end_date"></input>
    Gain <input v-model="cagnotte.goal"></input><br>
    <button  @click="newCagnotte()" style="margin-top: 2%;">Crée la Cagnotte</button>
  </main>
</template>
