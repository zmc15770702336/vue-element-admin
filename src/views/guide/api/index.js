import request from '@/utils/request'

export default {
  getDept(pageSize, pageNo) {
    return request({
      url: `/commonAction.do?eventcode=query_data&funid=queryevent&pagetype=editgrid&query_funid=sys_dept&user_id=administrator`,
      method: 'post',
      data: `start=${pageNo}&limit=${pageSize}&where_sql=&where_value=&where_type=&is_query=1&query_type=0`
    }).then(response => response.data)
  },
  Crerte(data) {
    return request({
      url: `/commonAction.do`,
      method: 'post',
      data: `${data}`
    }).then(response => response.data)
  },
  auditSave(data) {
    return request({
      url: `/commonAction.do`,
      method: 'post',
      data: `${data}`
    }).then(response => response.data)
  },
  Delete(ids) {
    let keys = ''
    ids.forEach(d => {
      keys += 'keyid=' + d + '&'
    })
    return request({
      url: `/commonAction.do`,
      method: 'post',
      data: `funid=sys_dept&${keys}pagetype=editgrid&eventcode=delete_eg&user_id=administrator&dataType=json`
    }).then(response => response.data)
  }
}
