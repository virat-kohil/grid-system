let header = document.getElementById('head');
header.insertAdjacentHTML('afterbegin', `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="index.css">
<link rel="stylesheet" href="footer.css">
<link rel="shortcut icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png" 
    type="image/x-icon">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">`)

const navHeader = document.getElementById('header');
navHeader.innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-dark">
<div class="container-fluid">
  <a class="navbar-brand text-light" href="index.html">Amazone</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active text-light" aria-current="page" href="home.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-light" href="products.html">Products</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Services
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="emi.html">EMI</a></li>
          <li><a class="dropdown-item" href="online.html">Online</a></li>
          <li><a class="dropdown-item" href="cash.html">Cash on delivery</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="card.html">Credit/debit card</a></li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link text-light" href="fashion.html" >Fashions</a>
      </li>
    </ul>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-light" type="submit">Search</button>
    </form>
  </div>
</div>
</nav>`