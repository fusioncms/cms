import AccordionComponent from './Accordion'
import AccordionItemComponent from './AccordionItem'

export default Vue => {
    Vue.component(AccordionComponent.name, AccordionComponent)
    Vue.component(AccordionItemComponent.name, AccordionItemComponent)
}