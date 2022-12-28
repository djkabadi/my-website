<template>
    <div>

        <TheHeader/>


        <slot/>

        <TheFooter/>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

    @media screen and (max-width:730px) {
        .sd-container{
            display: none;
        }

        
    }
</style>