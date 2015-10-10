  function getTaskStorage(){
    var storage = window.localStorage;
    function getAll(){
        var result = [];
        for(var i=0; i<storage.length; i++){
            var data = storage.getItem(storage.key(i));
            var task = JSON.parse(data);
            result.push(task);
        }
        return result;
    }
    function save(task){
        storage.setItem(task.id, JSON.stringify(task));
    }
    function remove(taskId){
        storage.removeItem(taskId);
    }
    function toggle(taskId){
        var task = JSON.parse(storage.getItem(taskId));
        task.isCompleted = !task.isCompleted;
        storage.setItem(taskId, JSON.stringify(task));
    }
    return {
        getAll : getAll,
        save : save,
        toggle : toggle,
        remove: remove
    }
}
