<script>
  import Map from './Map.svelte';

  let maps = [
    {
      name: 'cp_process_f12',
      image: 'https://comp.tf/images/thumb/2/20/Process.jpg/800px-Process.jpg'
    },
    {
      name: 'cp_snakewater_final',
      image: 'https://comp.tf/images/thumb/6/6d/Snakewater.jpg/800px-Snakewater.jpg'
    },
    {
      name: 'koth_product_final',
      image: 'https://comp.tf/images/thumb/7/77/Product.jpg/800px-Product.jpg'
    },
    {
      name: 'cp_sunshine',
      image: 'https://comp.tf/images/thumb/f/f9/Sunshine.jpg/800px-Sunshine.jpg'
    }
  ];

  //let isVoted = null;

  let votedStyle = 'border: 2px solid yellow;';

  const handleMapClick = (mapIndex) => {
    maps = maps.map((map) => ({
      ...map,
      isVoted: true
    }));
  };
</script>

<div class="mx-2 flex space-x-4 lg:mx-16 xl:mx-32 2xl:mx-52">
  {#each maps as map, i}
    <Map
      mapName={map.name}
      mapImage={map.image}
      isVoted={map.isVoted}
      style={votedStyle}
      on:click={() => handleMapClick(map.i)}
    />
  {/each}
</div>
