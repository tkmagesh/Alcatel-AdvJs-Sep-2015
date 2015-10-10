 $(function(){
    var taskStorage = getTaskStorage();
    taskStorage.getAll().forEach(addTaskToList);
    function addTaskToList(task){
        $("<li></li>")
            .html(task.name)
            .attr("task-id", task.id)
            .addClass(task.isCompleted ? "completed" : "")
            .prependTo("#olTaskList")
            .hide()
            .slideDown('slow');
    }

    $("#btnAddTask").click(function(){
        var taskName = $("#txtTask").val();
        var newTask = {
            id : Date.now(),
            name : taskName,
            isCompleted : false
        };
        taskStorage.save(newTask);
        addTaskToList(newTask);
        displayMessage("A new task is added");
    });
    $("#divMessage").hide();
    $("#olTaskList").on("click", "li", function(){
        var $this = $(this);
        $this.toggleClass("completed");
        taskStorage.toggle($this.attr("task-id"));
    });
    $("#btnRemoveCompleted").click(function(){
        $("#olTaskList > li.completed").fadeOut('slow', function(){
            $(this).remove();
            taskStorage.remove($(this).attr("task-id"));
        });
        displayMessage("Zero or more completed tasks are removed");

    });
    function displayMessage(msg){

        $("<div></div>")
            .addClass("message")
            .html(msg)
            .appendTo("#divMessages")
            .hide()
            .slideDown('slow')
            .delay(3000)
            .slideUp('fast', function(){
                $(this).remove();
            });
    }
});
