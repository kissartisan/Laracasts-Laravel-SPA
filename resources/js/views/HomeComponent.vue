<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <div class="message" v-for="status in statuses" :key="status.id">
                    <div class="message-header">
                        <p>
                            {{ status.user.name }} said...
                        </p>

                        <p>
                            {{ status.created_at | ago | capitalize }}
                            <!-- {{ postedOn(status) }} -->
                        </p>
                    </div>

                    <div class="message-body" v-text="status.body">
                        I'm an example component.
                    </div>
                </div>
                <add-to-stream @completed="addStatus"></add-to-stream>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';
    import Status from '../models/Status';
    import AddToStream from '../components/AddToStream.vue';

    export default {
        components: { AddToStream },

        data() {
            return {
                statuses: []
            }
        },

        filters: {
            ago(date) {
                return moment.utc(date).fromNow();
            },

            capitalize(value) {
                return value.toUpperCase();
            }
        },

        created() {
            console.log('Created home component.');
            Status.all(statuses => this.statuses = statuses);
        },

        methods: {
            addStatus(status) {
                this.statuses.unshift(status);

                alert('Your status has been added to the stream.');

                window.scrollTo(0, 0);
            }
        },

        mounted() {
            console.log('HomeComponent mounted.');
        }
    }
</script>
