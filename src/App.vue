<template>
  <v-app>
    <template v-if="mobile">
      <v-app-bar color="primary" scroll-behavior="hide">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>NYCU Conference</v-app-bar-title>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" temporary>
        <v-list align="start">
          <v-list-item to="/" title="首頁"></v-list-item>
          <v-list-group>
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" title="大會簡介"></v-list-item>
            </template>
            <v-list-item to="/about#section1" title="段落一"></v-list-item>
            <v-list-item to="/about#section2" title="段落二"></v-list-item>
            <v-list-item to="/about#section3" title="段落三"></v-list-item>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
    </template>
    <v-app-bar v-else color="primary" scroll-behavior="hide">
      <v-container>
        <v-row>
          <v-col>
            <router-link style="min-height: fit-content;" to="/">
              <img style="filter: brightness(0) invert(1);" height="44px" src="./assets/logo.png" />
            </router-link>
          </v-col>
          <v-spacer></v-spacer>
          <v-col align-self="center">
            <div class="d-flex align-center">
              <v-btn to="/">首頁</v-btn>
              <v-btn append-icon="mdi-menu-down">
                大會簡介
                <v-menu activator="parent">
                  <v-list>
                    <v-list-item to="/about#section1" title="段落一"></v-list-item>
                    <v-list-item to="/about#section2" title="段落二"></v-list-item>
                    <v-list-item to="/about#section3" title="段落三"></v-list-item>
                  </v-list>
                </v-menu>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main class="pt-0">
      <RouterView />
      <v-footer class="bg-primary">
        <v-container>
          <v-row>
            <v-col :cols="(mobile ? 12 : 6)">
              <v-card flat class="bg-primary">
                <v-card-text>
                  <p class="text-subtitle-1">主辦單位｜國立陽明交通大學</p>
                  <p class="text-subtitle-1">指導單位｜國立陽明交通大學</p>
                  <p class="text-subtitle-1">承辦單位｜國立陽明交通大學</p>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col :cols="(mobile ? 12 : 6)">
              <v-card flat class="bg-primary">
                <v-card-item>
                  <v-card-title>協辦單位</v-card-title>
                  <v-divider :thickness="2"></v-divider>
                </v-card-item>
                <v-card-text>
                  <p>單位一</p>
                  <p>單位二</p>
                  <p>單位三</p>
                </v-card-text>
              </v-card>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
        </v-container>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: false,
    }
  },
  computed: {
    mobile() { return this.$vuetify.display.mobile },
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
