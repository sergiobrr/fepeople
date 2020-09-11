<template>
  <div class="section">
    <div class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            People
            <router-link to="/people/new_person">
              <b-button icon-left="plus-circle">Add person</b-button>
            </router-link>
          </h1>
          <h2 class="subtitle">
            Chi desidera su primodesiderio.com...
          </h2>
        </div>
      </div>
    </div>
    <div class="container">
      <b-table :data="people._items" :debounce-search="1000"
               :loading="loading" :striped="true" bordered
               paginated
               backend-pagination
               pagination-simple
               :total="people._meta.total"
               :per-page="people._meta.max_results"
               :current-page="people._meta.page"
               @page-change="onPageChange"
               aria-next-label="Next page"
               aria-previous-label="Previous page"
               aria-page-label="Page"
               aria-current-label="Current page">
        <b-table-column centered v-slot="props">
          <b-button size="is-small"
                    @click="personDetail(props.row)"
                    icon-left="account-edit">
                Edit
          </b-button>
          <b-button size="is-small"
                    @click="personDelete(props.row)"
                    icon-left="delete">
                Delete
          </b-button>

        </b-table-column>
        <b-table-column field="first_name" label="First Name"
                        v-slot="props" centered searchable>
          {{ props.row.first_name }}
        </b-table-column>
        <b-table-column field="last_name" label="Last Name"
                        v-slot="props" centered searchable>
          {{ props.row.last_name }}
        </b-table-column>
        <b-table-column field="_id" label="ID" v-slot="props"
                        centered searchable>
          {{ props.row._id }}
        </b-table-column>
      </b-table>
    </div>
  </div>
</template>
<script>
  import * as people from '../store/modules/people';
  import { mapGetters } from 'vuex';
  import store from '../store';
  import router from '../router';
  export default {
    name: 'People',
    computed: {
      ...mapGetters('people', ['people']),
      ...mapGetters('people', ['loading']),
      ...mapGetters('people', ['page']),
      ...mapGetters('people', ['next']),
      ...mapGetters('people', ['previous']),
    },
    created() {
      this.$store.dispatch('people/' + people.GETALL);
    },
    methods: {
      onPageChange: function(_page) {
        let href;
        switch (_page) {
          case this.people._meta.page + 1:
            href = this.next
            break
          case this.people._meta.page - 1:
            href = this.previous
            break
          default:

        }

        store.dispatch(
            'people/' + people.GETALL,
            href
        );
      },
      personDelete: (person) => {
        store.dispatch(
            'people/' + people.DELETEONE,
            {
              href: person._links.self.href,
              _etag: person._etag
            }
        )
      },
      personDetail: (person) => {
        const url = '/people/' + person._id;
        store.dispatch('people/' + people.SETCURRENT, person);
        router.push(url);
      }
    }
  }
</script>
