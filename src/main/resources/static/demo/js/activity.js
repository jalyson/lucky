/**
 *  定义页面全局变量
 * @type {{}}
 */
var activityForm = {};
/**
 * 工具js
 * @type {{}}
 */
var util = {};

$(function () {
    /*活动名称输入框焦点移开事件，检查字符长度*/
    $(".activity-form").on('blur', '#activity-name', activityForm.checkLengthOfActivityName);
    /*检查活动日期是否满足不早于现在，并不超过未来一个月*/
    $('.activity-form').on('change', '#activity-date', activityForm.checkActivityDate);
    /*活动天数输入框焦点移开事件,判断输入是否是整数且小于7天*/
    $('.activity-form').on('blur', '#activity-days', activityForm.checkActivityDays);
    /*活动性质点击事件，检查选择个数是否<=2*/
    $('.activity-form').on('click', 'input[name="type"]', activityForm.checkNumOfActivityKind);
    /*特殊资源点击事件,点击就关闭提示*/
    $('.activity-form').on('click', 'input[name="resource"]', activityForm.checkActivityResource);
    /*检查所有项是否满足要求*/
    $('.activity-form').on('click', '#createBtn', activityForm.checkAllFillIn);
    /*重置按钮的点击事件*/
    $('.activity-form').on('click', '#resetBtn', activityForm.reset);
    /*添加活动形式按钮点击事件*/
    $('.activity-form').on('click', '#addShapeBtn', activityForm.addActivityShape);
    /*活动形式输入框焦点移开事件*/
    $('#activity-shape-items').on('blur', 'textarea', activityForm.checkActivityShape);
    /*活动形式输入框焦点移开事件*/
    $('#activity-shape-items').on('click', '.remove-desc', activityForm.deleteActivityShape);
});


/**
 * 字符串去掉前后空格
 * @param $object jquery对象
 * @returns {string} 字符串
 */
util.inputStringTrim = function ($object) {
    var string = $object.val() || $object.text();
    $object.val(string);
    $object.text(string);
    return string.trim();
}
/**
 *检查是否填入
 * @param $object jquery对象
 * @returns {boolean} 当对象为空值时返回true
 */
util.isEmpty = function ($object) {
    if ($object.val() == '' || $object.val() == null || $object.val() == undefined || $object.val() == '-1') {
        return true;
    }
    return false;
}

/**
 * 活动名称长度检查，不能超过5
 */
activityForm.checkLengthOfActivityName = function () {
    var $activityName = $('#activity-name');
    /*获取提示元素*/
    var $warn = $activityName.next();
    /*检查活动名称是否填写*/
    if (util.isEmpty($activityName)) {
        $warn.html('请填写活动名称');
        $warn.css('display', 'inline');
        return;
    }
    /*输入的活动名称*/
    var activityName = $activityName.val();
    /*判断输入名称字符超过50，开启提示*/
    if (activityName.length > 5) {
        $warn.html('长度不能超过5');
        $warn.css('display', 'inline');
        return false;
    }
    $warn.css('display', 'none');
    return true;
}
/**
 * 活动日期检查，不能早于现在，且在未来一个月内
 */
activityForm.checkActivityDate = function () {
    var $activityDate = $('#activity-date');
    /*获取提示的元素*/
    var $warn = $activityDate.next();
    /*检查日期是否选择*/
    if (util.isEmpty($activityDate)) {
        $warn.html('请选择活动时间');
        $warn.css('display', 'inline');
        return;
    }
    /*input date类型获取的字符替换*/
    var dateStr = $activityDate.val().replace(/-/g, '/');
    /*转换成日期类型*/
    var date = new Date(dateStr);
    /*现在的时间*/
    var now = new Date();
    /*判断日期，满足不早于现在，并不超过未来一个月，提示关闭，否则开启*/
    if (date.setHours(now.getHours() + 1) < now || date > now.setMonth(now.getMonth() + 1)) {
        $warn.html('时间必须在未来一个月内');
        $warn.css('display', 'inline');
    } else {
        $warn.css('display', 'none');
    }
}
/**
 * 判断活动性质选择个数，当没选择或选取超过2个提示，并返回false
 * 否则返回true
 * @returns {boolean}
 */
activityForm.checkNumOfActivityKind = function () {
    /*活动性质选择的个数*/
    var checkedNum = $('input[name="type"]:checked').length;
    /*获取提示的元素*/
    var $warn = $('input[name="type"]').parent().parent().next();
    /*活动性质选择个数>2，开启提示*/
    if (checkedNum > 2) {
        $warn.html('最多只能选取2个');
        $warn.css('display', 'inline');
    } else if (checkedNum == 0) {/*没选择开启提示*/
        $warn.html('请选择活动性质');
        $warn.css('display', 'inline');
    } else {/*满足要求，关闭提示*/
        $warn.css('display', 'none');
        return true;
    }
    return false;
}
/**
 * 检查活动天数，不能超过7天
 */
