<template>
  <div>
    <loading :active.sync="isLoading" />
    <table class="table mt-4">
      <thead>
        <tr>
          <th>下單時間</th>
          <th>購買款項</th>
          <th>付款方式</th>
          <th>應付金額</th>
          <th>是否付款</th>
        </tr>
      </thead>
      <tbody v-if="orders.length">
        <tr
          v-for="(item, key) in orders"
          :key="key"
          :class="{'text-secondary': !item.is_paid}"
        >
          <td>{{ item.created.datetime }}</td>
          <td>
            <ul class="list-unstyled">
              <li
                v-for="(product, i) in item.products"
                :key="i"
              >
                {{ product.product.title }} × {{ product.quantity }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td>
            {{ item.payment }}
          </td>
          <td class="text-right">
            {{ item.amount }}
          </td>
          <td>
            <div class="custom-control custom-switch">
              <input
                :id="item.id"
                v-model="item.paid"
                type="checkbox"
                class="custom-control-input"
                @change="setOrderPaid(item)"
              >
              <label
                class="custom-control-label"
                :for="item.id"
              >
                <strong
                  v-if="item.paid"
                  class="text-success"
                >已付款</strong>
                <span
                  v-else
                  class="text-muted"
                >尚未付款</span>
              </label>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 分頁 -->
    <Pagination :pages="pagination" @emitPages="getOrders"></Pagination>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue'
export default {
  name: 'Orders',
  components: {
    Pagination
  },
  data () {
    return {
      pagination: {},
      orders: {
        user: {}
      },
      isLoading: false
    }
  },
  created () {
    this.getOrders()
  },
  methods: {
    getOrders (pages = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/orders?page=${pages}`
      this.$http.get(url).then(res => {
        this.orders = res.data.data
        const resPagination = res.data.meta.pagination
        resPagination.per_page = 5
        resPagination.total_pages = resPagination.total / resPagination.per_page
        this.pagination = resPagination
        console.log(this.pagination)
        this.isLoading = false
      })
    },
    setOrderPaid (item) {
      let url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/orders/${item.id}/paid`
      if (!item.paid) {
        url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/orders/${item.id}/unpaid`
      }

      this.$http.patch(url, item.id).then(() => {
        this.getOrders()
      })
    }
  }
}
</script>
