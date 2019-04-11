<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <v-btn
          class="cyan accent-2"
          fab
          to="songs/create"
          slot="action"
          medium
          absolute
          right
          middle
        >
          <v-icon fab>add</v-icon>
        </v-btn>
        <div v-for="song in songs" :key="song.id">
          {{song.title}} -
          {{song.artist}} -
          {{song.album}}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from "@/services/SongsService";
import Panel from "@/components/Panel";
export default {
  components: {
    Panel
  },
  data() {
    return {
      songs: null
    };
  },
  async mounted() {
    // do a request backedn for all the songs
    this.songs = (await SongsService.index()).data;
  }
};
</script>

<style scoped>
.flex.offset-xs3 {
  width: 50%;
  margin: 0 auto;
}
</style>