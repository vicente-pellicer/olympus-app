<script>
  import DraftPlayer from './DraftPlayer.svelte';
</script>

<div class="join join-vertical flex rounded-2xl border border-neutral-600">
  <div class="join-item rounded-t-2xl border-b border-neutral-600 bg-[#002035]">
    <div
      class="from-base-100 flex space-x-1 rounded-t-2xl border-b border-neutral-600 bg-gradient-to-r from-30% via-[#001020] via-80%"
    >
      <div class="h-20 basis-1/6 place-content-center px-2 pl-4">
        <p class="w-full text-center text-xl font-semibold text-[#50AAFF]">captain.name</p>
      </div>
      <div class="divider divider-horizontal divider-neutral m-0 py-4"></div>
      <DraftPlayer />
      <DraftPlayer />
      <DraftPlayer />
      <DraftPlayer />
      <DraftPlayer />
    </div>
  </div>
  <div class="join-item rounded-b-2xl border-b border-neutral-600 bg-[#350000]">
    <div
      class="from-base-100 flex space-x-1 rounded-b-2xl border-t border-neutral-600 bg-gradient-to-r from-30% via-[#200000] via-80%"
    >
      <div class="h-20 basis-1/6 place-content-center px-2 pl-4">
        <p class="w-full text-center text-xl font-semibold text-[#FF5050]">captain.name</p>
      </div>
      <div class="divider divider-horizontal divider-neutral m-0 py-4"></div>
      <DraftPlayer />
      <DraftPlayer />
      <DraftPlayer />
      <DraftPlayer />
      <DraftPlayer />
    </div>
  </div>
</div>
