<script>
  import DraftStatus from './DraftStatus.svelte';
  import DraftTeams from './DraftTeams.svelte';
</script>

<div class="mx-2 flex space-x-8 lg:mx-16 xl:mx-32 2xl:mx-52">
  <div class="w-fit">
    <DraftStatus />
  </div>
  <div class="w-full">
    <DraftTeams />
  </div>
</div>
