export default {
    methods: {
        downloadBackup(id) {
            window.open(`/backups/${id}`, '_blank')
        },

        runBackup() {
            axios.post('/api/backups')
                .then(response =>
                    toast('Backup request added to queue!', 'success'))
                .catch(response =>
                    toast(response.response.data.message, 'failed'))
        },

        destroyBackup(id) {
            axios.delete(`/api/backups/${id}`)
                .then((response) => {
                    toast('Backp successfully deleted!', 'success')

                    this.$router.push('/backups')
                })
        }
    }
}
