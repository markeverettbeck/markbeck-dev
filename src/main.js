import DefaultLayout from '~/layouts/Default.vue'

import VueScrollTo from 'vue-scrollto'
import BootstrapVue from 'bootstrap-vue'
import './assets/styles/main.scss'

import {
  library
} from '@fortawesome/fontawesome-svg-core'

import {
  faTrophy,
  faRss,
  faCheck,
  faAward,
  faClock,
} from '@fortawesome/free-solid-svg-icons'
import {
  faAws,
  faGoogle,
  faWindows,
  faGithub,
  faLinux,
  faTwitter,
  faFacebook,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

library.add(
  faAws,
  faWindows,
  faGithub,
  faGoogle,
  faLinux,
  faTwitter,
  faFacebook,
  faLinkedin,
  faTrophy,
  faRss,
  faClock,
  faCheck,
  faAward
)

export default function (Vue, {
  head,
}) {
  Vue.use(VueScrollTo)
  Vue.use(BootstrapVue)
  Vue.component('Layout', DefaultLayout)

  Vue.component('font-awesome', FontAwesomeIcon)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i'
  })
}