import { tojsonobj, tojsonstr } from '../utils/untial'
// 没有default 的解析下
let mutations = {
    change_status_bar: function(state, status) {
        state.status_bar_active = status
    },
    updated_cart_list: function(state, data) {
        let flag = true;
        state.cart_list.forEach((item, index) => {
            if (data.goods_id == item.goods_id) {
                //   console.log(1);
                flag = false;
                item.count++;
            }
        });
        if (flag) {
            state.cart_list.push(data);
            data.count = 1;
        }
        // console.log(state.cart_list);
        //  console.log(state.cart_list);

    },
    jia: function(state, obj) {
        state.cart_list.forEach((val, ind) => {
            if (val.goods_id == obj.goods_id) {
                val.count = obj.count
            }
            return val
        });

    },
    jian: function(state, obj) {
        state.cart_list.forEach((val, ind) => {
            if (val.goods_id == obj.goods_id) {
                val.count = obj.count
            }
            return val
        });

    }
};
export default mutations;
