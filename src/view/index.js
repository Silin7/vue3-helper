import '../../lib/jquery/jquery.min'

function getGirlRandomFunc() {
  $.ajax({
    type: "get",
    url: "http://121.89.215.228:3000/api/other/girl_random",
    data: {},
    dataType: "json",
    success: function (data) {
    console.log('被输出值{ data }的输出结果是：', data);
    }
  })
}