<template>
    <div class="sidebar">
        <router-link :to="{name: 'home'}">
            <h3>
                <span><home /></span>
                Home
            </h3>
        </router-link>
        <ul>
            <li>Purpose</li>
            <li>Get Started</li>
            <li>Installation</li>
        </ul>
        <router-link :to="{name: 'colors'}"><h3>Design</h3></router-link>
        <router-link :to="{name: 'buttons'}"><h3>Components</h3></router-link>
    </div>
</template>

<script>
import Home from '../Icons/home.vue';

export default {
  name: 'home-sidebar',
  components: {
    Home,
  },
};
</script>
