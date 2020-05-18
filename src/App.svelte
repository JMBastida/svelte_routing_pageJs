<script>
  import router from "page";
  import Productos from "./pages/Productos.svelte";
  import Producto from "./pages/Producto.svelte";
  import Home from "./pages/Home.svelte";

  export let name;

  let page, params;

  router("/", () => (page = Home));
  router("/productos", () => (page = Productos));
  router(
    "/productos/:id",
    // Antes de poner el componente
    (ctx, next) => {
      params = ctx.params;
      next();
    },
    // Finalmente añadimos el componente
    () => (page = Producto)
  );

  router.start();
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<!-- Header -->
<header style="margin-top:2em;">

  <!-- Logo -->
  <div id="fh5co-logo" class="text-center">
    <a href="/">
      <img
        src="https://secure.meetupstatic.com/photos/event/5/d/5/d/600_480743901.jpeg"
        alt="Logo svelte" />
    </a>

  </div>
  <!-- Logo -->

  <!-- Main Nav -->
  <div>
    <nav role="navigation">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/productos">Productos</a>
        </li>
      </ul>
    </nav>
  </div>
  <!-- Main Nav -->
</header>
<!-- Header -->
<svelte:component this={page} {params} />
<!-- Main container -->
