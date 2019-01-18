<template>
  <div class="home">
    <Matchmaker></Matchmaker>
  </div>
</template>

<script>
// @ is an alias to /src
import Matchmaker from '@/components/Matchmaker'

export default {
  name: 'home',
  components: {
    Matchmaker
  }
}
</script>
