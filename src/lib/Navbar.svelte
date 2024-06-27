<script>
  import img from '$lib/images/logo.png';
</script>

<div class="navbar bg-base-100 border-b border-neutral-800">
  <div class="flex-none lg:hidden">
    <div class="drawer">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content max-w-fit">
        <!-- Page content here -->
        <label for="my-drawer" class="btn btn-ghost drawer-button max-w-fit">
          <i class="ri-menu-line"></i>
        </label>
      </div>
      <div class="drawer-side z-20">
        <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
        <ul class="menu bg-base-200 text-base-content min-h-full w-72 p-4">
          <!-- Sidebar content here -->
          <li>
            <a href="/" class="btn btn-link text-base font-normal text-slate-200 no-underline"
              >Games</a
            >
          </li>
          <li>
            <a href="/" class="btn btn-link text-base font-normal text-slate-200 no-underline"
              >Stats</a
            >
          </li>
          <li>
            <a href="/" class="btn btn-link text-base font-normal text-slate-200 no-underline"
              >Leaderboard</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="flex-1 xl:ml-20">
    <a href="/" class="btn btn-ghost rounded-lg">
      <img src={img} alt="" class="max-h-12 md:p-1" />
      <span class="font-display hidden text-lg font-bold tracking-widest sm:flex">OLYMPUS.TF</span>
    </a>
    <div class="hidden lg:flex">
      <a href="/" class="btn btn-link text-base font-normal text-slate-200 no-underline">Games</a>
      <a href="/" class="btn btn-link text-base font-normal text-slate-200 no-underline">Stats</a>
      <a href="/" class="btn btn-link text-base font-normal text-slate-200 no-underline"
        >Leaderboard</a
      >
    </div>
  </div>
  <div class="mr-8 flex-none gap-4 xl:mr-20">
    <div class="form-control max-w-42 hidden sm:flex">
      <label class="input input-bordered flex w-fit items-center gap-2 rounded-lg">
        <i class="ri-search-line"></i>
        <input type="text" class="grow" placeholder="Find a player..." />
        <span class="badge rounded bg-neutral-800"><i class="ri-steam-fill"></i></span>
      </label>
    </div>
    <div class="dropdown dropdown-end">
      <div
        tabindex="0"
        role="button"
        class="btn btn-ghost btn-circle avatar z-10 mt-1 ring ring-amber-400"
      >
        <div class="rounded-full">
          <img
            alt="Avatar"
            src="https://avatars.akamai.steamstatic.com/6c4f2b976544bcd6e45c8446a82cb4b13ae48541_full.jpg"
          />
        </div>
      </div>
      <ul class="menu menu-sm dropdown-content bg-base-200 z-[1] mt-0 w-52 rounded-lg p-2 shadow">
        <li><a href="/">Profile</a></li>
        <li><a href="/">Settings</a></li>
        <li><a href="/">Logout</a></li>
      </ul>
    </div>
  </div>
</div>
