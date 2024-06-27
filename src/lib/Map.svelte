<script>
  export let mapName = 'mapName_default';
  export let mapImage = '$lib/images/404.png';

  console.log(mapImage);
</script>

<div class="basis-1/4">
  <div
    class="card h-56 w-full rounded-2xl bg-cover bg-center shadow-xl"
    style="background-image: url({mapImage})"
  >
    <div class="card-body from-base-100 rounded-2xl border border-neutral-600 bg-gradient-to-t">
      <h2 class="card-title absolute bottom-4 h-fit self-center text-sm text-slate-200 lg:text-lg">
        {mapName}
      </h2>
    </div>
  </div>
</div>
