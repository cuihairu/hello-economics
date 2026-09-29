import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import 'katex/dist/katex.min.css'
import { MotionPlugin } from '@vueuse/motion'
import './custom.css'
import CourseTabs from './components/CourseTabs.vue'
import CourseShelf from './components/CourseShelf.vue'
import TheoryTimeline from './components/TheoryTimeline.vue'
import PeopleNetwork from './components/PeopleNetwork.vue'
import GlossaryView from './components/GlossaryView.vue'
import BooksShelf from './components/BooksShelf.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => h(CourseTabs),
    })
  },
  enhanceApp({ app }) {
    app.use(MotionPlugin)
    app.component('TheoryTimeline', TheoryTimeline)
    app.component('PeopleNetwork', PeopleNetwork)
    app.component('GlossaryView', GlossaryView)
    app.component('CourseShelf', CourseShelf)
    app.component('BooksShelf', BooksShelf)
  },
}
