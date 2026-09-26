import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import CourseTabs from './components/CourseTabs.vue'
import TheoryTimeline from './components/TheoryTimeline.vue'
import PeopleNetwork from './components/PeopleNetwork.vue'
import GlossaryView from './components/GlossaryView.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => h(CourseTabs),
    })
  },
  enhanceApp({ app }) {
    app.component('TheoryTimeline', TheoryTimeline)
    app.component('PeopleNetwork', PeopleNetwork)
    app.component('GlossaryView', GlossaryView)
  },
}
