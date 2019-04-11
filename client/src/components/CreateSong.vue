<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">
        <v-textarea required label="Title" v-model="song.title"></v-textarea>

        <v-textarea label="Artist" v-model="song.artist"></v-textarea>

        <v-textarea label="Genre" v-model="song.genre"></v-textarea>

        <v-textarea label="Album" v-model="song.album"></v-textarea>

        <v-textarea label="Album Image Url" v-model="song.albumImageUrl"></v-textarea>

        <v-textarea label="YouTube ID" v-model="song.youtubeId"></v-textarea>
      </panel>
    </v-flex>

    <v-flex xs8>
      <panel title="Song Structure" class="ml-2">
        <v-textarea label="Tab" multi-line v-model="song.tab"></v-textarea>

        <v-textarea label="Lyrics" multi-line v-model="song.lyrics"></v-textarea>
      </panel>

      <v-btn dark class="cyan" @click="create">Create Song</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from "@/components/Panel";
import SongService from "@/services/SongsService";

export default {
  data() {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImage: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      }
    };
  },
  methods: {
    async create() {
      try {
        await SongService.post(this.song);
        this.$router.push({
          name: "songs"
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
  components: {
    Panel
  }
};
</script>

<style scoped>
</style>
