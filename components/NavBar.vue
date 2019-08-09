<template>
  <div class="container-fluid bg-light">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <span class="navbar-brand">SSR example</span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <nuxt-link exact no-prefetch class="nav-link" to="/">Home</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link  class="nav-link" to="/blog">Blog</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link  class="nav-link" to="/long-menu">Menu</nuxt-link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  </div>
</template>