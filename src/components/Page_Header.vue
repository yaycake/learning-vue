<template>
    <header>
        <h1>{{ title }}</h1>
        
        <Button_Primary 
            @btn-click="$emit('toggle-add-task')" 
            :text="showAddTask ? 'Close' : 'Add Task'" 
            :color="showAddTask ? 'red' : 'green'" />
    </header>
</template>

<script>
import Button_Primary from './Button_Primary'

export default {
    name: 'Page_Header',
    emits: ['toggle-add-task'],
    props: {
        title: String,
        showAddTask: {
            type: Boolean, 
            default: false
        }
    }, 
    components: {
        Button_Primary
    }, 
}
</script>

<style scoped>
    header {
        display: flex; 
        justify-content: space-between; 
        align-items: center;
        margin-bottom: 20px;
    }
</style>
