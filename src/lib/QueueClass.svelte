<!-- 

<div class="h-[24rem] w-full overflow-auto rounded-2xl border border-neutral-600 px-8 py-4">
  <p class="text-center text-2xl font-semibold">class name</p>
  <div class="flex h-8 w-full py-1">
    <div class="flex-1">
      <div class="avatar h-full">
        <div class="h-auto rounded-full ring-2 ring-amber-400">
          <img
            src="https://avatars.akamai.steamstatic.com/6c4f2b976544bcd6e45c8446a82cb4b13ae48541_full.jpg"
            alt="Avatar"
          />
        </div>
      </div>
      <p class="text-md font-normal">player</p>
      <i class="ri-shield-star-line text-amber-400"></i>
      <i class="ri-star-line text-[#ff00aa]"></i>
    </div>
    <div class="flex-none">
      <button class="btn btn-xs btn-square bg-base-300 rounded-lg hover:bg-green-600">
        <i class="ri-check-line text-white"></i>
      </button>
    </div>
  </div>
</div>

<p class="text-md font-normal">m</p>
<i class="ri-shield-star-line text-amber-400"></i>
<i class="ri-star-line text-[#ff00aa]"></i>

-->

<script>
  import QueuePlayer from './QueuePlayer.svelte';
</script>

<div class="h-[24rem] w-full overflow-auto rounded-2xl border border-neutral-600 px-8 py-4">
  <p class="text-center text-2xl font-semibold">class name</p>
  <QueuePlayer />
</div>
