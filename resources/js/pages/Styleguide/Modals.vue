<template>
    <ui-card class="sg-fields">
        <ui-card-header title="Modals"></ui-card-header>

        <ui-card-body>
            <ui-button variant="secondary" v-modal:example-modal id="standard-modal-btn">Standard Modal</ui-button>
            <ui-modal name="example-modal" aria-labelledby="standard-modal-btn" title="Standard Modal">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque doloribus, vero corrupti provident ullam perspiciatis delectus iusto debitis iure mollitia porro earum? Consectetur, voluptatum ipsam blanditiis perspiciatis officia ducimus eius?</p>
            </ui-modal>

            <ui-button variant="secondary" v-modal:small-modal id="small-modal-btn">Small Modal</ui-button>
            <ui-modal name="small-modal" aria-labelledby="small-modal-btn" size="small" title="Small Modal">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque doloribus, vero corrupti provident ullam perspiciatis delectus iusto debitis iure mollitia porro earum? Consectetur, voluptatum ipsam blanditiis perspiciatis officia ducimus eius?</p>
            </ui-modal>

            <ui-button variant="secondary" v-modal:xsmall-modal id="xsmall-modal-btn">Extra Small Modal</ui-button>
            <ui-modal name="xsmall-modal" aria-labelledby="xsmall-modal-btn" size="xsmall" title="Extra Small Modal">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque doloribus, vero corrupti provident ullam perspiciatis delectus iusto debitis iure mollitia porro earum? Consectetur, voluptatum ipsam blanditiis perspiciatis officia ducimus eius?</p>
            </ui-modal>

            <ui-button variant="secondary" v-modal:large-modal id="large-modal-btn">Large Modal</ui-button>
            <ui-modal name="large-modal" aria-labelledby="Large-modal-btn" size="large" title="Large Small Modal">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque doloribus, vero corrupti provident ullam perspiciatis delectus iusto debitis iure mollitia porro earum? Consectetur, voluptatum ipsam blanditiis perspiciatis officia ducimus eius?</p>
            </ui-modal>

            <ui-button variant="secondary" v-modal:xlarge-modal id="xlarge-modal-btn">Extra Large Modal</ui-button>
            <ui-modal name="xlarge-modal" aria-labelledby="xlarge-modal-btn" size="xlarge" title="Extra Large Modal">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque doloribus, vero corrupti provident ullam perspiciatis delectus iusto debitis iure mollitia porro earum? Consectetur, voluptatum ipsam blanditiis perspiciatis officia ducimus eius?</p>
            </ui-modal>
        </ui-card-body>
    </ui-card>
</template>

<script>
    export default {}
</script>