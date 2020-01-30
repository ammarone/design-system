<template>
    <div class="sidebar">
        <router-link :to="{name: 'home'}"><h3>Home</h3></router-link>
        <h3>Design</h3>
         <ul>
            <li>
                <router-link :to="{name: 'colors'}">
                    Colors
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'typography'}">
                    Typography
                </router-link>
            </li>
            <li>
                Spacing
            </li>
            <li>
                Borders
            </li>
            <li>
                Icons
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'design-sidebar',
};
</script>
