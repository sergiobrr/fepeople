<template>
  <div class="section">
    <div class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">People</h1>
          <h2 class="subtitle">
            Chi desidera su primodesiderio.com...
          </h2>
        </div>
      </div>
    </div>
    <div class="container">
      <b-table :data="people" :columns="columns"
              :loading="loading">
      </b-table>
    </div>
  </div>
</template>
<script>
  import * as people from '../store/modules/people';
  import { mapState } from 'vuex';
  export default {
    name: 'People',
    data() {
      return {
        columns: [
          {field: '_id', label: 'ID'},
          {field: 'first_name', label: 'First Name'},
          {field: 'last_name', label: 'Last Name'},
          {field: 'location', label: 'Location'}
        ]
      }
    },
    computed: {
      ...mapState({
        people: state => state.peopleState.people._items,
        loading: state => state.peopleState.loading
      })
    },
    created() {
      this.$store.dispatch(people.GETALL);
    }
  }
</script>
