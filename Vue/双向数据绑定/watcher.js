class Watcher {
    constructor (vm, exp, fn) {
        this.vm = vm
        this.exp = exp
        this.fn = fn
        this.value = this.get()
    }
    get () {
        Dep.target = this
        let value = this.vm.data[this.exp]
        Dep.target = null
        return value
    }
    update () {
        let value = this.vm.data[this.exp]
        let oldValue = this.value
        if(value != oldValue){
            this.fn.call(this, value)
        }
    }
}