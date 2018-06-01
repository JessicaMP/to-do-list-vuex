<template>
<div>
    <HeaderComponet/>
    <MainComponent/>
</div>
</template>

<script>
import HeaderComponet from './components/Header-component.vue';
import MainComponent from './components/Main-component.vue'
 
export default {
    components: {
        HeaderComponet,
        MainComponent
    }
};
</script>
