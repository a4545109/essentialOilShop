<template>
  <div>
    <!-- loading 套件 -->
    <loading :active.sync="isLoading"></loading>
    <div class="text-right mt-4">
      <button
        type="button"
        class="btn btn-primary"
        @click.prevent="openCouponModal('new')">
        建立新的優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, key) in coupons"
          :key="key">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}</td>
          <td>{{ item.deadline.datetime }}</td>
          <td>
            <span
              v-if="item.enabled"
              class="text-success">啟用</span>
            <span
              v-else
              class="text-muted">未起用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click.prevent="openCouponModal('edit', item)">
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click.prevent="openCouponModal('delete', item)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 優惠卷Modal -->
    <div id="couponModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">建立優惠券</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="title">標題</label>
              <input id="title"
                type="text"
                class="form-control"
                placeholder="請輸入標題"
                v-model="tempCoupon.title">
            </div>
            <div class="form-group">
              <label for="coupon_code">優惠碼</label>
              <input id="coupon_code"
                type="text"
                class="form-control"
                placeholder="請輸入優惠碼"
                v-model="tempCoupon.code">
            </div>
            <div class="form-group">
              <label for="due_date">到期日</label>
              <input id="due_date"
                type="date"
                class="form-control"
                v-model="due_date">
            </div>
            <div class="form-group">
              <label for="due_time">到期時間</label>
              <input id="due_time"
                type="time" step="1"
                class="form-control"
                v-model="due_time">
            </div>
            <div class="form-group">
              <label for="price">折扣百分比</label>
              <input id="price"
                type="number"
                class="form-control"
                placeholder="請輸入折扣數量"
                v-model="tempCoupon.percent">
            </div>
            <div class="form-group">
              <div class="form-check">
                <input id="enabled"
                  class="form-check-input"
                  type="checkbox"
                  :true-value="1"
                  :false-value="0"
                  v-model="tempCoupon.enabled">
                <label class="form-check-label" for="enabled" >是否啟用</label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" >
              關閉
            </button>
            <button type="button" class="btn btn-primary" @click="updateCoupons()">
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 刪除優惠卷Modal -->
    <div id="delCouponModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 id="exampleModalLabel" class="modal-title">
              <span>刪除產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ tempCoupon.title }}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">
              取消
            </button>
            <button type="button" class="btn btn-danger" @click="delCoupon">
              確認刪除
            </button>
          </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
/* global $ */
export default {
  name: 'Coupons',
  data () {
    return {
      coupons: {},
      tempCoupon: {},
      due_date: '',
      due_time: '',
      isLoading: false,
      isNew: false
    }
  },
  created () {
    const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/coupons`
    this.$http.get(url)
      .then((res) => {
        this.coupons = res.data.data
        this.getCoupons()
      })
  },
  methods: {
    // 取得優惠卷資料
    getCoupons (page = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/coupons?page=${page}`
      this.$http.get(url)
        .then(res => {
          this.coupons = res.data.data
          this.isLoading = false
        })
    },
    openCouponModal (isNew, item) {
      switch (isNew) {
        case 'new':
          this.isNew = true
          this.tempCoupon = {}
          $('#couponModal').modal('show')
          break
        case 'edit':
          this.tempCoupon = Object.assign({}, item)
          $('#couponModal').modal('show')
          this.isNew = false
          break
        case 'delete':
          this.tempCoupon = Object.assign({}, item)
          $('#delCouponModal').modal('show')
          break
        default:
          break
      }
    },
    delCoupon () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/coupon/${this.tempCoupon.id}`
      this.$http.delete(url, this.tempCoupon)
        .then(res => {
          this.getCoupons()
          $('#delCouponModal').modal('hide')
          this.isLoading = false
        })
    },
    updateCoupons () {
      // 新增優惠卷
      let url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/coupon`
      let httpMethod = 'post'
      // 當不是新增優惠卷時則切換成編輯優惠卷 API
      if (!this.isNew) {
        url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/coupon/${this.tempCoupon.id}`
        httpMethod = 'patch'
      }
      this.tempCoupon.deadline_at = `${this.due_date} ${this.due_time}`
      this.$http[httpMethod](url, this.tempCoupon).then(() => {
        $('#couponModal').modal('hide')
        this.getCoupons()
      }).catch(() => {
        this.$bus.$emit('message:push', '發生錯誤', 'danger')
      })
    }
  }
}
</script>
