<template>
  <Add_Task v-show="showAddTask" @add-task="addTask" />

  <Task_List @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
</template>

<script>
import Task_List from "../components/Task_List";
import Add_Task from "../components/Add_Task";

export default {
  name: "Home_Page",
  components: {
    Task_List,
    Add_Task,
  },
  props: {
    showAddTask: Boolean,
  },

  beforeMount() {
    console.log("Mounted");
    this.created();
  },

  data() {
    return {
      tasks: [],
    };
  },

  methods: {
    async addTask(task) {
      const res = await fetch("api/tasks", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(task),
      });
      const data = await res.json();
      this.tasks = [...this.tasks, data];
    },

    async deleteTask(id) {
      const res = await fetch(`api/tasks/${id}`, {
        method: "DELETE",
      });
      res.status === 200
        ? (this.tasks = this.tasks.filter((task) => task.id !== id))
        : alert("Error deleting task");
    },

    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id);
      const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
      const res = await fetch(`api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updTask),
      });
      const data = await res.json();
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      );
    },

    async fetchTasks() {
      const res = await fetch("api/tasks");

      const data = await res.json();
      console.log("In fetchTasks: ");
      console.log(data);
      return data;
    },

    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`);
      const data = await res.json();
      return data;
    },

    async created() {
      this.tasks = await this.fetchTasks();
    },
  },
};
</script>
