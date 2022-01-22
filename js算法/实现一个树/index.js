let arr = [
    {
        id:12,
        content:'123',
        fid:3
    },
    {
        id:10,
        content:'123',
        fid:3
    },
    {
        id:7,
        content:'123',
        fid:1
    },
    {
        id:9,
        content:'123',
        fid:1
    },
    {
        id:3,
        content:'123',
        fid:1
    }
]
let tree = {}


function digui (tree, newobj) {
    for(let key  in obj){
        if(obj[key].id==newobj.fid){
            return tree.child=newobj.fid
        }else{
            return digui(tree.child,newobj)
        }
    }
    return tree[newobj.fid]=newobj
}