activityForm.checkActivityDays = function () {
    var $activityDays = $('#activity-days');
    /*获取提示的元素*/
    var $warn = $activityDays.next();
    /*检查活动天数是否填写*/
    if (util.isEmpty($activityDays)) {
        $warn.html('请填写活动天数');
        $warn.css('display', 'inline');
        return;
    }
    /*获取输入的值*/
    var dayNumStr = $activityDays.val();
    /*强转成数值*/
    var dayNum = Number(dayNumStr);
    /*判断输入是否是整数且小于7天，不满足条件开启提示*/
    if (dayNum < 1 || dayNum > 7 || isNaN(dayNum)) {
        $warn.html('活动不能超过7天');
        $warn.css('display', 'inline');
    } else {
        $warn.css('display', 'none');
    }
}
/**
 *选择活动特殊资源，关闭提示
 */
activityForm.checkActivityResource = function () {
    var $warn = $('input[name="activity-resource"]').parent().parent().next();
    if ($warn.css('display') == 'inline') {
        $warn.css('display', 'none');
    }
}
/**
 * 检查所有必填项、所有填写是否符合要求
 */
activityForm.checkAllFillIn = function () {
    /*存储提示的元素*/
    var $warn;
    var $activityArea = $('#activity-area');
    /*检查活动名称是否填写正确*/
    activityForm.checkLengthOfActivityName();
    /*检查活动区域是否选择*/
    if (util.isEmpty($activityArea)) {
        $warn = $activityArea.next();
        $warn.html('请选择活动区域');
        $warn.css('display', 'inline');
    }
    /*检查日期是否填写正确*/
    activityForm.checkActivityDate();
    /*检查活动天数是否填写正确*/
    activityForm.checkActivityDays();

    /*检查活动性质选择个数*/
    activityForm.checkNumOfActivityKind();

    /*检查特殊资源是否选择*/
    if (util.isEmpty($('input[name="activity-resource"]:checked'))) {
        $warn = $('input[name="activity-resource"]').parent().parent().next();
        $warn.html('请选择特殊资源');
        $warn.css('display', 'inline');
    }
    /*检查活动性质是否填写*/
    activityForm.checkActivityShape();
    /*遍历索引*/
    var i = 0;
    /*提示元素的个数*/
    var len = $('.warnTip').length;
    /*遍历所有提示元素*/
    for (; i < len; i++) {
        /*当有提示元素是开启的，表示未按要求填写，中断遍历，*/
        if ($('.warnTip:eq(' + i + ')').css('display') == 'inline') {
            break;
        }
    }
    /*判断是否全部遍历完成，当遍历有中断，表示未按要求填写*/
    if (i < len) {
        alert('有项目填写不正确，请检查！');
    } else {
        alert('创建成功！');
    }
    $('.activity-form').submit();
}
/**
 * 重置
 */
activityForm.reset = function () {
    $('.warnTip').each(function () {
        $(this).css('display', 'none');
    });
    $('input').val('');
    $('input').each(function () {
        $(this).prop('checked', false);
    });
    $('#activity-area').val('-1');
    $('.activity-shape-contain .activity-shape-item:eq(0)').nextAll().remove();
}

/**
 * 添加活动形式块
 */
activityForm.addActivityShape = function () {
    var $descItems=$('#activity-shape-items').children();
    var activityShapeContainNum = $descItems.length;
    if (activityShapeContainNum < 3) {
        $cloneItem=$descItems.eq(0).clone();
        $cloneItem.find('textarea').val('');
        $cloneItem.find('.warnTip').text('');
        $('#activity-shape-items').append($cloneItem);
        if(activityShapeContainNum>0){
            $('.remove-desc').show();
        }
        activityForm.updateActivityShapeLabel();
    }else{
        alert('活动形式最多支持3种')
    }
}
/**
 * 删除活动形式块
 */
activityForm.deleteActivityShape = function () {
    var $descItems=$('#activity-shape-items').children();
    var activityShapeContainNum = $descItems.length;
    if (activityShapeContainNum >1) {
        $(this).parents(".item").remove();
        if(activityShapeContainNum<=2){
            $('.remove-desc').hide();
        }
    }
    activityForm.updateActivityShapeLabel();
}
/**
 * 检查活动形式是否填写
 */
activityForm.checkActivityShape = function () {
    var $activityShapeArr = $('textarea');
    var $warn;
    for (var i = 0; i < $activityShapeArr.length; i++) {
        $warn = $('textarea:eq(' + i + ')').next().next();
        if (util.isEmpty($('textarea:eq(' + i + ')'))) {
            $warn.html('请填写活动形式');
            $warn.css('display', 'inline');
        } else {
            $warn.css('display', 'none');
        }
    }


}
/**
 * 活动形式块增删，改变活动形式序号
 */
activityForm.updateActivityShapeLabel = function () {
    var $descItems=$('#activity-shape-items').children();
    $descItems.each(function(index,ele){
        $(ele).find('.label').html('活动形式' + (index+1));
        $(ele).find('textarea').attr('name','description['+index+']');
    });
}
