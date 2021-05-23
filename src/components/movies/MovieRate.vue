<template>
  <div class="card mt-3">
  <div class="card-body">
    <div class="d-flex flex-row justify-content-between">
      <div>
        <star-rating :star-size="20" :rating="rate.rate" :read-only="true" :increment="0.01"></star-rating>
      </div>
      <div>
       <p>{{rate.user.username}}</p>
      </div>
    </div>
    <div>
      {{rate.comment}}
    </div>
  </div>
</div>
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
  name: 'MovieRate',
  props: {
    rate: Object,
  },
  components: {
    StarRating,
  }
}
</script>

<style>

</style>