import { createWebHistory, createRouter } from 'vue-router'

import IndexView from '@/views/IndexView.vue'
import KeynoteSpeakerView from '@/views/KeynoteSpeakerView.vue'
import ProgramView from '@/views/ProgramView.vue'
import OrganizationView from '@/views/OrganizationView.vue'
import CallForPapersView from '@/views/CallForPapersView.vue'
import CallForSpecialSessionsView from '@/views/CallForSpecialSessionsView.vue'
import SubmissionView from '@/views/SubmissionView.vue'
import RegistrationView from '@/views/RegistrationView.vue'
import CameraReadyPapersView from '@/views/CameraReadyPapersView.vue'
import WorkshopsView from '@/views/WorkshopsView.vue'
import VenueView from '@/views/VenueView.vue'
import SponsorView from '@/views/SponsorView.vue'
import SponsorshipView from '@/views/SponsorshipView.vue'
import PlaygroundView from '@/views/PlaygroundView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const routes = [
  {
    path: "/",
    component: IndexView,
    meta: { title: "Home", },
  },
  {
    path: "/keynote_speaker",
    component: KeynoteSpeakerView,
    meta: { title: "Keynote Speaker", },
  },
  {
    path: "/program",
    component: ProgramView,
    meta: { title: "Program", },
  },
  {
    path: "/organization",
    component: OrganizationView,
    meta: { title: "Organization", },
  },
  {
    path: "/call_for_papers",
    component: CallForPapersView,
    meta: { title: "Call for Papers", },
  },
  {
    path: "/call_for_special_sessions",
    component: CallForSpecialSessionsView,
    meta: { title: "Call for Special Sessions", },
  },
  {
    path: "/submission",
    component: SubmissionView,
    meta: { title: "Submission", },
  },
  {
    path: "/registration",
    component: RegistrationView,
    meta: { title: "Registration", },
  },
  {
    path: "/camera_ready_papers",
    component: CameraReadyPapersView,
    meta: { title: "Camera Ready Papers", },
  },
  {
    path: "/workshops",
    component: WorkshopsView,
    meta: { title: "Workshops", },
  },
  {
    path: "/venue",
    component: VenueView,
    meta: { title: "Venue", },
  },
  {
    path: "/sponsor",
    component: SponsorView,
    meta: { title: "Sponsor", },
  },
  {
    path: "/sponsorship",
    component: SponsorshipView,
    meta: { title: "Sponsorship", },
  },
  {
    path: "/playground",
    component: PlaygroundView,
    meta: { title: "Playground", },
  },
  {
    path: '/:path(.*)*',
    component: NotFoundView,
    meta: { title: "Page Not Found", },
  },]

const router = createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
})

// Check user status to decide if he / she can go to next page.
router.beforeEach(async (to) => {
  document.title = `${to.meta.title} - 2024 International Computer Symposium`
})

export default router