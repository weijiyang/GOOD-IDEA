function Observable (obj) {
    let keys = Object.keys(obj)
    for(let i = 0; i< keys.length; i++){
        objectReative(obj, keys[i], obj[keys[i]])
    }
}

class Dep {
    constructor() {
        this.subs = []
    }
    add () {
        if(Dep.target){
            this.subs.push(Dep.target)
        }
    }
    notify () {
        this.subs.forEach(item => {
            item.update()
        })
    }
}
Dep.target = null

var dep = new Dep()
function objectReative(obj, key, val){
    Object.defineProperty(obj, key, {
        get () {
            dep.add()
            return val
        },
        set (newValue) {
            val = newValue
            dep.notify()
        }
    })
}