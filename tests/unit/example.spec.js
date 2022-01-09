import { mount, shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Home from '@/views/Home'
import About from '@/views/About'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('Testing Home', () => {
  it('should show the page title', () => {
    const wrapper = mount(Home)
    expect(wrapper.text()).toMatch('Welcome to PlanIt')
  })
})
describe('Testing About', () => {
  it('should show the page title', () => {
    const wrapper = mount(About)
    expect(wrapper.text()).toMatch('About PlanIt')
  })
})

describe('Testing Home', () => {
  it('should have a Home button', () => {
    const wrapper = mount(Home)
    var actual = wrapper.find('#myButton').classes()
    expect(actual.toString().match('btn btn-primary'))
  })
})
