import TextareaComponent from './Textarea'
import TextareaGroupComponent from './TextareaGroup'

export default Vue => {
    Vue.component(TextareaComponent.name, TextareaComponent)
    Vue.component(TextareaGroupComponent.name, TextareaGroupComponent)
}