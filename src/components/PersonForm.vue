<template>
  <div class="container">
    <form @submit.prevent="putPerson">
      <b-field label="First Name">
        <b-input v-model="person.first_name"></b-input>
      </b-field>
      <b-field label="Last Name">
        <b-input v-model="person.last_name"></b-input>
      </b-field>
      <b-field label="Address">
        <b-input v-model="person.address"></b-input>
      </b-field>
      <b-button tag="input"
                native-type="submit"
                value="Submit input" />
    </form>
  </div>
</template>
<script>

export default {
  name: "PersonForm",
  data() {
    return {
      person: {}
    }
  },
  props: {
    current: {
      type: Object,
      default: () => {
        return {
          first_name: null,
          last_name: null,
          address: null,
          location: {
            type: 'Point',
            coordinates: [128.6, 101.1]
          }
        }
      }
    }
  },
  methods: {
    putPerson: function(e){
      e.preventDefault();
      this.$emit('personEvent', this.person);
    }
  },
  mounted() {
    this.person = Object.assign({}, this.current)
  },
  watch: {
    current: {
      deep: true,
      handler(newVal) {
        this.person = Object.assign({}, newVal);
      }
    }
  }
}
</script>

<style scoped>

</style>
