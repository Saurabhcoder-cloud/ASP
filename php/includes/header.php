<?php
  $pageTitle = $pageTitle ?? 'ASP Global Solutions';
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title><?php echo htmlspecialchars($pageTitle); ?></title>
  <link rel="stylesheet" href="/php/styles.css" />
</head>
<body>
  <header class="site-header">
    <div class="logo">ASP Global Solutions</div>
    <nav class="nav">
      <a href="/php/index.php">Home</a>
      <a href="/php/about.php">About</a>
      <a href="/php/services.php">Services</a>
      <a href="/php/ai-solutions.php">AI Solutions</a>
      <a href="/php/pricing.php">Pricing</a>
      <a href="/php/contact.php">Contact</a>
    </nav>
  </header>
  <main class="page">
