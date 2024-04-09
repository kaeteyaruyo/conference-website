<template>
  <v-app>
    <template v-if="mobile">
      <v-app-bar color="primary" scroll-behavior="hide">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>
          <router-link class="mobile-title" to="/">ICS 2024</router-link>
        </v-app-bar-title>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" temporary>
        <v-list v-model:opened="openedList" open-strategy="single" align="start">
          <template v-for="(route, i) in routes" :key="`route_${i}`">
            <v-list-group v-if="isList(route)">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" :title="route.title"></v-list-item>
              </template>
              <v-list-item v-for="(subRoute, j) in route.path" :key="`route_${i}_${j}`" :to="subRoute.path"
                :title="subRoute.title"></v-list-item>
            </v-list-group>
            <v-list-item v-else :to="route.path" :title="route.title"></v-list-item>
          </template>
        </v-list>
      </v-navigation-drawer>
    </template>
    <v-app-bar v-else color="primary" scroll-behavior="hide">
      <v-container>
        <v-row>
          <v-col>
            <router-link style="min-height: fit-content;" to="/">
              <!-- TODO: 請將 Logo（還有 favicon）置換成正確的檔案 -->
              <img style="filter: brightness(0) invert(1);" height="44px" src="./assets/logo.png" />
            </router-link>
          </v-col>
          <v-spacer></v-spacer>
          <v-col align-self="center">
            <div class="d-flex align-center">
              <template v-for="(route, i) in routes" :key="`route_${i}`">
                <v-btn v-if="isList(route)" class="text-subtitle-1" append-icon="mdi-menu-down">
                  {{ route.title }}
                  <v-menu contained activator="parent" location="bottom center">
                    <v-list>
                      <v-list-item v-for="(subRoute, j) in route.path" :key="`route_${i}_${j}`" :to="subRoute.path"
                        :title="subRoute.title"></v-list-item>
                    </v-list>
                  </v-menu>
                </v-btn>
                <v-btn v-else class="text-subtitle-1" :to="route.path" :text="route.title"></v-btn>
              </template>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main class="pt-0">
      <router-view />
      <!-- TODO: 請填入正確的 footer 內容 -->
      <v-footer class="bg-primary">
        <v-container>
          <v-row>
            <v-col :cols="(mobile ? 12 : 6)">
              <v-card flat class="bg-primary">
                <v-card-text>
                  <p class="text-subtitle-1">Organizer｜National Yang Ming Chiao Tung University</p>
                  <!-- <p class="text-subtitle-1">Co-organizer｜Information Technology Service Center, National Yang Ming Chiao Tung University</p>
                  -->
                  <p class="text-subtitle-1">Government Sponsor｜Ministry of Education</p>
                  <p class="text-subtitle-1">Government Sponsor｜National Science and Technology Council</p>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col :cols="(mobile ? 12 : 6)">
              <v-card flat class="bg-primary">
                <v-card-item>
                  <v-card-title>Academic Sponsor</v-card-title>
                  <v-divider :thickness="2"></v-divider>
                </v-card-item>
                <v-card-text>
                  <p>Computer Society, R.O.C.</p>
                  <p>Academic Sinica</p>
                  <p></p>
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
      openedList: [],
      routes: [
        {
          title: "ICS 2024",
          path: [
            {
              title: "Home",
              path: "/",
            },
            {
              title: "Keynote Speaker",
              path: "/keynote_speaker",
            },
            {
              title: "Program",
              path: "/program",
            },
          ]
        },
        {
          title: "Organization",
          path: "/organization",
        },
        {
          title: "Call for Papers",
          path: [
            {
              title: "Call for Papers",
              path: "/call_for_papers",
            },
            {
              title: "Call for Special Sessions",
              path: "/call_for_special_sessions",
            },
          ],
        },
        {
          title: "Submission",
          path: [
            {
              title: "Submission",
              path: "/submission",
            },
            {
              title: "Registration",
              path: "/registration",
            },
            {
              title: "Camera Ready Papers",
              path: "/camera_ready_papers",
            },
          ],
        },
        {
          title: "Workshops",
          path: "/workshops",
        },
        {
          title: "Venue",
          path: "/venue",
        },
        {
          title: "Sponsor",
          path: [
            {
              title: "Sponsor",
              path: "/sponsor",
            },
            {
              title: "Sponsorship",
              path: "/sponsorship",
            },
          ],
        }
      ]
    }
  },
  computed: {
    mobile() {
      return this.$vuetify.display.mobile
    },
  },
  methods: {
    isList(route) {
      return Array.isArray(route.path)
    }
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

.v-main {
  display: grid;
  grid-template-rows: auto min-content;
}

.v-application__wrap {
  min-height: calc(100dvh - 60px) !important;
}

.mobile-title {
  text-decoration: none;
  color: #FFF;
}
</style>
