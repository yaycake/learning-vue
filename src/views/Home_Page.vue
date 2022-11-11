<template> 
    <div v-show="showAddTask">
        <Add_Task @add-task="addTask"/>
    </div>
    asdfadsf
    <Task_List 
        @toggle-reminder="toggleReminder" 
        @delete-task="deleteTask" 
        :tasks="tasks"/>
</template>
<script>

import Task_List from '../components/Task_List'
import Add_Task from '../components/Add_Task'

export default {
    name: 'Home_Page', 
    components: {
        Task_List,
        Add_Task
    }, 
    data() {
        return{
            tasks: [], 
        }
    }
}

</script>