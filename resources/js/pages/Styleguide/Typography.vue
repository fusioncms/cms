<template>
    <ui-card class="sg-typography">
        <ui-card-header title="Typography"></ui-card-header>

        <ui-card-body>
            <div class="row">
                <div class="col w-full lg:w-1/2">
                    <h1>Heading 1 <small>Sub Heading</small></h1>
                    <h2>Heading 2 <small>Sub Heading</small></h2>
                    <h3>Heading 3 <small>Sub Heading</small></h3>
                    <h4>Heading 4 <small>Sub Heading</small></h4>
                    <h5>Heading 5 <small>Sub Heading</small></h5>
                    <h6>Heading 6 <small>Sub Heading</small></h6>
                </div>

                <div class="col w-full lg:w-1/2">
                    <p>Body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus sagittis erat, imperdiet luctus arcu pellentesque vitae.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus sagittis erat, imperdiet luctus arcu pellentesque vitae.</p>
                    
                    <p><a href="#">Inline Link</a></p>

                    <h3>Badges</h3>
                    <p>
                        <ui-badge>Default</ui-badge>
                        <ui-badge class="badge--primary">Primary</ui-badge>
                        <ui-badge class="badge--secondary">Secondary</ui-badge>
                        <ui-badge class="badge--info">Info</ui-badge>
                        <ui-badge class="badge--success">Success</ui-badge>
                        <ui-badge class="badge--warning">Warning</ui-badge>
                        <ui-badge class="badge--danger">Danger</ui-badge>
                    </p>
                    <!-- <div class="flex">
                        <ul class="w-1/2">
                            <li>List item</li>
                            <li>List item</li>
                            <li>List item</li>
                            <li>
                                List item
                                <ul>
                                    <li>List item</li>
                                    <li>List item</li>
                                </ul>
                            </li>
                        </ul>

                        <ol class="w-1/2">
                            <li>List item</li>
                            <li>List item</li>
                            <li>List item</li>
                            <li>List item</li>
                            <li>List item</li>
                        </ol>
                    </div> -->
                </div>
            </div>
        </ui-card-body>
    </ui-card>
</template>

<script>
    export default {}
</script>