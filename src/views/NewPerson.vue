<template>
  <div class="section">
    <div class="container">
      <h1 class="title">NEW PERSON</h1>
      <h2 class="title">
        Add a new person to the system
      </h2>
    </div>
    <div class="section">
      <PersonForm @personEvent="personEvent"></PersonForm>
    </div>
  </div>
</template>

<script>
import PersonForm from "@/components/PersonForm";
import store from "@/store";
import * as people from "@/store/modules/people";
export default {
  name: "NewPerson",
  components: {
    PersonForm
  },
  methods: {
    personEvent(person) {
      store.dispatch('people/' + people.ADDONE, person);
    }
  }
}
</script>

<style scoped>

</style>
