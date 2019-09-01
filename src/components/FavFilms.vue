<!-- <template lang="html">
  <div id="fav-list">

      <FilmInfo v-for="(film, index) of this.favourites" :film="film" :key="index" />

    </div>
</template>

<script>
import FilmInfo from '@/components/FilmInfo'
import {eventBus} from '@/main.js'

export default {
  name: 'film-favs',
  props: ['favourites', 'film'],
  components: {
    FilmInfo
  },
  methods: {
    addFavourite() {
      eventBus.$emit('fav-selected', this.film)
    }
  }
}
</script>

<style lang="css" scoped>
</style> -->
