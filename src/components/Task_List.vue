<template>
    <div :key="task.id" v-for="task in tasks">
        <Task_Item 
            @toggle-reminder="$emit('toggle-reminder', task.id)" 
            @delete-task="$emit('delete-task', task.id)" 
            :task="task"/>
    </div>
</template>

<script>

import Task_Item from './Task_Item'

export default {
    name: 'Task_List', 
    props: {
        tasks: Array
    }, 
    components: {
        Task_Item,
    }, 
    emits: ['delete-task', 'toggle-reminder'],
}
</script>



