<!-- src/lib/Navbar.svelte -->
<script>
  let isOpen = false;
</script>

<nav class="bg-purple-500 shadow-lg">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <div class="flex items-center">
        <a href="#" class="text-xl font-bold text">Brand</a>
      </div>
      <div class="-mr-2 flex md:hidden">
        <button on:click={() => isOpen = !isOpen} type="button" class="inline-flex items-center justify-center p-2 rounded-md text-white-400 hover:text-white hover:bg-white-700 focus:outline-none focus:bg-white-700 focus:text-white" aria-expanded={isOpen}>
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path class={!isOpen ? 'inline-flex' : 'hidden'} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path class={isOpen ? 'inline-flex' : 'hidden'} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="hidden md:block">
        <div class="ml-10 flex items-baseline space-x-4">
          <a href="#" class="text-white-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
          <a href="#" class="text-white-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
          <a href="#" class="text-white-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
        </div>
      </div>
    </div>
  </div>

  <div class={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      <a href="#" class="text-white-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
      <a href="#" class="text-white-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
      <a href="#" class="text-white-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
      <a href="#" class="bg-blue-500 text-white hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium">Login</a>
    </div>
  </div>
</nav>
