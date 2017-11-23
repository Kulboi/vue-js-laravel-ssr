<template>
    <h3>{{ message }}</h3>
</template>
<script>
    export default {
        data() {
            return {
                message: ''
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                let name = to.name;
                let ucfirst = name.charAt(0).toUpperCase() + name.slice(1);
                vm.message = `Hello from the ${ucfirst} page`;
            });
        }
    }
</script>
