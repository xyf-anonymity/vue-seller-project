import Vue from 'vue'
import moment from 'moment'

Vue.filter('dateFormat', (value,format) => {
    return moment(value).format( format || 'YYYY-MM-DD hh:mm:ss')
})

// 'MMMM Do YYYY, h:mm:ss a'