<?php $pageTitle = 'Contact - ASP Global Solutions'; require __DIR__ . '/includes/header.php'; ?>
<section class="hero">
  <h1>Start a project discussion</h1>
  <p>Tell us about your objectives and we'll set up a working session with the right experts.</p>
</section>

<section>
  <h2>Send a message</h2>
  <form class="contact-form" method="post" action="/php/contact.php">
    <label for="name">Name</label>
    <input required id="name" name="name" type="text" placeholder="Your name" />

    <label for="email">Email</label>
    <input required id="email" name="email" type="email" placeholder="you@example.com" />

    <label for="company">Company</label>
    <input id="company" name="company" type="text" placeholder="Company or team name" />

    <label for="message">Project details</label>
    <textarea required id="message" name="message" rows="5" placeholder="What can we help you build?"></textarea>

    <button type="submit">Submit</button>
  </form>
  <?php if ($_SERVER['REQUEST_METHOD'] === 'POST'): ?>
    <div class="card" style="margin-top:1.5rem;">
      <strong>Thanks!</strong>
      <p>We received your message and will follow up shortly.</p>
    </div>
  <?php endif; ?>
</section>
<?php require __DIR__ . '/includes/footer.php'; ?>
