<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><%= title %></title>
  <link rel="stylesheet" href="../App.min.css">
</head>
<body>
  <div class="container my-3">
    <div class="row border">
      <div class="col-md-6 bg-light bg-gradient p-3 d-none d-md-block">
        <a href="/">
          <img src="/images/banner/Dell.webp" alt="..." class="img-fluid" />
        </a>
        <a href="/">
          <img src="/images/banner/Laptops.webp" alt="..." class="img-fluid" />
        </a>
      </div>
      <div class="col-md-6 p-3">
        <h4 class="text-center">Sign In</h4>
        <form action="/SW-HOME/src/views/login" method="POST">
          <input type="text" name="username" placeholder="Username" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  </div>
</body>
</html>
