<template>
  <div class="section">
    <div class="container">
      <h1 class="title">DETAILS</h1>
      <h2 class="title">
        This is the {{ current.first_name }}
        {{ current.last_name }} page
      </h2>
    </div>
    <div class="section" v-if="current">
      <PersonForm :current="current"
        @personEvent="personEvent"></PersonForm>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PersonForm from "@/components/PersonForm";
import store from "@/store";
import * as people from "@/store/modules/people";
export default {
  name: "Person",
  components: {
    PersonForm
  },
  computed: {
    ...mapGetters('people', ['current'])
  },
  methods: {
    personEvent(person) {
      store.dispatch('people/' + people.PUT, person);
    }
  }
}
</script>

<style scoped>

</style>
