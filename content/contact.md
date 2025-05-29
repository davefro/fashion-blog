---
layout: layouts/base.njk
title: Contact  
permalink: /contact/
---

<section class="prose prose-lg mx-auto px-4 py-12">
  <h1>About Me</h1>
  <p>Hi! I'm [Name], and I created this blog to share my passion for fashion. Here you'll find weekly inspiration, style tips, and curated product picks from my favourite brands.</p>
  <p>My goal is to help you look great without breaking the bank. Enjoy reading and feel free to reach out!</p>
</section>

<section class="max-w-xl mx-auto px-4 py-12">
  <h2 class="text-2xl font-semibold mb-6">Contact Me</h2>
  <form name="contact" method="POST" data-netlify="true" action="/success" class="space-y-4">
    <input type="hidden" name="form-name" value="contact" />
    <div>
      <label for="name" class="block font-medium mb-1">Name</label>
      <input type="text" name="name" id="name" required class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300">
    </div>
    <div>
      <label for="email" class="block font-medium mb-1">Email</label>
      <input type="email" name="email" id="email" required class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300">
    </div>
    <div>
      <label for="message" class="block font-medium mb-1">Message</label>
      <textarea name="message" id="message" rows="5" required class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"></textarea>
    </div>
    <button type="submit" class="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">Send Message</button>
  </form>
</section>