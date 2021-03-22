export const transform = function (node, type, value) {
    if (!node.transform) node.transform = {}
    if (arguments.length === 3) {  //设置值
        var text = ''
        node.transform[type] = value
        for (var name in node.transform) {
            switch (name) {
                case 'translateX':
                case 'translateY':
                case 'translateZ':
                    text += name + "(" + node.transform[name] + 'px) '
                    break;
                case 'rotateX':
                case 'rotateY':
                case 'rotateZ':
                    text += name + "(" + node.transform[name] + 'deg) '
                    break;
                case 'scaleX':
                case 'scaleY':
                case 'scaleZ':
                    text += name + "(" + node.transform[name] + ') '
                    break;
            }
        }
        node.style.transform = node.style.webKitTransForm = text
    } else if (arguments.length === 2) { //读取值
        value = node.transform[type]
        if (value === undefined) {
            switch (type) {
                case 'translateX':
                case 'translateY':
                case 'translateZ':
                case 'rotateX':
                case 'rotateY':
                case 'rotateZ':
                    value = 0
                    break;
                case 'scaleX':
                case 'scaleY':
                case 'scaleZ':
                    value = 1
                    break;
            }
        }
        return value
    }
}