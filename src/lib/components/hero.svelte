
  <!-- HeroSection.svelte -->
  <script>
    // Import necessary icons from your preferred icon library
    import { FaFacebook, FaTwitter, FaInstagram } from 'svelte-icons/fa';
  </script>
  
  <section class="bg-gray-100 text-gray-800 py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl font-bold leading-tight mb-6">Welcome to Our Website</h1>
        <p class="max-w-2xl mx-auto text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        <div class="flex justify-center space-x-4">
          <a href="#" class="bg-purple-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700">Get Started</a>
          <a href="#" class="bg-white text-purple-500 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200">Learn More</a>
        </div>
      </div>
      <div class="mt-12 flex justify-center space-x-4">
        <a href="#" class="text-purple-500 hover:text-purple-700">
          <FaFacebook class="h-6 w-6" />
        </a>
        <a href="#" class="text-purple-500 hover:text-purple-700">
          <FaTwitter class="h-6 w-6" />
        </a>
        <a href="#" class="text-purple-500 hover:text-purple-700">
          <FaInstagram class="h-6 w-6" />
        </a>
      </div>
    </div>
  </section>
  