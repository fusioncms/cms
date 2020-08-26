<template>
    <p-card>
        <p-card-header title="Treeview"></p-card-header>

        <p-card-body>
            <p-treeview :nodes="directories" v-model="selected"></p-treeview>

            <strong>Selected:</strong>
            <p><code>{{ selected }}</code></p>
        </p-card-body>
    </p-card>
</template>

<script>
    export default {
        data() {
            return {
                selected: {},
                directories: [
                    {
                        id: 1,
                        name: 'Folder 1',
                        children: [
                            { id: 2, name: 'hello', file: true },
                            { id: 3, name: 'wat', file: true },
                            {
                                id: 4,
                                name: 'Child Folder',
                                isFolder: true,
                                children: [
                                    {
                                        id: 5,
                                        name: 'child folder',
                                        isFolder: true,
                                        children: [
                                            { id: 6, name: 'hello', file: true },
                                            { id: 7, name: 'wat', file: true }
                                        ]
                                    },
                                    { id: 8, name: 'hello', file: true },
                                    { id: 9, name: 'wat', file: true },
                                    {
                                        id: 10,
                                        name: 'child folder',
                                        isFolder: true,
                                        children: [
                                            { id: 11, name: 'hello', file: true },
                                            { id: 12, name: 'wat', file: true }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 13,
                        name: 'Folder 2',
                        children: [
                            { id: 14, name: 'hello', file: true },
                            { id: 15, name: 'wat', file: true },
                            {
                                id: 16,
                                name: 'child folder',
                                isFolder: true,
                                children: [
                                    {
                                        id: 17,
                                        name: 'child folder',
                                        isFolder: true,
                                        children: [
                                            { id: 18, name: 'hello', file: true },
                                            { id: 19, name: 'wat', file: true }
                                        ]
                                    },
                                    { id: 20, name: 'hello', file: true },
                                    { id: 21, name: 'wat', file: true },
                                    {
                                        id: 22,
                                        name: 'child folder',
                                        isFolder: true,
                                        children: [
                                            { id: 23, name: 'hello', file: true },
                                            { id: 24, name: 'wat', file: true }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
            }
        }
    }
</script>