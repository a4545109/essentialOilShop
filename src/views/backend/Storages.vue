<template>
    <div>
      <table class="table mt-4">
          <thead>
              <tr>
              <th>圖片縮圖</th>
              <th>操作</th>
              </tr>
          </thead>
          <tbody v-if="storages.length">
              <tr
              v-for="(item, key) in storages"
              :key="key"
              >
              <td>
                  <img
                  :src="item.path"
                  width="100px"
                  class="img-fluid"
                  >
              </td>
              <td>
                  <div class="btn-group btn-group-sm">
                  <button class="btn btn-outline-danger" @click="deleteData(item.id)">刪除</button>
                  </div>
              </td>
              </tr>
          </tbody>
        </table>
        <!-- 分頁 -->
        <Pagination :pages="pagination" @emitPages="getData"></Pagination>
    </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
/* global $ */
import Pagination from '@/components/Pagination.vue'
export default {
  components: {
    Pagination
  },
  data () {
    return {
      storages: {},
      tempData: {},
      pagination: {},
      isLoading: false
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/storage`
      this.$http.get(url).then((response) => {
        this.storages = response.data.data
        this.pagination = response.data.meta.pagination
        this.isLoading = false
      })
    },
    deleteData (id) {
      this.isLoading = true
      this.tempData.id = id
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/storage/${this.tempData.id}`
      this.$http.delete(url).then(() => {
        this.isLoading = false
        this.getData()
      })
    }
  }
}
</script>
