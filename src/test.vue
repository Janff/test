<template>
    <div>{{ ss }}</div>
</template>
<script>
export default {
    data(){
        return {
            msg: 'test',
            ss: Date.now()
        }
    }
}
</script>