let MyPlugin = {}
MyPlugin.install = function (Vue, options) {
    Vue.directive('getEle', {
        inserted(el, binding, vnode, oldVnode) {
            binding.value(el)
        }
    })
}
export default MyPlugin