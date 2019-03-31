<template>
  <nav class="header">
    <h1>
      <router-link to="/">Home</router-link>
      <router-link to="/top">Categories</router-link>

    </h1>
  </nav>  
</template>

<script> 
export default {
}
</script>
<style>
.header {
  position:fixed; /* fixing the position takes it out of html flow - knows
                   nothing about where to locate itself except by browser
                   coordinates */
  left:0;           /* top left corner should start at leftmost spot */
  top:0;            /* top left corner should start at topmost spot */
  width:100vw;      /* take up the full browser width */
  z-index:200;  /* high z index so other content scrolls underneath */
  height:50px;     /* define height for content */
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: black
}
</style>
