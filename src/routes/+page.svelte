<!-- src/routes/+page.svelte -->
<script>
  import Navbar from '../lib/components/navbar.svelte';
  import  Hero from '../lib/components/hero.svelte';
</script>

<style>
  /* Add any page-specific styles here */
</style>

<div class=" flex flex-col  items-center bg-gray-100">
 <div class="">
    <Navbar />
    <Hero />
 </div>
 
</div>
