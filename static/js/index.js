import {getCookie} from "./lib";
// 动态事件绑定
$(".")


function showDetail(item) {
    $.ajax({
        url: `/challenge/${item}/detail`, method: 'get', success: function (res) {
            let ele = $("#models");
            ele.append(res);
            // 动态绑定时间
            $(".close").on('click', closeModel);
        }
    })

}

function closeModel() {
    $(".modal").remove()
    // document.getElementById(`model-${item}`).style.display = 'none'
}

function start(id) {
    // 启动容器
    $.ajax({
        url: `/challenge/${id}/start`, method: 'post', success: function (res) {
            if (res.status === 0) {
                // 启动成功
                reloadDetail(id)
            }
        }
    })
}

function reloadDetail(id) {
    $.ajax({
        url: `/challenge/${id}/detail`, method: 'get', success: function (res) {
            // let ele = document.getElementById(`model-${id}`);
            let ele = $(`#model-${id}`).first();
            ele.html(res)
        }
    })

}

function destroy(id) {
    // 销毁容器
    $.ajax({
        url: `/challenge/${id}/destroy`, method: 'post', success: function (res) {
            if (res.status === 0) {
                // 启动成功
                reloadDetail(id)
            }
        }
    })

}

function submitFlag(id) {
    // 提交flag
    let flag = document.getElementById(`flag-${id}`).value;
    let token = getCookie('token');
    if (!token) {
        window.location.href = '/login'
        return
    }
    $.ajax({
        url: `/challenge/${id}/submit_flag`,
        method: 'post',
        data: JSON.stringify({
            flag: flag
        }),
        contentType: 'application/json;charset=UTF-8',
        dataType: 'json',
        success: function (res) {
            if (res.status === 0) {
                // flag 正确 关闭刷新页面
                Message('success', '<strong>恭喜 您提交的flag正确!</strong>')
                window.location.reload()
            } else {
                Message('info', '<strong>抱歉 您提交的flag错误!</strong>')
            }
        }
    })
}